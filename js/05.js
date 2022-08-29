// function 
function count1(p1, p2, d) {
    console.log(p1 + p2)  //50
    console.log(d)  //undefined (跟java不同)
}
count1(30, 20)


function count2(p1, p2) {
    let sum = p1 + p2;
    return sum;
}
console.log(count2(99, 1))


//構造函數 (java建構子，這邊注意一下!)
function createCard(n) {
    this.name = n;
}
const a = new createCard("Kimmy");
console.log(a) //name:"Kimmy"
console.log(a.name) //Kimmy

let hello1 = function () { }
let hello2 = () => { }


