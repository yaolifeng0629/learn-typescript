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

-   readonly properties

```ts
interface SomeType {
    readonly prop: string;
}

function doSomething(obj: SomeType) {
    // We can read from 'obj.prop'.
    console.log(`prop has the value '${obj.prop}'.`);

    // But we can't re-assign it.
    obj.prop = 'hello';
    // Cannot assign to 'prop' because it is a read-only property.
}
```

-   index signatures
    -   sometimes you don't know all the names of a type's properties ahead of time, but you do know the shape of the values.

```ts
interface StringArray {
    [index: number]: string;
}

const myArray: StringArray = getStringArray();
const secondItem = myArray[1];
```

-   Intersection Types

```ts
interface Colorful {
    color: string;
}
interface Circle {
    radius: number;
}

type ColorfulCircle = Colorful & Circle;
```

-   when you don't know a interface are any types, so you can use following type.

```ts {2}
interface Box<Type> {
    contents: Type;
}

// how to use
interface Box<Type> {
    contents: Type;
}

const box: Box<number> = {
    contents: 1
};

const box2: Box<string> = {
    contents: 'hello'
};

const box3: Box<boolean> = {
    contents: true
};

const box4: Box<number[]> = {
    contents: [1, 2, 3]
};

console.log('box --->', box.contents); // 1
console.log('box --->', box2.contents); // hello
console.log('box --->', box3.contents); // true
console.log('box --->', box4.contents); // [1, 2, 3]
```

## keyof type operator

-   The keyof operator takes an object type and produces a string or numeric literal of its keys.

```ts
type Point = { x: number; y: number };
type P = keyof Point;
// type P = "x" | "y";
```

-   the type has a string or number index signature, keyof will return those types instead.

```ts
type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish;
// type A = number

type Mapish = { [k: string]: boolean };
type M = keyof Mapish;
// type M = string | number
```

-   Note that in this example, M is string | number —— this is because javascript object keys are always coerced to a string, so Object[0] is always the same as Object['0'];

## Typeof operator

-   let's start by looking at the predefined type `ReturnType<T>`. It takes a functions type and produces its return type.

```ts
type Predicate = (x: unknown) => boolean;
type K = ReturnType<Predicate>;
// type K = boolean
```

-   if type to use `ReturnType<T>` on a function name, we see an instructive error.

```ts
function f() {
    return { x: 10, y: 3 };
}

type P = ReturnType<f>;
// 'f' refers to a value, but is being used as a type here. Did you mean 'typeof f'?
```

-   Remember that values and types aren’t the same thing. To refer to the type that the value f has, we use typeof:

```ts
function f() {
    return { x: 10, y: 3 };
}
type P = ReturnType<typeof f>;
// type P = {
//     x: number;
//     y: number;
// }
```

## Indexed access type

```ts
type Person = { age: number; name: string; alive: boolean };
type Age = Person['age'];
// type Age = number
```

-   the more simple writing.

```ts
type I1 = Person['age' | 'name'];
// type I1 = string | number

type I2 = Person[keyof Person];
// type I2 = string | number | boolean

type AliveOrName = 'alive' | 'name';
type I3 = Person[AliveOrName];
// type I3 = string | boolean
```

-   examples:

```ts
const key = 'age';
type Age = Person[key];
// Type 'key' cannot be used as an index type.
// 'key' refers to a value, but is being used as a type here. Did you mean 'typeof key'?

type key = 'age';
type Age = Person[key];
```

## conditional types

```ts
interface Animal {
    live(): void;
}
interface Dog extends Animal {
    woof(): void;
}

type Example1 = Dog extends Animal ? number : string;
// type Example1 = number

type Example2 = RegExp extends Animal ? number : string;
// type Example2 = string
```

-   The grammar as following:

```ts
SomeType extends OtherType ? TrueType : FalseType;
```

-   We can write some useful helper type aliases using the infer keyword. For example, for simple cases, we can extract the return type out from function types:

```ts
type GetReturnType<Type> = Type extends (...args: never[]) => infer Return ? Return : never;

type Num = GetReturnType<() => number>;
// type Num = number

type Str = GetReturnType<(x: string) => string>;
// type Str = string

type Bools = GetReturnType<(a: boolean, b: boolean) => boolean[]>;
// type Bools = boolean[]
```

## Mapped types

```ts
type OptionsFlags<Type> = {
    [Property in keyof Type]: boolean;
};
```

-   There are two additional modifiers which can be applied during mapping: readonly and ? which affect mutability and optionality respectively.

-   You can remove or add these modifiers by prefixing with - or +. If you don’t add a prefix, then + is assumed.

```ts
// Removes 'readonly' attributes from a type's properties
type CreateMutable<Type> = {
    -readonly [Property in keyof Type]: Type[Property];
};

type LockedAccount = {
    readonly id: string;
    readonly name: string;
};

type UnlockedAccount = CreateMutable<LockedAccount>;
// type UnlockedAccount = {
//     id: string;
//     name: string;
// }
```

```ts
// Removes 'optional' attributes from a type's properties
type Concrete<Type> = {
    [Property in keyof Type]-?: Type[Property];
};

type MaybeUser = {
    id: string;
    name?: string;
    age?: number;
};

type User = Concrete<MaybeUser>;
// type User = {
//     id: string;
//     name: string;
//     age: number;
// }
```

### Key Remapping via `as`

-   In TypeScript 4.1 and onwards, you can re-map keys in mapped types with an as clause in a mapped type:

```ts
type MappedTypeWithNewProperties<Type> = {
    [Properties in keyof Type as NewKeyType]: Type[Properties];
};
```

-   The grammar as following:

    -   T: original type, be used for provide key and value type
    -   K: iterator variable, Represents one key in `T` in each iteration.
    -   `keyof T`: Gets all keys of `T` and generates a string literal union type.
    -   `in`: iterates over all keys in `keyof T`.
    -   `as NewKeyType`: Renames the current key `K` to `NewKeyType`.` NewKeyType`can be a:
        -   ** String literal type:** Specify the new key name directly.
        -   ** Template string literal type:** Use `${K}` to refer to the original key name for more flexible renaming.
        -   ** Condition type:** Determine whether to retain or modify the key name according to the condition.
    -   `T[K]`: Gets the value type corresponding to key `K` in original type `T`.

-   key mapping allow we create a new object type, the type:

    -   Based on an existing object type.
    -   Modify the key name of the original type, can be:
        -   rename key name: Replace old key names with new key names
        -   filter key name: just saving part key
        -   add new key: based on existing key name add new key.

-   examples:

```ts
// rename key name
type Person = {
    firstName: string;
    lastName: string;
    age: number;
};

type PersonDto = {
    [K in keyof Person as `user${Capitalize<K>}`]: Person[K];
};

// PersonDto ===：
// {
//   userFirstName: string;
//   userLastName: string;
//   userAge: number;
// }
```

```ts
// filter key name
type PersonInfo = {
    [K in keyof Person as K extends 'firstName' | 'lastName' ? K : never]: Person[K];
};

// PersonInfo ===：
// {
//   firstName: string;
//   lastName: string;
// }
```

```ts
// add new key
type ExtendedPerson = {
    [K in keyof Person]: Person[K];
} & {
    fullName: string;
};
```
