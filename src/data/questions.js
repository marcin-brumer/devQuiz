const HTML = [
  {
    question:
      "If you have a page of search results and want to highlight the search term, what HTML tag would you use?",
    answers: ["<mark>", "<highlight>", "<em>", "<strong>"],
    correct: 1
  },
  {
    question: "HTML stands for?",
    answers: [
      "Hyper Text Makeup Language",
      "Hyper Text Markup Language",
      "Hyper Tech Markup Language",
      "None of the above"
    ],
    correct: 2
  },
  {
    question: "Which of the following is valid colour code?",
    answers: ["#0000", "#00000", "#000000", "#0000000"],
    correct: 3
  },
  {
    question: "DOM stands for?",
    answers: [
      "Data Object Model",
      "Document Oriented Model ",
      "Data Oriented Model",
      "Document Object Model"
    ],
    correct: 4
  },
  {
    question: "The href attribute in the link tag specifies the:",
    answers: [
      "Destination of a link",
      "Link",
      "Hypertext",
      "None of the above"
    ],
    correct: 1
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    answers: ["<break>", "<br>", "<lb>", "<brk>"],
    correct: 2
  },
  {
    question: "How can you open a link in a new tab/browser window?",
    answers: [
      '<a href="url" open>',
      '<a href="url" target="new">',
      '<a href="url" target="_blank">',
      '<a href="url" new>'
    ],
    correct: 3
  },
  {
    question: "How can you make a unordered list?",
    answers: ["<list>", "<ol>", "<dl>", "<ul>"],
    correct: 4
  },
  {
    question: "What is the correct HTML for making a checkbox?",
    answers: [
      '<input type="checkbox">',
      '<input type="check">',
      "<checkbox>",
      "<radio>"
    ],
    correct: 1
  },
  {
    question: "What is the correct HTML for making a text input field?",
    answers: [
      "<textfield>",
      '<input type="text">',
      "<textinput>",
      '<input type="textfield">'
    ],
    correct: 2
  },
  {
    question:
      "What is the correct HTML element for overriding the current text direction?",
    answers: ["<dir>", "<textdir>", "<bdo>", "<text>"],
    correct: 3
  },
  {
    question:
      "What is the correct HTML element for for making a drop-down list?",
    answers: [
      "<list>",
      '<input type="dropdown">',
      '<input type="list">',
      "<select>"
    ],
    correct: 4
  },
  {
    question:
      "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
    answers: ["alt", "title", "name", "alternate"],
    correct: 1
  },
  {
    question:
      "In HTML, which attribute is used to specify that an input field must be filled out?",
    answers: ["placeholder", "required", "important", "validate"],
    correct: 2
  },
  {
    question: "What is the correct location for <li> tag?",
    answers: [
      "Anywhere",
      "Immediately after <fieldset>",
      "Inside <ul>...</ul> or <ol>...</ol>",
      "In the header of the document"
    ],
    correct: 3
  },
  {
    question: "What is the correct location for <area> tag?",
    answers: [
      "Anywhere",
      "Immediately after <img>",
      "Inside <a>...</a>",
      "Inside <map>...</map>"
    ],
    correct: 4
  },
  {
    question: "Which graphic format is not suitable for websites?",
    answers: [".bmp", ".gif", ".jpg", ".png"],
    correct: 1
  },
  {
    question:
      "In HTML, which attribute is used to specify maximum number of characters allowed in <textara> tag?",
    answers: ["length", "maxlength", "size", "It is not possible"],
    correct: 2
  },
  {
    question:
      "In HTML, which attribute is used to specify width of <textarea> tag?",
    answers: ["size", "width", "cols", "It is not possible"],
    correct: 3
  },
  {
    question: 'In HTML, what is the default attribute value of "target"?',
    answers: ["_top", "_parent", "_blank", "_self"],
    correct: 4
  },
  {
    question: "What is the smallest Heading Tag in HTML?",
    answers: ["h6", "h8", "h4", "h1"],
    correct: 1
  },
  {
    question:
      "What atribute should be used to validate the field value against a regular expression?",
    answers: ["required", "pattern", "regex", "expression"],
    correct: 2
  },
  {
    question: "What atribute allow to turn off HTML5 form validation?",
    answers: ["formnovalidate", "validateoff", "novalidate", "novalidation"],
    correct: 3
  },
  {
    question: "What does <dl> stand for?",
    answers: [
      "depiction list",
      "details list",
      "declaration list",
      "description list"
    ],
    correct: 4
  }
];

