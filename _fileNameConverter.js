export default fileName;

let kataName = "Pre-FizzBuzz Workout #1";    // <= add file name (copy from console)

function fileName(kataName) {

    let text = "";
    
    for(let i=0; i<kataName.length ; i++){

        kataName[i] !== " " ? text += kataName[i] : text += "_";
    }
        return `   fileName:\n${text}\n import funcName from './katas/${text}.js'` ;
}

console.log(fileName(kataName));