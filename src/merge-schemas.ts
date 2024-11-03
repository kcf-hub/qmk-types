import { readFile, writeFile } from 'fs/promises';
import { TypeInfo } from './parse-markdown';

export async function mergeSchemas() {
  const additionalData: TypeInfo[] = JSON.parse(await readFile('test.result.json', 'utf8'));
  const schema = JSON.parse(await readFile('qmk_firmware/data/schemas/keyboard.jsonschema', 'utf8'));

  console.log(schema);
  console.log(additionalData);

  const dotProp = await import('dot-prop');

  additionalData.forEach((data) => {
    const pathParts = data.path.split('.');
    const a = pathParts.map((part) => `properties.${part}`).join('.');

    dotProp.setProperty(schema, a + '.description', data.description);
    dotProp.setProperty(schema, a + '.examples', data.examples);
    dotProp.setProperty(schema, a + '.default', data.default);
    // dotProp.setProperty(schema, a + '.description', data.description);
  });

  await writeFile('qmk_firmware/data/schemas/keyboard.schema.json', JSON.stringify(schema, undefined, 4), 'utf8');
}
