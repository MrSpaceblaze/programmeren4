let person = require('./person')
var banaan
banaan={
    name: "Banaan",
    text: "Lekker",
    length:2
}
console.log(banaan);
let something = (list)=>{
    console.log('Prints shit: ')
    for(let i = 0;i<list.length;i++){
        console.log(list[i]);
    }
}

something(banaan)