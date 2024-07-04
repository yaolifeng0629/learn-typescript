// basic function parameter verify
// function greet(name: string) {
//   console.log("Hello, " + name.toUpperCase() + "!!");
// }

// greet('John');

// basic type array
// const numberArr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const stringArr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const booleanArr: boolean[] = [true, false, false, false, true, false];

// return types annotations
// function getFavoriteNumber(): number {
//     return 42;
// }

// difference between interface and type:
// interface Animal {
//     name: string;
// }
// interface Animal {
//     name: number;
// }

// literal types
// function knowAboutParams(s: string, ways:'top' | 'bottom') {
//     console.log(s, ways);
// }

// knowAboutParams('test msg', 'top');
// knowAboutParams('msg2', 'left');
// types "left" params can't assignment type "top" | "bottom" params

// numeric literal type:
// function numericLiteralType(a: number | string, b: number | string): -1 | 0 | 1 {
//     return a === b ? 0 : a > b ? 1 : -1;
// }

// numericLiteralType(4, 8);
// numericLiteralType('8', '2');

// combine the non-literal type
// function getWidth(x: number | 'auto') {
//     // ...
// }
// getWidth(100);
// getWidth('auto');
// getWidth('100px'); // Error: Type '"100px"' is not assignable to type '

// function
// function greeter(fn: (a: string) => void) {
//     fn('Hello, ');
// }
// function logInfo(s: string) {
//     console.log(s + 'World');
// }
// greeter(logInfo);

// equal to:
// type greeterFn = (a: string) => void;
// function greeter(fn: greeterFn) {
//     fn('Hello, ');
// }
// function logInfo(s: string) {
//     console.log(s + 'World');
// }
// greeter(logInfo);

// addition some parameter
// type DescribableFunction = {
//     description: string;
//     (someArg: number): boolean;
// };
// function doSomething(fn: DescribableFunction) {
//     console.log(fn.description + ' returned ' + fn(1,2,3,4,5,45,6));
// }

// function myFunc(someArg: number) {
//     return someArg > 3;
// }
// myFunc.description = 'default description';

// doSomething(myFunc);

// not fixed nums parameter
// function getSum(...arg: any[]): void {
//     console.log(arg);
// }
// getSum(1, "2", 'b', 3, 4, 5, 6, 78, 89,);

// optional parameter
// function f(x?: number) {
//     // ...
// }
// f();
// f(10);
// f(undefined);

// optional parameter callbacks
// function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
//     for (let i = 0; i < arr.length; i++) {
//         callback(arr[i], i);
//     }
// }

// declaring this in function
// interface OriginalUser {
//     name: string;
// }
// interface User extends OriginalUser {
//     age: number;
//     getName(this: OriginalUser): string;
// }

// const user: User = {
//     name: 'tes',
//     age: 30,
//     getName() {
//         return this.name;
//     }
// };

// console.log(user.getName());

// index signatures
// interface StringArray {
//     [index: number]: string;
// }

// const myArray: StringArray = getStringArray();
// const secondItem = myArray[1];

// intersection types
// interface Colorful {
//     color: string;
// }
// interface Circle {
//     radius: number;
// }

// type ColorfulCircle = Colorful & Circle;

// declares a type parameter
// interface Box<Type> {
//     contents: Type;
// }

// const box: Box<number> = {
//     contents: 1
// }

// const box2: Box<string> = {
//     contents: 'hello'
// }

// const box3: Box<boolean> = {
//     contents: true
// }

// const box4: Box<number[]> = {
//     contents: [1, 2, 3]
// }

// console.log('box --->', box.contents); // 1
// console.log('box --->', box2.contents); // hello
// console.log('box --->', box3.contents); // true
// console.log('box --->', box4.contents); // [1, 2, 3]

// keyof type operator
type Point = { x: number; y: number };
type P = keyof Point;