const CSS = [
  {
    question: "Which of these is NOT correct float property?",
    answers: ["auto", "none", "left", "right"],
    correct: 1
  },
  {
    question: "CSS stands for?",
    answers: [
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Common Style Sheets",
      "Central Style Sheets"
    ],
    correct: 2
  },
  {
    question:
      "Which CSS property is used to change the text color of an element?",
    answers: ["font-color", "main-color", "color", "text-color"],
    correct: 3
  },
  {
    question: "Which CSS property controls the text size?",
    answers: ["text-size", "text-style", "font-style", "font-size"],
    correct: 4
  },
  {
    question: "How do you display hyperlinks without an underline?",
    answers: [
      "a {text-decoration: none;}",
      "a {text-decoration: no-underline;}",
      "a {decoration: no-underline;}",
      "a {underline: none;}"
    ],
    correct: 1
  },
  {
    question:
      "How do you make each word in a text start with a capital letter?",
    answers: [
      "text-transform: uppercase",
      "text-transform: capitalize",
      "text-style: uppercase",
      "text-style: captialize"
    ],
    correct: 2
  },
  {
    question: 'How do you select an element with id "devQuiz"?',
    answers: ["devQuiz", "@devQuiz", "#devQuiz", ".devQuiz"],
    correct: 3
  },
  {
    question: 'How do you select an element with class name "devQuiz"?',
    answers: ["devQuiz", "@devQuiz", "#devQuiz", ".devQuiz"],
    correct: 4
  },
  {
    question: "What is the default value of the position property?",
    answers: ["static", "relative", "absolute", "fixed"],
    correct: 1
  },
  {
    question:
      "What is the correct CSS syntax for making all the <p> elements bold?",
    answers: [
      "p {font-size: bold}",
      "p {font-weight: bold}",
      "p {font-width: bold}",
      "p {font-type: bold}"
    ],
    correct: 2
  },
  {
    question:
      "Which snippet of CSS is commonly used to center a website horizontally?",
    answers: [
      "site-align: center",
      "margin: center",
      "margin: 0 auto",
      "margin: auto 0"
    ],
    correct: 3
  },
  {
    question:
      "What is the correct CSS syntax for disabling bulletpoints in the list?",
    answers: [
      "list: none",
      "bulletpoints: none",
      "list-style-type: no-bullet",
      "list-style-type: none"
    ],
    correct: 4
  },
  {
    question: "Which HTML attribute is used to define inline CSS styles?",
    answers: ["style", "css", "type", "class"],
    correct: 1
  },
  {
    question:
      "What is the correct CSS syntax for making all the <p> tags font size 14px?",
    answers: [
      "p {text-size: 14px;}",
      "p {font-size: 14px;}",
      "p {font: 14px;}",
      "p {14px}"
    ],
    correct: 2
  },
  {
    question:
      "What property would you use to create space between the element’s border and inner content?",
    answers: ["spacing", "margin", "padding", "border"],
    correct: 3
  },
  {
    question:
      "What property can you use to set the spacing in between lines of text?",
    answers: ["letter-spacing", "line-margin", "line-spacing", "line-height"],
    correct: 4
  },
  {
    question:
      "How would you style an element so that the next element would appear right next to it not underneath it if both elements widths were collectively smaller than the container element?",
    answers: [
      "display: inline;",
      "display: horizontal;",
      "display: block;",
      "display: left;"
    ],
    correct: 1
  },
  {
    question:
      "If you wanted to position an element to the right in its container, what is a valid CSS property to use?",
    answers: [
      "display: right;",
      "float: right;",
      "display-right: 0px;",
      "float-right: 0px;"
    ],
    correct: 2
  },
  {
    question:
      "How do you give a link a particular style when the user hovers over it?",
    answers: [":onHover", ":over", ":hover", ":mouse-hover"],
    correct: 3
  },
  {
    question:
      "How do you set a particular style for a link that a user has already been to before arriving at your page?",
    answers: ["a:known", "a:previous", "a:active", "a:visited"],
    correct: 4
  },
  {
    question: "Which of these CSS properties is NOT real?",
    answers: ["text-opacity", "object-fit", "pointer-events", "font-smoothing"],
    correct: 1
  },
  {
    question:
      "Margin collapsing is a behaviour when the top and the bottom margins of blocks are:",
    answers: [
      "combined into a single margin whose size is the smallsest of the individual margins",
      "combined into a single margin whose size is the largest of the individual margins",
      "combined into a single margin whose size is the sum of the individual margins",
      "combined into a single margin whose size is the difference of the individual margins"
    ],
    correct: 2
  },
  {
    question: "Which of the following is general sibling selector?",
    answers: ["A > B", "A + B", "A ~ B", "A B"],
    correct: 3
  },
  {
    question: "Which of the following is descendant selector?",
    answers: ["A > B", "A + B", "A ~ B", "A B"],
    correct: 4
  }
];

