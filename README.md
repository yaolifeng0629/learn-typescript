# learn-typescript

-   learn [typescript](https://www.typescriptlang.org/) records
-   [typescript problems](https://typescript.tv/)

## How to start project?

1.  install dependence

```bash
npm install
# or
pnpm install
```

2.  initial `tsconfig.json` config file

```bash
npx tsc --init
```

3.  run the follows command in the terminal

```bash
# once
npx ts-node xxx.ts

# dev
npx ts-node-dev xxx.ts
```

## Basic Types

#### Primitive type

-   Basic commonly use type: `number`, `string`, `boolean`
-   Array type:

```ts
// a string array: string[]
const numberArr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// a number array: number[]
const stringArr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// a boolean array: boolean[]
const booleanArr: boolean[] = [true, false, false, false, true, false];
```

#### Function

-   return type annotations

```ts
function getFavoriteNumber(): number {
    return 42;
}
```

-   function which return promise

```ts
async function getFavoriteNumber(): Promise<number> {
    return 26;
}
```

#### Object types

-   basic object type

```ts
// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
```

-   optional properties

```ts
function printName(obj: { first: string; last?: string }) {
    // ...
}
// Both OK
printName({ first: 'Bob' });
printName({ first: 'Alice', last: 'Alisson' });
```

#### Union types

-   defining a union type

```ts
function printId(id: number | string) {
    console.log('Your ID is: ' + id);
}
// OK
printId(101);
// OK
printId('202');
// Error
printId({ myID: 22342 });
// Argument of type '{ myID: number; }' is not assignable to parameter of type 'string | number'.

function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
        // Here: 'x' is 'string[]'
        console.log('Hello, ' + x.join(' and '));
    } else {
        // Here: 'x' is 'string'
        console.log('Welcome lone traveler ' + x);
    }
}
```

#### Type Aliases

```ts
type Point = {
    x: number;
    y: number;
};

// Exactly the same as the earlier example
function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });
```

#### Interfaces

```ts
interface Point {
    x: number;
    y: number;
}

function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });
```

##### Differences between types Aliases and Interfaces?

-   you can choose between them freely, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.

```ts
// Interface
// Extending an interface
interface Animal {
    name: string;
}

interface Bear extends Animal {
    honey: boolean;
}

const bear = getBear();
bear.name;
bear.honey;

// Adding new fields to an existing interface
interface Window {
    title: string;
}

interface Window {
    ts: TypeScriptAPI;
}

const src = 'const a = "Hello World"';
window.ts.transpileModule(src, {});
```

```ts
// Types
// Extending a type via intersections
type Animal = {
    name: string;
};

type Bear = Animal & {
    honey: boolean;
};

const bear = getBear();
bear.name;
bear.honey;

// A type cannot be changed after being created
type Window = {
    title: string;
};

type Window = {
    ts: TypeScriptAPI;
};

// Error: Duplicate identifier 'Window'.
```

##### interface keyword detail?

-   advantages:
    1.  support extend: easily extend exist statement.
    2.  it's suitable for OO(face object) programming style: support implement class, support polymorphism and inheritance.
-   applicable scenarios:
    1.  defined object shape, when you want to a interface object can extend in the differ parts.
    2.  build on the big code library, third-party type statement.

```ts
interface User {
    name: string;
    age: number;
}
// auto combined
interface User {
    email: string;
}

const user: User = {
    name: 'Alice',
    age: 30,
    email: 'alice@example.com'
};
```

##### type keyword detail?

-   advantages:
    1.  flexibility: Complex types such as union types and intersection types can be defined.
    2.  can make the code more concise.
-   applicable scenarios:
    1.  needed to Complex types such as union types and intersection types can be defined.
    2.  simplify existing types and rename.

```ts
type ID = string | number;

type UserContactInfo = {
    email: string;
    phone: string;
};

// intersection types
type User = {
    name: string;
    age: number;
} & UserContactInfo;

const user: User = {
    name: 'Bob',
    age: 25,
    email: 'bob@example.com',
    phone: '123-456-7890'
};
```

#### Type Assertions

-   sometime, you don't know about a value's type.
-   for example, if you using `document.getElementById()`, TypeScript only knows that this will return some kind of HTMLElement, but you might know that your page will always have an HTMLCanvasElement with a given ID

```ts
const myCanvas = document.getElementById('main_canvas') as HTMLCanvasElement;
```

-   you can use the angle-bracket syntax(expect if the code is in a `.tsx` file), which is equivalent.

```tsx
const myCanvas = <HTMLCanvasElement>document.getElementById('main_canvas');
```

#### Literal types

-   sometime, we need accepted know about values, you can do this.

```ts
function printText(s: string, alignment: 'left' | 'right' | 'center') {
    // ...
}
printText('Hello, world', 'left');
printText("G'day, mate", 'centre');
// Argument of type '"centre"' is not assignable to parameter of type '"left" | "right" | "center"'.
```

-   numeric literal types work the same way:

```ts
function compare(a: string, b: string): -1 | 0 | 1 {
    return a === b ? 0 : a > b ? 1 : -1;
}
```

-   you can combine these with non-literal type:

```ts
interface Options {
    width: number;
}
function configure(x: Options | 'auto') {
    // ...
}
configure({ width: 100 });
configure('auto');
configure('automatic');
// Argument of type '"automatic"' is not assignable to parameter of type 'Options | "auto"'.

// case 2：
function getWidth(x: number | 'auto') {
    // ...
}
getWidth(100);
getWidth('auto');
// getWidth('100px'); // Error: Type '"100px"' is not assignable to type '
```

##### literal interface

```ts
declare function handleRequest(url: string, method: 'GET' | 'POST'): void;

const req = { url: 'https://example.com', method: 'GET' };
handleRequest(req.url, req.method);
// Argument of type 'string' is not assignable to parameter of type '"GET" | "POST"'.
```

-   In the above example req.method is inferred to be string, not "GET". Because code can be evaluated between the creation of req and the call of handleRequest which could assign a new string like "GUESS" to req.method, TypeScript considers this code to have an error.
-   two solutions:

1.  you can change the interface by adding a type assertion in either location:

```ts
// Change 1:
const req = { url: 'https://example.com', method: 'GET' as 'GET' };
// Change 2:
handleRequest(req.url, req.method as 'GET');
```

Change 1 means “I intend for req.method to always have the literal type "GET"”, preventing the possible assignment of "GUESS" to that field after.
Change 2 means “I know for other reasons that req.method has the value "GET"“. 2. you can use `as const` to convert the entire object to be type literals:

```ts
const req = { url: 'https://example.com', method: 'GET' } as const;
handleRequest(req.url, req.method);
```

The as const suffix acts like const but for the type system, ensuring that all properties are assigned the literal type instead of a more general version like string or number.

##### non-null Assertion operator

it's represents x is null or undefined.

```ts
function liveDangerously(x?: number | null) {
    // No error
    console.log(x!.toFixed());
}
```

## Functions

```ts
function greeter(fn: (a: string) => void) {
    fn('Hello, ');
}

function logInfo(s: string) {
    console.log(s + 'World');
}

greeter(logInfo);

// equal to
type greeterFn = (a: string) => void;
function greeter(fn: greeterFn) {
    fn('Hello, ');
}
function logInfo(s: string) {
    console.log(s + 'World');
}
greeter(logInfo);
```

-   addition some parameter

```ts
type DescribableFunction = {
    description: string;
    (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
    console.log(fn.description + ' returned ' + fn(6));
}

function myFunc(someArg: number) {
    return someArg > 3;
}
myFunc.description = 'default description';

doSomething(myFunc);
```

##### How to solve the not ensure number parameter?

1.  using generic type, but all params are same format.

```ts
function getSum<T>(...arg: T[]): void {
    console.log(arg);
}
getSum(1, 2, 3, 4, 5, 6, 78, 89);
```

2.  using any type, it's don't have limit params type

```ts
function getSum(...arg: any[]): void {
    console.log(arg);
}
getSum(1, '2', 'b', 3, 4, 5, 6, 78, 89);
```

#### Optional parameters

```ts
function f(x?: number) {
    // ...
}
f(); // OK
f(10); // OK
f(undefined); // OK
```

-   optional parameters in callbacks

```ts
function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i);
    }
}
```

-   declaring `this` in function

```ts
// literal object method
interface MyObject {
    property: number;
    method(this: MyObject): void;
}

const obj: MyObject = {
    property: 42,
    method: function () {
        console.log(this.property);
    }
};

obj.method(); // 输出: 42

// class method this
class MyClass {
    property: number;

    constructor(value: number) {
        this.property = value;
    }

    method(this: MyClass) {
        console.log(this.property);
    }
}

const instance = new MyClass(42);
instance.method(); // 输出: 42

// 箭头函数中this
class MyClass {
    property: number;

    constructor(value: number) {
        this.property = value;
    }

    arrowMethod = () => {
        console.log(this.property);
    };
}

const instance = new MyClass(42);
instance.arrowMethod(); // 输出: 42
```

-   other types to know about
-   **void**

    -   void represents the return value of functions which don't return a value.

```ts
function noop(): void {
    // do sth
}
```

-   **unknown**
    -   unknown type represents any value. This is similar to the `any` type, but is safer because it's not legal to do anything with an `unknown` value.

```ts
function f1(a: any) {
    a.b(); // OK
}
function f2(a: unknown) {
    a.b();
    // 'a' is of type 'unknown'.
}
```

-   **never**
    -   **never** some functions never return a value.

```ts
function fail(msg: string): never {
    throw new Error(msg);
}
```

#### Rest Parameters

```ts
function multiply(n: number, ...m: number[]) {
    return m.map(x => n * x);
}
// 'a' gets value [10, 20, 30, 40]
const a = multiply(10, 1, 2, 3, 4);
```

## Object Types
