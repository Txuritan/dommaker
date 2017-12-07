/**
 * Creates element(s) based off given tag, attribute, and children elements.
 *
 * @example
 * // Returns <div id="hello"></div>
 * dm("div", "#hello", null)
 * dm("div", dm("div", "#hello", null), null)
 *
 * dm("div", {"id": "hello"}, null)
 *
 * dm("div", [["id", "hello"]], null)
 *
 * @example
 * // Returns <div class="class1 class2" id="hello"></div>
 * dm("div", ".class1.class2#hello", null)
 * dm("div", dm("div", ".class1.class2#hello", null), null)
 *
 * dm("div", {"class": "class1 class2", "id": "hello"}, null)
 * dm("div", {"class": ".class1.class2", "id": "hello"}, null)
 * dm("div", {"class": ["class1", "class2"], "id": "hello"}, null)
 *
 * dm("div", [["class", "class1 class2"], ["id", "hello"]], null)
 * dm("div", [["class", ".class1.class2"], ["id", "hello"]], null)
 * dm("div", [["class", ["class1", "class2"]], ["id", "hello"]], null)
 *
 * @example
 * // Returns <div><div>Hello</div></div>
 * dm("div", null, dm("div", null, "Hello"))
 *
 * dm("div", null, [dm("div", null, "Hello")])
 *
 * @param {String} tag The name of the tag.
 * @param {String|Element|Array|Object} attributes The tag attributes.
 * @param {String|Array|Element} children Tag child elements.
 *
 * @returns {Element}
 *
 * @author Ian Cronkright <txurtian@yahoo.com>
 * @license MIT
 * @version 1.0.0
 */
function dm(tag, attributes, children) {
    if (!String.prototype.contains) {
        String.prototype.contains = function(s, i) {
            return this.indexOf(s, i) !== -1;
        }
    }
    /**
     * This is the regex parser that will parse a string and pull out classes, an id, and datasets
     *
     * @param {String} input A string that contains either a class, id, or dataset.
     *
     * @author Ian Cronkright <txurtian@yahoo.com>
     * @since 1.0.0
     */
    function rdm(input) {
        var inputSplit = input.split(/(?=[#.~])/);
        var outputObject = {};
        for (var i = 0; i < inputSplit.length; i++) {
            if (inputSplit[i] !== "") {
                if (inputSplit[i].charAt(0) === ".") {
                    if (!outputObject["class"]) {
                        outputObject["class"] = [];
                    }
                    outputObject["class"].push(inputSplit[i].substring(1));
                } else if (inputSplit[i].charAt(0) === "#") {
                    if (!outputObject["id"]) {
                        outputObject["id"] = [];
                    }
                    outputObject["id"].push(inputSplit[i].substring(1));
                } else if (inputSplit[i].charAt(0) === "~") {
                    if (!outputObject["data"]) {
                        outputObject["data"] = {};
                    }
                    var tmpData = inputSplit[i].split(/[~()]/).filter(Boolean);
                    for (var j = 0; j < tmpData.length; j += 2) {
                        outputObject["data"][tmpData[j].replace(" ", "")] = tmpData[j + 1].replace(" ", "");
                    }
                }
            }
        }
        if (outputObject["class"]) {
            var tmpClassString = "";
            for (var objectClass = 0; objectClass < outputObject["class"].length; objectClass++) {
                if (objectClass !== outputObject["class"].length - 1) {
                    tmpClassString += outputObject["class"][objectClass] + " ";
                } else {
                    tmpClassString += outputObject["class"][objectClass];
                }
            }
            element.setAttribute("class", tmpClassString);
        }
        if (outputObject["id"]) {
            element.setAttribute("id", outputObject["id"][0]);
        }
        for (var key in outputObject["data"]) {
            if (outputObject["data"].hasOwnProperty(key)) {
                element.setAttribute("data-" + key, outputObject["data"][key]);
            }
        }
    }
    /**
     * A helper function to cut down on code.
     * It will iterate on a passed array and output a class string without a trailing space.
     *
     * @param {Array} inputArray
     * @returns {String}
     *
     * @author Ian Cronkright <txurtian@yahoo.com>
     * @since 1.0.0
     */
    function adm(inputArray) {
        var tmpString = "";
        for (var arrayArray = 0; arrayArray < inputArray.length; arrayArray++) {
            if (arrayArray !== inputArray.length - 1) {
                tmpString += inputArray[arrayArray] + " ";
            } else {
                tmpString += inputArray[arrayArray];
            }
        }
        return tmpString;
    }
    var element = document.createElement(tag);
    if (typeof attributes === "string") {
        rdm(attributes);
    } else if (attributes instanceof Element) {
        if (attributes.getAttribute("class")) {
            element.setAttribute("class", attributes.getAttribute("class"));
        }
        if (attributes.getAttribute("id")) {
            element.setAttribute("id", attributes.getAttribute("id"));
        }
        for (var data in attributes.dataset) {
            if (attributes.dataset.hasOwnProperty(data)) {
                element.setAttribute("data-" + data, attributes.dataset[data]);
            }
        }
    } else if (attributes instanceof Array) {
        for (var attributeArray = 0; attributeArray < attributes.length; attributeArray++) {
            if (typeof attributes[attributeArray][1] === "string") {
                if (attributes[attributeArray][1].contains(".") || attributes[attributeArray][1].contains("#") || attributes[attributeArray][1].contains("~")) {
                    rdm(attributes[attributeArray][1]);
                } else {
                    element.setAttribute(attributes[attributeArray][0], attributes[attributeArray][1]);
                }
            } else if (attributes[attributeArray][1] instanceof Array) {
                element.setAttribute(attributes[attributeArray][0], adm(attributes[attributeArray][1]));
            }
        }
    } else if (attributes instanceof Object) {
        for (var attributeObject in attributes) {
            if (attributes.hasOwnProperty(attributeObject)) {
                if (typeof attributes[attributeObject] === "string") {
                    if (attributes[attributeObject].contains(".") || attributes[attributeObject].contains("#") || attributes[attributeObject].contains("~")) {
                        rdm(attributes[attributeObject]);
                    } else {
                        element.setAttribute(attributeObject, attributes[attributeObject]);
                    }
                } else if (attributes[attributeObject] instanceof Array) {
                    element.setAttribute(attributeObject, adm(attributes[attributeObject]));
                }
            }
        }
    }
    if (typeof children === "string") {
        element.appendChild(document.createTextNode(children));
    } else if (children instanceof Element) {
        element.appendChild(children);
    } else if (children instanceof Array) {
        for (var child = 0; child < children.length; child++) {
            if (typeof children[child] === "string") {
                element.appendChild(document.createTextNode(children[child]));
            } else if (children[child] instanceof Element) {
                element.appendChild(children[child]);
            }
        }
    }
    return element;
}
