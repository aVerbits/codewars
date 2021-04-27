export default find_average;


function find_average(array) {

    let sumArr = array.reduce(function name(sum, cur) {return (sum + cur)},0);  //array.reduce((a, b) => a + b, 0);

    return sumArr/array.length;
  }

console.log(find_average([1,1,1]));
console.log(find_average([1,2,3]));
console.log(find_average([1,2,3,4]));

// arr.reduce(function(a,b){return(a+b)})