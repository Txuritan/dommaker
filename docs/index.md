<a name="dm"></a>

## dm(tag, attributes, children) ΓçÆ <code>Element</code>
Creates element(s) based off given tag, attribute, and children elements.

**Kind**: global function  
**Version**: 1.0.0  
**Author**: Ian Cronkright <txurtian@yahoo.com>  
**License**: MIT  

| Param | Type | Description |
| --- | --- | --- |
| tag | <code>String</code> | The name of the tag. |
| attributes | <code>String</code> \| <code>Element</code> \| <code>Array</code> \| <code>Object</code> | The tag attributes. |
| children | <code>String</code> \| <code>Array</code> \| <code>Element</code> | Tag child elements. |

**Example**  
```js
// Returns <div id="hello"></div>
dm("div", "#hello", null)
dm("div", dm("div", "#hello", null), null)

dm("div", {"id": "hello"}, null)

dm("div", [["id", "hello"]], null)
```
**Example**  
```js
// Returns <div class="class1 class2" id="hello"></div>
dm("div", ".class1.class2#hello", null)
dm("div", dm("div", ".class1.class2#hello", null), null)

dm("div", {"class": "class1 class2", "id": "hello"}, null)
dm("div", {"class": ".class1.class2", "id": "hello"}, null)
dm("div", {"class": ["class1", "class2"], "id": "hello"}, null)

dm("div", [["class", "class1 class2"], ["id", "hello"]], null)
dm("div", [["class", ".class1.class2"], ["id", "hello"]], null)
dm("div", [["class", ["class1", "class2"]], ["id", "hello"]], null)
```
**Example**  
```js
// Returns <div><div>Hello</div></div>
dm("div", null, dm("div", null, "Hello"))

dm("div", null, [dm("div", null, "Hello")])
```

* [dm(tag, attributes, children)](#dm) ΓçÆ <code>Element</code>
    * [~rdm(input)](#dm..rdm)
    * [~adm(inputArray)](#dm..adm) ΓçÆ <code>String</code>

<a name="dm..rdm"></a>

### dm~rdm(input)
This is the regex parser that will parse a string and pull out classes, an id, and datasets

**Kind**: inner method of [<code>dm</code>](#dm)  
**Since**: 1.0.0  
**Author**: Ian Cronkright <txurtian@yahoo.com>  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>String</code> | A string that contains either a class, id, or dataset. |

<a name="dm..adm"></a>

### dm~adm(inputArray) ΓçÆ <code>String</code>
A helper function to cut down on code.
It will iterate on a passed array and output a class string without a trailing space.

**Kind**: inner method of [<code>dm</code>](#dm)  
**Since**: 1.0.0  
**Author**: Ian Cronkright <txurtian@yahoo.com>  

| Param | Type |
| --- | --- |
| inputArray | <code>Array</code> | 

