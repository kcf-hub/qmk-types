/* eslint-disable @typescript-eslint/no-unused-vars */
import { readFile } from 'fs/promises';
import { marked, Token, Tokens } from 'marked';

export interface TypeInfo {
  path: string;
  description?: string;
  examples?: string[];
  default?: string;
  type?: string;
  required?: boolean;
}
export async function parseMarkdown() {
  const infoJsonDoc = await readFile('qmk_firmware/docs/reference_info_json.md', 'utf8');

  const parsed: Token[] = marked.lexer(infoJsonDoc);

  const lists = parsed.filter(isListToken).filter((token) => token.raw.startsWith('* `'));

  const result: TypeInfo[] = [];

  // console.log(lists[0].items[0].tokens);
  // console.log(lists[2].items[0].tokens);
  lists.forEach((list, _a) => {
    list.items.forEach((item, _b) => {
      result.push(...parseListToken(item));
    });
  });

  //   lists.forEach((list, _a) => {
  //     list.items.forEach((item, _b) => {
  //       const firstItem = item.tokens[0];
  //       if (isTextToken(firstItem) && isCodespanToken(firstItem.tokens[0])) {
  //         console.log(firstItem.tokens.length);
  //       }
  //     });
  //   });
  return result;
}

function parseListToken(item: Tokens.ListItem, parentPath?: string) {
  const firstItem = item.tokens[0];
  const secondItem = item.tokens[1];
  const result: TypeInfo[] = [];
  if (isTextToken(firstItem)) {
    const firstItemsCode = firstItem.tokens[0];
    if (isCodespanToken(firstItemsCode)) {
      if (firstItem.tokens.length > 1) {
        //simple
        result.push(parseSimpleListToken(item, parentPath));
      } else {
        // nested
        if (isListToken(secondItem)) {
          secondItem.items.forEach((nestedItem) => {
            result.push(...parseListToken(nestedItem, parentPath ?? '' + firstItemsCode.text + '.'));
          });
        }
      }
    }
  }
  return result;
}

// function isListToken(token: Token): token is Tokens.List {
//     return token.type === 'list' && token.raw.startsWith('* `');
//   }

function isListToken(token: Token): token is Tokens.List {
  return token?.type === 'list';
}
function isTextToken(token: Token): token is Tokens.Text {
  return token.type === 'text';
}
function isCodespanToken(token: Token): token is Tokens.Codespan {
  return token.type === 'codespan';
}

function parseSimpleListToken(item: Tokens.ListItem, parentPath?: string) {
  const firstToken = item.tokens[0];
  const typeInfo: TypeInfo = {
    path: parentPath || '',
  };
  if (isTextToken(firstToken)) {
    const nameMatch = firstToken.text.match(/`([^`]+)`/);
    const typeMatch = firstToken.text.match(/<Badge[^>]*>([^<]+)<\/Badge>/);
    const requiredMatch = /<Badge>Required<\/Badge>/.test(firstToken.text);

    if (!nameMatch || !typeMatch) {
      console.log('thats weird', item);
      return null;
    }
    typeInfo.path += nameMatch[1];
    typeInfo.type = typeMatch[1];
    typeInfo.required = !!requiredMatch;
  } else {
    console.log('unexpected not text', item);
  }
  const secondToken = item.tokens[1];
  if (isListToken(secondToken)) {
    //throw new Error('not implemented');
    secondToken.items.forEach((item) => {
      if (item.text.startsWith('Default:')) {
        typeInfo.default = item.text.replace('Default:', '').trim();
        return;
      }
      if (item.text.startsWith('Example:')) {
        typeInfo.examples = [extractExample(item.text)];
        return;
      }
      typeInfo.description = item.text;
    });
    // console.log(secondToken);
  } else {
    console.log('unexpected not list', item);
  }
  return typeInfo;
}

function extractExample(text: string): string {
  const cleaedUp = text.replace('Example:', '').replaceAll('`', '').trim();
  try {
    return JSON.parse(cleaedUp);
  } catch (e) {
    // console.log(cleaedUp);
    return undefined;
  }
}
