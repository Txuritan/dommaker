// TODO: Actually use a testing framework and not document.append()

document.body.appendChild(
    dm("div", null, [
        dm("div", "#hello", "id 1"),
        dm("div",
            dm("div", "#hello", null),
            "id 2"
        ),

        dm("div", {
            "id": "hello"
        }, "id 3"),

        dm("div", [
            ["id", "hello"]
        ], "id 4"),


        dm("div", ".class1.class2#hello", "class 1"),
        dm("div",
            dm("div", ".class1.class2#hello", null),
            "class 2"
        ),

        dm("div", {
            "class": "class1 class2",
            "id": "hello"
        }, "class 3"),
        dm("div", {
            "class": ".class1.class2",
            "id": "hello"
        }, "class 4"),
        dm("div", {
            "class": ["class1", "class2"],
            "id": "hello"
        }, "class 5"),

        dm("div", [
            ["class", "class1 class2"],
            ["id", "hello"]
        ], "class 6"),
        dm("div", [
            ["class", ".class1.class2"],
            ["id", "hello"]
        ], "class 7"),
        dm("div", [
            ["class", ["class1", "class2"]],
            ["id", "hello"]
        ], "class 8"),


        dm("div", ".class1.class2#hello~test(maybe)", "class 9"),

        dm("div", null, "text 1"),
        dm("div", null, dm("div", null, "text 2")),
        dm("div", null, ["text 3", dm("div", null, "text 4")])
    ])
);
