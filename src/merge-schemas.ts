import { readFile, writeFile } from 'fs/promises';
import { TypeInfo } from './parse-markdown.js';
import { setProperty } from 'dot-prop';

export async function mergeSchemas() {
  const additionalData: TypeInfo[] = JSON.parse(await readFile('test.result.json', 'utf8'));
  const schema = JSON.parse(await readFile('qmk_firmware/data/schemas/keyboard.jsonschema', 'utf8'));

  console.log(schema);
  console.log(additionalData);

  // const dotProp = await import('dot-prop');

  additionalData.forEach((data) => {
    const pathParts = data.path.split('.');
    const a = pathParts.map((part) => `properties.${part}`).join('.');
    console.log(data.examples);
    setProperty(schema, a + '.default', data.default);
    setProperty(schema, a + '.description', data.description);
    setProperty(schema, a + '.examples', data.examples);

    console.log(schema);
    // dotProp.setProperty(schema, a + '.description', data.description);
  });

  await writeFile('qmk_firmware/data/schemas/keyboard.schema.json', JSON.stringify(schema), 'utf8');
}
