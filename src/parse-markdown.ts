/* eslint-disable no-debugger */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { readFile } from 'fs/promises';
import { marked, Token, Tokens } from 'marked';
import { execArgv } from 'process';

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

  const lists = parsed.filter(isListToken);

  const result: TypeInfo[] = [];

  lists.forEach((list) => {
    result.push(...parseListToken(list));
  });

  return result;
}

function parseListToken(list: Tokens.List, parentPath?: string) {
  const result: TypeInfo[] = [];

  list.items.forEach((item) => {
    const textToken = item.tokens.find((token) => isTextToken(token));
    const listToken = item.tokens.find((token) => isListToken(token));

    if (!textToken) {
      return;
    }
    const textAnalysis = analyseText(textToken.text);
    if (!textAnalysis) {
      return;
    }

    if (textAnalysis.type) {
      //assume this is an simple value

      let data = {
        path: (parentPath ?? '') + textAnalysis.path,
        type: textAnalysis.type,
        required: textAnalysis.required,
      };
      if (listToken) {
        const a = analyseList(listToken);
        if (a.examples?.length === 0) delete a.examples;
        data = Object.assign(data, a);
      }
      result.push(data);
    } else {
      //assume this is a heading
      if (listToken) result.push(...parseListToken(listToken, (parentPath ?? '') + textAnalysis.path + '.'));
    }
  });

  return result;
}

function extractValues(text: string): string {
  try {
    return JSON.parse(text.replaceAll('`', ''));
  } catch (e) {
    // console.log(cleaedUp);
    return text.trim();
  }
}

function analyseText(text: string) {
  const nameMatch = text.match(/`([^`]+)`/);
  const typeMatch = text.match(/<Badge[^>]*>([^<]+)<\/Badge>/);
  const requiredMatch = /<Badge>Required<\/Badge>/.test(text);

  const name = nameMatch?.[1];
  if (!name) return undefined;
  return {
    path: nameMatch[1],
    type: typeMatch?.[1],
    required: !!requiredMatch,
  };
}

function analyseList(list: Tokens.List) {
  const details: { default?: string; examples?: string[]; description?: string; additionalProperties?: TypeInfo[] } = {
    examples: [],
  };

  list.items.forEach((item) => {
    const textToken = item.tokens.find((token) => isTextToken(token));
    const listToken = item.tokens.find((token) => isListToken(token));
    const somethingElse = item.tokens.find((token) => !isTextToken(token) && !isListToken(token));

    // console.log({ textToken: !!textToken, listToken: !!listToken });
    if (somethingElse) {
      console.error('found something interesting', somethingElse);
      if (isCodeToken(somethingElse) && somethingElse.lang === 'json') {
        details.examples!.push(JSON.parse(somethingElse.text));
      }
    }

    if (listToken) {
      const additionalProperties = parseListToken(listToken);
      details.additionalProperties = additionalProperties;
      details.description = details.description ?? textToken?.text;
      return;
    }

    if (!textToken) {
      console.error('why', textToken);
      return;
    }

    if (textToken.text.startsWith('Default:')) {
      details.default = extractValues(textToken.text.replace('Default:', ''));
      return;
    }
    if (textToken.text.startsWith('Example:')) {
      const exampleText = extractValues(textToken.text.replace('Example:', ''));
      if (exampleText) {
        details.examples!.push(exampleText);
      }
      return;
    }
    details.description = textToken.text;
  });
  return details;
}

function isListToken(token: Token): token is Tokens.List {
  return token?.type === 'list';
}

function isListItemToken(token: Token): token is Tokens.ListItem {
  return token?.type === 'list_item';
}
function isTextToken(token: Token): token is Tokens.Text {
  return token.type === 'text';
}
function isCodespanToken(token: Token): token is Tokens.Codespan {
  return token.type === 'codespan';
}
function isCodeToken(token: Token): token is Tokens.Code {
  return token?.type === 'code';
}
