var Hjson = require('hjson');

export function formater(input: string): string {
  const json = JSON.parse(input);
  return Hjson.stringify(
    json,

    {
      condense: 60,
      quotes: 'all',
      separator: true,
      bracesSameLine: true,
    },
  );
}

function stringifyCompactA(obj: any, indent = 4): string {
  function formatValue(value: any, level: number): string {
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      const keys = Object.keys(value);
      // If it has only one key, format as a single line
      if (
        keys.length === 1 &&
        value[0] !== 'properties' &&
        value[0] !== 'additionalProperties' &&
        keys[0] !== 'properties' &&
        keys[0] !== 'additionalProperties'
      ) {
        return `{"${keys[0]}": ${formatValue(value[keys[0] as any], level + 1)}}`;
      } else {
        // Otherwise, recursively format each key-value pair with indentation
        const nestedIndent = ' '.repeat((level + 1) * indent);
        const closingIndent = ' '.repeat(level * indent);
        const entries = keys.map((k) => `${nestedIndent}"${k}": ${formatValue(value[k], level + 1)}`).join(',\n');
        return `{\n${entries}\n${closingIndent}}`;
      }
    } else if (Array.isArray(value)) {
      // Format arrays normally
      return `[${value.map((item) => formatValue(item, level + 1)).join(', ')}]`;
    } else {
      // Format primitive values
      return JSON.stringify(value);
    }
  }

  return formatValue(obj, 0);
}

function addNewlineAfterPropertiesWithIndentation(jsonString: string): string {
  // This regex looks for lines containing `properties: { "`, capturing leading indentation
  return jsonString.replace(/^(\s*)("properties": {)(".*)}$/gm, '$1$2\n$1     $3\n$1}');
}

type JsonObject = { [key: string]: any };

function stringifyCompactB(obj: JsonObject, indent = 2, maxSingleLineLength = 80): string {
  function formatValue(value: any, level: number): string {
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      const keys = Object.keys(value);
      const nestedIndent = ' '.repeat((level + 1) * indent);
      const closingIndent = ' '.repeat(level * indent);

      // Try formatting as a single line if content is small
      const singleLine = `{ ${keys.map((k) => `"${k}": ${JSON.stringify(value[k])}`).join(', ')} }`;
      if (singleLine.length <= maxSingleLineLength) {
        return singleLine;
      }

      // Otherwise, format each key-value pair on a new line
      const entries = keys.map((k) => `${nestedIndent}"${k}": ${formatValue(value[k], level + 1)}`).join(',\n');
      return `{\n${entries}\n${closingIndent}}`;
    } else if (Array.isArray(value)) {
      // Format arrays normally
      return `[${value.map((item) => formatValue(item, level + 1)).join(', ')}]`;
    } else {
      // Format primitive values
      return JSON.stringify(value);
    }
  }

  return formatValue(obj, 0);
}
