export default twiceAsOld;

/*
Twice as old
Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
 */

function twiceAsOld(dadYearsOld, sonYearsOld) {  
return Math.abs(dadYearsOld - (sonYearsOld*2))        //return a>2*b ? a-2*b : 2*b-a;

}


// console.log(twiceAsOld(36,7));
// console.log(twiceAsOld(55,30));