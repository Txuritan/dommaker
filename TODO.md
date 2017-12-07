## DOMMaker todo list
  * [ ] Clean Up Code
  * [ ] Events
    ```js
    dm("div", {
      onclick: function (event) {
        alert("You Clicked Me!")
      }
    }, "Click Me!")
    ```
  * [ ] Styles
    ```js
    dm("div", {
      "style": "color: green;"
    }, "I'm Green!")
    dm("div", {
      "style": {"color": "green"}
    }, "I'm Green!")
    ```
  * [ ] Append (built-in document.append())
    ```js
    dm("div", null, "Hello!").append()
    ```
