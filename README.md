# JavaScript Bootcamp

1. ES = ECMAScript
1. ES6 on is modern JS
1. ES6 was created in 2015

## What is JavaScript?

It is a high-level, OO, multi-paradigm programming language

- Hight Level
  - Don't worry about complext stuff like memory management
- Object Oriented
- Multi-Paradigm
  - Can use different programming styles
  - Declarative, imperative

## What do we use it for?

3 Languages the web is written in

1. HTML
   - Content
   - Nouns
1. CSS
   - Presentation
   - Adjectives
1. JS
   - Programming Language for building web apps
   - Verbs

Makes modern web development and the web what it is today

## Javascript Frameworks

1. React
   - Front end
1. Angular
   - Front end
1. Vue
   - Front end
1. Node
   - Doesn't need a broswer, runs on a web server
   - Back-end app
1. React Native
   - Native mobile
1. Ionic
   - Native mobile
1. Electron
   - Native desktop

Tools that make writing modern, large, web apps easier

All based on 100% JS

## JavaScript Types

JavaScript has dynamic typing. Don't need to define a type until assigned

- Value has a type, not a variable

1. Number
   - Floating point numbers
1. String
   - Sequence of chars
1. Boolean
1. Undefined
   - Empty Value
1. Null
   - Also means empty value
   - My guess is the difference is it's assigned null instead of being unassigned
1. Symbol (ES2015)
   - Value that is unique and can't be changed
1. BigInt (ES2020)
   - Larger numbers thatn Number type can hold

## JavaScript History

- 1995
  - Brendan Eich and Netscape creates first version of JavaScript in 10 days
  - Called Mocha, but already had many fundamental features of modern JS
- 1996
  - Mocha changes to LiveScript and then to JavaScript in order to attract Java devs
  - However, it has nothing to do w/ Java
  - Microsoft launches IE, and copies Javascript from Netscape, calling it JScript
- 1997
  - With a need to standardize the language, ECMA releases ECMAScript 1 (ES1)
  - First official standard for JavaScript
- 2009
  - ES5 is released w/ lots of great new features
- 2015
  - ES6/ES2015 (ECMAScript 2015) was released: biggest update to the language ever
  - ECMAScript changes to annual release cyle
  - Less features per update
- 2016 on
  - Release of ES2016, etc...

**JavaScript is backwards compatible**

- Don't break the web
- Old features are never removed
- Not really new versions, just incremented updates
- Websites keep working forever
- Lots of older bugs and quirks still exist, but you can get around it by using modern JS

## How to Use Modern JS Today

### During Development

- Use latest/modern browser (Edge/Chrome)

### During Production

- Use Babel to transpile and polyfill your code
  - Convert to ES5 to ensure browser compatibilty for all users
- ES5 is fully supported in all browsers
- ES6+ is well supporeted in all modern browsers
  - No support in older browsers
  - Check the ES6 compatibility pages
- ESNext
  - Future versions of the language
  - So browsers can stay current w/ language releases
  - Stages to a release, so browser devs can be sure when a release is almost done

## JavaScript DOM

Document Object Model

- Basically, the connection point b/t HTML and JS code
- Structured representation of HTML documents
  - Allows JS to access HTML Elements and styles to manipulate them
- DOM is not part of JS
  - Part of WebAPIs that can interact w/ JS
