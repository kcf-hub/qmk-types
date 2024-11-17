# QMK Types JSON Schemas

The schemas in this folder where generated from the schemas found in [QMK Firmwares data directory] (https://github.com/qmk/qmk_firmware/tree/master/data/schemas)

## Changes to those files

In accordance with the GPL 2 license any changes to the schemas must be documented. As this is not really possible in JSON files, here's a list of changes:

- @Buckwich 2024-11-17:
  - rename to *.json.schema
  - convert schemas to valid JSON
  - rename `definitions` to `$defs`
  - adjust `$id`s and `$ref`s to allow easier use
  - format with prettier
  - add descriptions, examples, and default value for `keyboard_v1.schema.json` (taken from QMKs documentation)