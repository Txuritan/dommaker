# DOMMaker v1.0.0
DOMMaker is a JS HTML generator based off a script I made for [JSON table creation](https://github.com/Txuritan/mental/blob/3e988c224e73960faeaf2ea103f1e22fcf13908d/src/main/resources/assets/mental/progress.html).

Similar to [Hyperscript](https://github.com/hyperhype/hyperscript/) and should be compatible.

## Examples
Simple HTML page.
```js
dm("html", null, [
  dm("head", null, [
    dm("meta", {
      "name":"viewport",
      "content": "width=device-width, initial-scale=1"
    }, null),
    dm("title", null, "DOMMaker Example")
  ]),
  dm("body", null, [
    dm("h1", null, "Hello!"),
    "This page is made in DOMMaker!",
    dm("a", {
      "href": "https://txuritan.github.io/dommaker/getting-started/"
    }, "Click here to get started.")
  ])
])
```

## Versions
  * v1.1.0
    * Being worked on.
      * Now written in Typescript!
      * Will have more features!
  * v1.0.0
    * Already made with most of the features.
    * Also broken **DONT USE IT**

## JSDOC
Head on over to docs/index.md.
