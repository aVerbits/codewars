export default fileName;

let kataName = "pick a set of first elements";    // <= add file name (copy from console)

function fileName(kataName) {

    let text = "";
    
    for(let i=0; i<kataName.length ; i++){

        kataName[i] !== " " ? text += kataName[i] : text += "_";
    }
        return `   fileName:\n${text}\n import ${kataName} from './katas/${text}.js'` ;
}

console.log(fileName(kataName));