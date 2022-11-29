# babel-formatted-log

This plugin could styling your console output

## Usage

### 1. Install
Yarn:

`yarn add -D babel-formatted-log`

Npm:

`npm --save-dev babel-formatted-log`

### 2. Configuring

Add following to your `.babelrc` or `babel.config.json`

```
{
  "plugins": [
    // ...
    [
      "module:babel-formatted-log",
      {
        "types": {
          "error": { "color": "white", "background": "blue", "divider": "\n" }
        }
      }
    ]
  ]
}
```

Config above will style all your ```console.error``` outputs. To style other console properties (warn, log) extend ```types``` config with console property as key:
 ```
{
  "types": {
    "error": { "color": "white", "background": "blue", "divider": "\n" }, // styling console.error outputs
    "warn": { "color": "#ffee00", "background": "rgb(0,0,0)", "font-size": "28px", "divider": "---" }, // styling console.warn outputs
    "log": { "border": "1px solid #d64021 ", "font-weight": "800" }, // styling console.log outputs
  }
}
```

All options for styling you can find [here](https://developer.mozilla.org/en-US/docs/Web/API/console#outputting_text_to_the_console:~:text=The%20properties%20usable%20along%20with%20the%20%25c%20syntax%20are%20as%20follows%20(at%20least%2C%20in%20Firefox%20%E2%80%94%20they%20may%20differ%20in%20other%20browsers)%3A)

<table>
  <thead>
    <tr>
      <td><b>Property</b></td>
      <td><b>Default value</b></td>
      <td><b>Example</b></td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>divider</code></td>
      <td>' ' (white space)</td>
      <td>With divider '---' <code>console.error('text1', 'text2') => console.log('text1---text2)</code></td>
    </tr>
  </tbody>
</table>