const JavaScript = [
  {
    question: `function foo() {
  return
  {
    test: 1
  };
}
console.log(typeof foo());
`,
    answers: ["undefined", "function", "object", "number"],
    correct: 1,
    code: true
  },
  {
    question: `function bar() {
  return foo;
  foo = 10;
  function foo() {}
  var foo = '11';
}
console.log(typeof bar());
`,
    answers: ["undefined", "function", "object", "number"],
    correct: 2,
    code: true
  },
  {
    question: `var x = 3;

var foo = {
  x: 2,
  baz: {
    x: 1,
    bar: function() {
        return this.x;
    }
  }
}

var go = foo.baz.bar;

console.log(go(), foo.baz.bar());
`,
    answers: ["1 3", "1 2", "3 1", "3 2"],
    correct: 3,
    code: true
  },
  {
    question: `var myArr = ['foo', 'bar', 'baz'];
myArr.length = 0;
myArr.push('bin');
console.log(myArr);
`,
    answers: [
      "['foo', 'baz', 'bar', 'bin']",
      "['bin', 'baz', 'bar', 'foo']",
      "['foo', 'baz', 'bar']",
      "['bin']"
    ],
    correct: 4,
    code: true
  },
  {
    question: `function foo(a, b) {
  arguments[1] = 2;
  console.log(b);
}
foo(1);
`,
    answers: ["undefined", "1", "2", "ReferenceError"],
    correct: 1,
    code: true
  },
  {
    question: `var arr = [];
arr[0]  = 'a';
arr[1]  = 'b';
arr.foo = 'c';
console.log(arr.length);
`,
    answers: ["1", "2", "3", "undefined"],
    correct: 2,
    code: true
  },
  {
    question: `function foo() {
  id = 5;
}
let id = null;
foo();
console.log(id)
`,
    answers: ["null", "undefined", "5", "throw an error"],
    correct: 3,
    code: true
  },
  {
    question: `console.log(bar);
const bar = 1;
`,
    answers: ["null", "undefined", "1", "throw an error"],
    correct: 4,
    code: true
  },
  {
    question: `let x = 5;
for (let x = 0; x < 10; x++) {}
console.log(x)
`,
    answers: ["5", "0", "10", "throw an error"],
    correct: 1,
    code: true
  },
  {
    question: `var x = 1
var obj = {
  x: 2,
  get: function () {
    return () => this.x;
  }
}
obj.get()();
`,
    answers: ["1", "2", "undefined", "throw an error"],
    correct: 2,
    code: true
  },
  {
    question: `var foo = () => 10;
console.log(foo(2));
`,
    answers: ["undefined", "2", "10", "throw an error"],
    correct: 3,
    code: true
  },
  {
    question: `function foo() {
  var x = 2;
  if (x) {
    let x = (x + 3);
    console.log(x);
  }
}
`,
    answers: ["3", "5", "NaN", "throw an error"],
    correct: 4,
    code: true
  },
  {
    question: `var foo = x => {
  let y = x * 2;
};
console.log(foo(4));
`,
    answers: ["undefined", "4", "8", "throw an error"],
    correct: 1,
    code: true
  },
  {
    question: `function foo(...items) {
  console.log(items);
}

foo("a", "b", "c");
`,
    answers: ['"a", "b", "c"', '["a", "b", "c"]', "a", "throw an error"],
    correct: 2,
    code: true
  },
  {
    question: `var arr = ["a", ..."bcd", "e"];
console.log(arr);
`,
    answers: [
      '["a", "bcd", "e"]',
      '["a", "bc", "de"]',
      '["a", "b", "c", "d", "e"]',
      "throw an error"
    ],
    correct: 3,
    code: true
  },
  {
    question: `var a = () => {
  console.log(arguments[1]);
};
a(1, 2, 3);
`,
    answers: ["1", "2", "[1, 2, 3]", "throw an error"],
    correct: 4,
    code: true
  },
  {
    question: `var numbers = [2, 6, 4];
console.log(Math.max(...numbers));
`,
    answers: ["6", "NaN", "undefined", "throw an error"],
    correct: 1,
    code: true
  },
  {
    question: `class Person {}
console.log(typeof Person);
`,
    answers: ["class", "function", "object", "Symbol"],
    correct: 2,
    code: true
  },
  {
    question: `function foo({a, b}, c) {
  console.log(a);
}
foo({a: 2, b: 6}, 8)
`,
    answers: ["{a: 2, b: 6}}", "NaN", "2", "throw an error"],
    correct: 3,
    code: true
  },
  {
    question: `class Car {
  static get() {
    return "Ford";
  }
}
const car = new Car();
console.log(car.get());
`,
    answers: ["Ford", "null", "undefined", "throw an error"],
    correct: 4,
    code: true
  },
  {
    question: `const [first] = [1, 2, 3, 4];
console.log(first);
`,
    answers: ["1", "[1]", "[1, 2, 3, 4]", "throw an error"],
    correct: 1,
    code: true
  },
  {
    question: `const str = "ABC";
const [x, y] = str;
console.log(y);
`,
    answers: ["A", "B", "ABC", "throw an error"],
    correct: 2,
    code: true
  },
  {
    question: `let x = 1, y = 2;
[x, y] = [y, x];
console.log(x);
`,
    answers: ["undefined", "1", "2", "throw an error"],
    correct: 3,
    code: true
  },
  {
    question: `class Item {
  static id = 10;
}
console.log(Item.id);
`,
    answers: ["10", "null", "undefined", "throw an error"],
    correct: 4,
    code: true
  },
  {
    question: `function get(x) {
  switch (true) {
    case x < 10:
      let y = 5;
      return y;
    case x >= 10:
      let y = 20;
      return y;
  }
}
`,
    answers: ["5", "15", "20", "throw an error"],
    correct: 4,
    code: true
  }
];

module.exports = { HTML, CSS, JavaScript };
