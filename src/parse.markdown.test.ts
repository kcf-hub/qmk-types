import { writeFile } from 'fs/promises';
import { parseMarkdown } from './parse-markdown';

describe('parseMarkdown', () => {
  test('parseMarkdown', async () => {
    const result = await parseMarkdown();
    await writeFile('test.result.json', JSON.stringify(result, undefined, 2), 'utf-8');
    expect(await parseMarkdown()).toBe('Hello, World!');
  });
});
