export default first;
/*
pick a set of first elements

Write a function to get the first elements of asequence. Passing a parameter n (default=1) will return the first n elements of the sequence.

If n == 0 return an empty sequence []
*/

function first(arr, n) {
     if(n === undefined) {return arr.slice(0,1)}
     else if (n == 0) {return arr.slice(0,0)} 
     else return arr.slice(0,n);
}

// console.log(first(['a', 'b', 'c', 'd', 'e']));
// console.log(first(['a', 'b', 'c', 'd', 'e'], 2));

// function first(arr, n = 1) {
//     return n ? arr.slice(0, n) : [];
//   }

// function first(arr, n=1) {
//     return arr.slice(0,n);
//  }