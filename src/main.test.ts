import { mergeSchemas } from './merge-schemas';
import { expect, test } from 'vitest';

import { readFile, writeFile } from 'fs/promises';
import { parseMarkdown } from './parse-markdown';
import { formater } from './formatter';

test('mergeSchemas', async () => {
  const mergedSchemas = await mergeSchemas();
  expect(mergedSchemas);
});

test('parseMarkdown', async () => {
  const result = await parseMarkdown();
  await writeFile('test.result.json', JSON.stringify(result, undefined, 2), 'utf-8');
  expect(result);
});

test('formatter', async () => {
  const input = await readFile('qmk_firmware/data/schemas/keyboard.jsonschema', 'utf-8');
  const result = await formater(input);
  await writeFile('qmk_firmware/data/schemas/keyboard.jsonschema', result, 'utf-8');
  expect(result);
});
