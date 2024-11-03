import { helloWorld } from './main';
import { mergeSchemas } from './merge-schemas';

describe('main', () => {
  test('helloWorld', () => {
    expect(helloWorld()).toBe('Hello, World!');
  });

  test('mergeSchemas', async () => {
    const mergedSchemas = await mergeSchemas();
    expect(mergedSchemas);
  });
});
