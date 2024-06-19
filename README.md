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
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });
```
#### Union types
-   defining a union type
```ts
function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");
// Error
printId({ myID: 22342 });
// Argument of type '{ myID: number; }' is not assignable to parameter of type 'string | number'.
```

