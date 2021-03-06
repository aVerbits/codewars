export default bonusTime;

/*
Do I get a bonus?
It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java and Julia).
*/



function bonusTime(salary, bonus) {
return bonus ? "\u00A3" + salary*10 : "\u00A3" + salary;
}

// console.log(bonusTime(10000, true));
// console.log(bonusTime(25000, true));
// console.log(bonusTime(10000, false));
// console.log(bonusTime(60000, false));

