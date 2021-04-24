export default fileName;

let kataName = "My head is at the wrong end!";    // <= add file name (copy from console)

function fileName(kataName) {

    let text = "";
    
    for(let i=0; i<kataName.length ; i++){

        kataName[i] !== " " ? text += kataName[i] : text += "_";
    }
        return text;
}

console.log(fileName(kataName));