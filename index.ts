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
function getWidth(x: number | 'auto') {
    // ...
}
getWidth(100);
getWidth('auto');
// getWidth('100px'); // Error: Type '"100px"' is not assignable to type '
