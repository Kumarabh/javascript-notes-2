// currying is a process of taking a function with multiple argument and converting it into multiple 
// functions with single argument.

const addition = (a: number, b: number, c: number) => a + b + c;

const additionCurryFn = (a: number) => (b: number) => (c: number) => a + b + c;

console.log(additionCurryFn(10)(20)(30))
