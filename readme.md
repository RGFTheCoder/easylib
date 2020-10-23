# EasyLib

A simple library meant to teach people to code. Includes basic utilities.

## Usage:

### TSC + Node:
```ts
import { zip, p } from './src/main.ts';
```

### Node:
```js
import { zip, p } from './build/main.js';
```

### Web:
```js
import { zip, p } from 'https://cdn.jsdelivr.net/gh/rgfthecoder/easylib/build/main.min.js'; // Minified source
```
or

```js
import { zip, p } from 'https://cdn.jsdelivr.net/gh/rgfthecoder/easylib/build/main.js'; // Raw source
```

## Functions:

### Zip:

Curried function with two array inputs `a: T[]`, `b: J[]` and one array output `[T, J][]`
```js
const a = [1, 2, 3];
const b = ['a', 'b', 'c'];

const res = zip(a)(b);

p`${res}`;
// [[1, 'a'], [2, 'b'], [3, 'c']]
```

### Sample:

Normal function that takes an array input `alp: T[]` and returns a random element from that array `T`.
```js
const a = [1,2,3];

p`${sample(a)}`;
// 2
```

### Random Series

Curried function that takes an array input `alp: T[]` and a length input `len: number` and returns an array. `T[len]`
```js
const a = [1,2,3,4,5];

p`${randomSeries(a)(3)}`;
// [3,5,3]
```

### Random Token

Curried function that takes an optional array input `alp: string[]` and an optional length input `len: number` and returns a string `string where #.length === len`
```js
p`Your token is ${randomToken()}`;
// Your token is  Wv1gqR63RjyHWkb8
```

### P

Template function that prints a string with templates. `console.log` with input modified to work with templates.
```js
const total = 5;

p`Hi bob, your total is ${total}`;
```

### Shuffle

Simple function that shuffles an array input `array: T[]` in-place and return the array `&array`. 
```js
const a = [1, 2, 3, 4, 5];

p`${a}`;
// [1, 2, 3, 4, 5]

shuffle(a);

p`${a}`;
// [2, 5, 1, 3, 4]
```
Use this to sample unique multiple items instead of sample.
```js
const a = [1, 2, 3, 4, 5];

p`${a}`;
// [1, 2, 3, 4, 5]

shuffle(a);

p`${a.slice(0,3)}`;
// [2, 5, 1]
```

### Test

Simple testing object.

#### Add
Adds a test to the cases. Takes a tag input `tag: string`, a test input `test: () => boolean | string`, and an optional test name `testName: string`.

#### Run Tests
Runs tests in a random order with optional tag limits. Accepts an optional tag regex input `tagRegex: RegExp` and returns the number of failed tests `number`.
```js
test.runTests();
```
```js
test.runTests(/zip/);
```