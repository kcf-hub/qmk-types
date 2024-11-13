const a = {
  type: 'list',
  raw: '* `led_matrix`\n    * `animations` <Badge type="info">Object: Boolean</Badge>\n        * A dictionary of effects to enable or disable. Effects which are absent default to `false`.\n        * Example:\n            ```json\n            {\n                "alphas_mods": true,\n                "breathing": true,\n                "cycle_left_right": false\n            },\n            ```\n    * `center_point` <Badge type="info">Array: Number</Badge>\n        * The centroid (geometric center) of the LEDs. Used for certain effects.\n        * Default: `[112, 32]`\n    * `default`\n        * `animation` <Badge type="info">String</Badge>\n            * The default effect. Must be one of `led_matrix.animations`\n            * Default: `"solid"`\n        * `on` <Badge type="info">Boolean</Badge>\n            * The default enabled state.\n            * Default: `true`\n        * `val` <Badge type="info">Number</Badge>\n            * The default brightness level.\n            * Default: `max_brightness`\n        * `speed` <Badge type="info">Number</Badge>\n            * The default animation speed.\n            * Default: `128`\n    * `driver` <Badge type="info">String</Badge> <Badge>Required</Badge>\n        * The driver to use. Must be one of `custom`, `is31fl3218`, `is31fl3731`, `is31fl3733`, `is31fl3736`, `is31fl3737`, `is31fl3741`, `is31fl3742a`, `is31fl3743a`, `is31fl3745`, `is31fl3746a`, `snled27351`.\n    * `layout` <Badge type="info">Array: Object</Badge> <Badge>Required</Badge>\n        * List of LED configuration dictionaries. Each dictionary contains:\n            * `flags` <Badge type="info">Number</Badge> <Badge>Required</Badge>\n                * A bitfield of flags describing the type of LED.\n            * `x` <Badge type="info">Number</Badge> <Badge>Required</Badge>\n                * The position of the LED in the horizontal axis, from 0 to 224.\n            * `y` <Badge type="info">Number</Badge> <Badge>Required</Badge>\n                * The position of the LED in the vertical axis, from 0 to 64.\n            * `matrix` <Badge type="info">Matrix</Badge>\n                * The key matrix position associated with the LED.\n                * Example: `[0, 2]`\n            * Example: `{"matrix": [2, 1], "x": 20, "y": 48, "flags": 2},`\n    * `led_flush_limit` <Badge type="info">Number</Badge>\n        * Limits in milliseconds how frequently an animation will update the LEDs.\n        * Default: `16`\n    * `led_process_limit` <Badge type="info">Number</Badge>\n        * Limits the number of LEDs to process in an animation per task run (increases keyboard responsiveness).\n        * Default: `led_count / 5`\n    * `max_brightness` <Badge type="info">Number</Badge>\n        * The maximum value which brightness is scaled to, from 0 to 255.\n        * Default: `255`\n    * `react_on_keyup` <Badge type="info">Boolean</Badge>\n        * Animations react to keyup instead of keydown.\n        * Default: `false`\n    * `sleep` <Badge type="info">Boolean</Badge>\n        * Turn off the LEDs when the host goes to sleep.\n        * Default: `false`\n    * `speed_steps` <Badge type="info">Number</Badge>\n        * The number of speed adjustment steps.\n        * Default: `16`\n    * `split_count` <Badge type="info">Array: Number</Badge>\n        * For split keyboards, the number of LEDs on each half.\n        * Example: `[16, 16]`\n    * `timeout` <Badge type="info">Number</Badge>\n        * The LED activity timeout in milliseconds.\n        * Default: `0` (no timeout)\n    * `val_steps` <Badge type="info">Number</Badge>\n        * The number of brightness adjustment steps.\n        * Default: `8`',
  ordered: false,
  start: '',
  loose: false,
  items: [
    {
      type: 'list_item',
      raw: '* `led_matrix`\n    * `animations` <Badge type="info">Object: Boolean</Badge>\n        * A dictionary of effects to enable or disable. Effects which are absent default to `false`.\n        * Example:\n            ```json\n            {\n                "alphas_mods": true,\n                "breathing": true,\n                "cycle_left_right": false\n            },\n            ```\n    * `center_point` <Badge type="info">Array: Number</Badge>\n        * The centroid (geometric center) of the LEDs. Used for certain effects.\n        * Default: `[112, 32]`\n    * `default`\n        * `animation` <Badge type="info">String</Badge>\n            * The default effect. Must be one of `led_matrix.animations`\n            * Default: `"solid"`\n        * `on` <Badge type="info">Boolean</Badge>\n            * The default enabled state.\n            * Default: `true`\n        * `val` <Badge type="info">Number</Badge>\n            * The default brightness level.\n            * Default: `max_brightness`\n        * `speed` <Badge type="info">Number</Badge>\n            * The default animation speed.\n            * Default: `128`\n    * `driver` <Badge type="info">String</Badge> <Badge>Required</Badge>\n        * The driver to use. Must be one of `custom`, `is31fl3218`, `is31fl3731`, `is31fl3733`, `is31fl3736`, `is31fl3737`, `is31fl3741`, `is31fl3742a`, `is31fl3743a`, `is31fl3745`, `is31fl3746a`, `snled27351`.\n    * `layout` <Badge type="info">Array: Object</Badge> <Badge>Required</Badge>\n        * List of LED configuration dictionaries. Each dictionary contains:\n            * `flags` <Badge type="info">Number</Badge> <Badge>Required</Badge>\n                * A bitfield of flags describing the type of LED.\n            * `x` <Badge type="info">Number</Badge> <Badge>Required</Badge>\n                * The position of the LED in the horizontal axis, from 0 to 224.\n            * `y` <Badge type="info">Number</Badge> <Badge>Required</Badge>\n                * The position of the LED in the vertical axis, from 0 to 64.\n            * `matrix` <Badge type="info">Matrix</Badge>\n                * The key matrix position associated with the LED.\n                * Example: `[0, 2]`\n            * Example: `{"matrix": [2, 1], "x": 20, "y": 48, "flags": 2},`\n    * `led_flush_limit` <Badge type="info">Number</Badge>\n        * Limits in milliseconds how frequently an animation will update the LEDs.\n        * Default: `16`\n    * `led_process_limit` <Badge type="info">Number</Badge>\n        * Limits the number of LEDs to process in an animation per task run (increases keyboard responsiveness).\n        * Default: `led_count / 5`\n    * `max_brightness` <Badge type="info">Number</Badge>\n        * The maximum value which brightness is scaled to, from 0 to 255.\n        * Default: `255`\n    * `react_on_keyup` <Badge type="info">Boolean</Badge>\n        * Animations react to keyup instead of keydown.\n        * Default: `false`\n    * `sleep` <Badge type="info">Boolean</Badge>\n        * Turn off the LEDs when the host goes to sleep.\n        * Default: `false`\n    * `speed_steps` <Badge type="info">Number</Badge>\n        * The number of speed adjustment steps.\n        * Default: `16`\n    * `split_count` <Badge type="info">Array: Number</Badge>\n        * For split keyboards, the number of LEDs on each half.\n        * Example: `[16, 16]`\n    * `timeout` <Badge type="info">Number</Badge>\n        * The LED activity timeout in milliseconds.\n        * Default: `0` (no timeout)\n    * `val_steps` <Badge type="info">Number</Badge>\n        * The number of brightness adjustment steps.\n        * Default: `8`',
      task: false,
      checked: undefined,
      loose: false,
      text: '`led_matrix`\n  * `animations` <Badge type="info">Object: Boolean</Badge>\n      * A dictionary of effects to enable or disable. Effects which are absent default to `false`.\n      * Example:\n          ```json\n          {\n              "alphas_mods": true,\n              "breathing": true,\n              "cycle_left_right": false\n          },\n          ```\n  * `center_point` <Badge type="info">Array: Number</Badge>\n      * The centroid (geometric center) of the LEDs. Used for certain effects.\n      * Default: `[112, 32]`\n  * `default`\n      * `animation` <Badge type="info">String</Badge>\n          * The default effect. Must be one of `led_matrix.animations`\n          * Default: `"solid"`\n      * `on` <Badge type="info">Boolean</Badge>\n          * The default enabled state.\n          * Default: `true`\n      * `val` <Badge type="info">Number</Badge>\n          * The default brightness level.\n          * Default: `max_brightness`\n      * `speed` <Badge type="info">Number</Badge>\n          * The default animation speed.\n          * Default: `128`\n  * `driver` <Badge type="info">String</Badge> <Badge>Required</Badge>\n      * The driver to use. Must be one of `custom`, `is31fl3218`, `is31fl3731`, `is31fl3733`, `is31fl3736`, `is31fl3737`, `is31fl3741`, `is31fl3742a`, `is31fl3743a`, `is31fl3745`, `is31fl3746a`, `snled27351`.\n  * `layout` <Badge type="info">Array: Object</Badge> <Badge>Required</Badge>\n      * List of LED configuration dictionaries. Each dictionary contains:\n          * `flags` <Badge type="info">Number</Badge> <Badge>Required</Badge>\n              * A bitfield of flags describing the type of LED.\n          * `x` <Badge type="info">Number</Badge> <Badge>Required</Badge>\n              * The position of the LED in the horizontal axis, from 0 to 224.\n          * `y` <Badge type="info">Number</Badge> <Badge>Required</Badge>\n              * The position of the LED in the vertical axis, from 0 to 64.\n          * `matrix` <Badge type="info">Matrix</Badge>\n              * The key matrix position associated with the LED.\n              * Example: `[0, 2]`\n          * Example: `{"matrix": [2, 1], "x": 20, "y": 48, "flags": 2},`\n  * `led_flush_limit` <Badge type="info">Number</Badge>\n      * Limits in milliseconds how frequently an animation will update the LEDs.\n      * Default: `16`\n  * `led_process_limit` <Badge type="info">Number</Badge>\n      * Limits the number of LEDs to process in an animation per task run (increases keyboard responsiveness).\n      * Default: `led_count / 5`\n  * `max_brightness` <Badge type="info">Number</Badge>\n      * The maximum value which brightness is scaled to, from 0 to 255.\n      * Default: `255`\n  * `react_on_keyup` <Badge type="info">Boolean</Badge>\n      * Animations react to keyup instead of keydown.\n      * Default: `false`\n  * `sleep` <Badge type="info">Boolean</Badge>\n      * Turn off the LEDs when the host goes to sleep.\n      * Default: `false`\n  * `speed_steps` <Badge type="info">Number</Badge>\n      * The number of speed adjustment steps.\n      * Default: `16`\n  * `split_count` <Badge type="info">Array: Number</Badge>\n      * For split keyboards, the number of LEDs on each half.\n      * Example: `[16, 16]`\n  * `timeout` <Badge type="info">Number</Badge>\n      * The LED activity timeout in milliseconds.\n      * Default: `0` (no timeout)\n  * `val_steps` <Badge type="info">Number</Badge>\n      * The number of brightness adjustment steps.\n      * Default: `8`',
      tokens: [
        {
          type: 'text',
          raw: '`led_matrix`\n',
          text: '`led_matrix`',
          tokens: [{ type: 'codespan', raw: '`led_matrix`', text: 'led_matrix' }],
        },
        {
          type: 'list',
          raw: '  * `animations` <Badge type="info">Object: Boolean</Badge>\n      * A dictionary of effects to enable or disable. Effects which are absent default to `false`.\n      * Example:\n          ```json\n          {\n              "alphas_mods": true,\n              "breathing": true,\n              "cycle_left_right": false\n          },\n          ```\n  * `center_point` <Badge type="info">Array: Number</Badge>\n      * The centroid (geometric center) of the LEDs. Used for certain effects.\n      * Default: `[112, 32]`\n  * `default`\n      * `animation` <Badge type="info">String</Badge>\n          * The default effect. Must be one of `led_matrix.animations`\n          * Default: `"solid"`\n      * `on` <Badge type="info">Boolean</Badge>\n          * The default enabled state.\n          * Default: `true`\n      * `val` <Badge type="info">Number</Badge>\n          * The default brightness level.\n          * Default: `max_brightness`\n      * `speed` <Badge type="info">Number</Badge>\n          * The default animation speed.\n          * Default: `128`\n  * `driver` <Badge type="info">String</Badge> <Badge>Required</Badge>\n      * The driver to use. Must be one of `custom`, `is31fl3218`, `is31fl3731`, `is31fl3733`, `is31fl3736`, `is31fl3737`, `is31fl3741`, `is31fl3742a`, `is31fl3743a`, `is31fl3745`, `is31fl3746a`, `snled27351`.\n  * `layout` <Badge type="info">Array: Object</Badge> <Badge>Required</Badge>\n      * List of LED configuration dictionaries. Each dictionary contains:\n          * `flags` <Badge type="info">Number</Badge> <Badge>Required</Badge>\n              * A bitfield of flags describing the type of LED.\n          * `x` <Badge type="info">Number</Badge> <Badge>Required</Badge>\n              * The position of the LED in the horizontal axis, from 0 to 224.\n          * `y` <Badge type="info">Number</Badge> <Badge>Required</Badge>\n              * The position of the LED in the vertical axis, from 0 to 64.\n          * `matrix` <Badge type="info">Matrix</Badge>\n              * The key matrix position associated with the LED.\n              * Example: `[0, 2]`\n          * Example: `{"matrix": [2, 1], "x": 20, "y": 48, "flags": 2},`\n  * `led_flush_limit` <Badge type="info">Number</Badge>\n      * Limits in milliseconds how frequently an animation will update the LEDs.\n      * Default: `16`\n  * `led_process_limit` <Badge type="info">Number</Badge>\n      * Limits the number of LEDs to process in an animation per task run (increases keyboard responsiveness).\n      * Default: `led_count / 5`\n  * `max_brightness` <Badge type="info">Number</Badge>\n      * The maximum value which brightness is scaled to, from 0 to 255.\n      * Default: `255`\n  * `react_on_keyup` <Badge type="info">Boolean</Badge>\n      * Animations react to keyup instead of keydown.\n      * Default: `false`\n  * `sleep` <Badge type="info">Boolean</Badge>\n      * Turn off the LEDs when the host goes to sleep.\n      * Default: `false`\n  * `speed_steps` <Badge type="info">Number</Badge>\n      * The number of speed adjustment steps.\n      * Default: `16`\n  * `split_count` <Badge type="info">Array: Number</Badge>\n      * For split keyboards, the number of LEDs on each half.\n      * Example: `[16, 16]`\n  * `timeout` <Badge type="info">Number</Badge>\n      * The LED activity timeout in milliseconds.\n      * Default: `0` (no timeout)\n  * `val_steps` <Badge type="info">Number</Badge>\n      * The number of brightness adjustment steps.\n      * Default: `8`',
          ordered: false,
          start: '',
          loose: false,
          items: [
            {
              type: 'list_item',
              raw: '  * `animations` <Badge type="info">Object: Boolean</Badge>\n      * A dictionary of effects to enable or disable. Effects which are absent default to `false`.\n      * Example:\n          ```json\n          {\n              "alphas_mods": true,\n              "breathing": true,\n              "cycle_left_right": false\n          },\n          ```\n',
              task: false,
              checked: undefined,
              loose: false,
              text: '`animations` <Badge type="info">Object: Boolean</Badge>\n  * A dictionary of effects to enable or disable. Effects which are absent default to `false`.\n  * Example:\n      ```json\n      {\n          "alphas_mods": true,\n          "breathing": true,\n          "cycle_left_right": false\n      },\n      ```',
              tokens: [
                {
                  type: 'text',
                  raw: '`animations` <Badge type="info">Object: Boolean</Badge>\n',
                  text: '`animations` <Badge type="info">Object: Boolean</Badge>',
                  tokens: [
                    { type: 'codespan', raw: '`animations`', text: 'animations' },
                    { type: 'text', raw: ' ', text: ' ' },
                    {
                      type: 'html',
                      raw: '<Badge type="info">',
                      inLink: false,
                      inRawBlock: false,
                      block: false,
                      text: '<Badge type="info">',
                    },
                    { type: 'text', raw: 'Object: Boolean', text: 'Object: Boolean' },
                    { type: 'html', raw: '</Badge>', inLink: false, inRawBlock: false, block: false, text: '</Badge>' },
                  ],
                },
                {
                  type: 'list',
                  raw: '  * A dictionary of effects to enable or disable. Effects which are absent default to `false`.\n  * Example:\n      ```json\n      {\n          "alphas_mods": true,\n          "breathing": true,\n          "cycle_left_right": false\n      },\n      ```',
                  ordered: false,
                  start: '',
                  loose: false,
                  items: [
                    {
                      type: 'list_item',
                      raw: '  * A dictionary of effects to enable or disable. Effects which are absent default to `false`.\n',
                      task: false,
                      checked: undefined,
                      loose: false,
                      text: 'A dictionary of effects to enable or disable. Effects which are absent default to `false`.',
                      tokens: [
                        {
                          type: 'text',
                          raw: 'A dictionary of effects to enable or disable. Effects which are absent default to `false`.',
                          text: 'A dictionary of effects to enable or disable. Effects which are absent default to `false`.',
                          tokens: [
                            {
                              type: 'text',
                              raw: 'A dictionary of effects to enable or disable. Effects which are absent default to ',
                              text: 'A dictionary of effects to enable or disable. Effects which are absent default to ',
                            },
                            { type: 'codespan', raw: '`false`', text: 'false' },
                            { type: 'text', raw: '.', text: '.' },
                          ],
                        },
                      ],
                    },
                    {
                      type: 'list_item',
                      raw: '  * Example:\n      ```json\n      {\n          "alphas_mods": true,\n          "breathing": true,\n          "cycle_left_right": false\n      },\n      ```',
                      task: false,
                      checked: undefined,
                      loose: false,
                      text: 'Example:\n  ```json\n  {\n      "alphas_mods": true,\n      "breathing": true,\n      "cycle_left_right": false\n  },\n  ```',
                      tokens: [
                        {
                          type: 'text',
                          raw: 'Example:\n',
                          text: 'Example:',
                          tokens: [{ type: 'text', raw: 'Example:', text: 'Example:' }],
                        },
                        {
                          type: 'code',
                          raw: '  ```json\n  {\n      "alphas_mods": true,\n      "breathing": true,\n      "cycle_left_right": false\n  },\n  ```',
                          lang: 'json',
                          text: '{\n    "alphas_mods": true,\n    "breathing": true,\n    "cycle_left_right": false\n},',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
