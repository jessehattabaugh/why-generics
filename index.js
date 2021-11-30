const myArr = ['a', 'b', 'c']; // TS infers this is a string[]

function myFunc(myParam) {
  myParam.map(x => x + 1); // TS can infer that myParam is a number[]
}

myFunc(myArr); // TS should be able to see that you're passing a string[] into a param that will be treated as a number[] 
