// function createCard(n) {
//     this.name = n;
// }

class Card1 {
    constructor(init) {
        this.name = init;
    }
}
const c = new Card1("JK")
console.log(c);
console.log(c.name);

console.log("----------------------");
//this 取決當下執行函數 (與其他語言不同)
class Card2 {
    constructor(init) {
        this.name = init;
    }
    hello() {
        console.log("hello", this.name);
    }
}
const cc = new Card2("HB");
console.log(cc);
console.log(cc.name);
cc.hello();  //hello HB

//hello呼叫再加()
const ccc = { name: "JQ" }
ccc.helloooooo = cc.hello
ccc.helloooooo() //hello JQ 不是HB
//上述請多加注意!!!(看ccc)

console.log("----------------------");
function Card3(p) {
    // hello(){}
}
//上面的hello==下面的hello 
//所以hello不存在於我建立的物件，而是存在於這個function(Card3)的prototype。
//不會有100個物件產生100個function的問題
Card3.prototype.hello = function () { }

class Class4 {
    constructor(n) {
        this.name = n;
        //this會指向Class4 用此方式將hello綁定在物件裡面
        //缺點是叫100個出現100個
        this.hi = this.hello.bind(this);
        // 或
        this.hihi = function () {
            console.log("hihi", this.name);
        }
        //或
        this.hihihi = () => {
            console.log("hihihi", this.name);
        }
    }
    hello() {
        console.log("hi", this.name);
    }
}
const x = new Class4("Class4");
x.hi();
x.hihi();
x.hihihi();

const xx = { name: "Wrong Class4!" }
xx.hiiiiiiiii = x.hi
xx.hiiiiiiiii()

console.log("-----------extends-----------");
class Car {
    constructor(initName){
        this.name=initName;
    }
    start() {
        console.log("Start!!!");
    }
}
class Porshe extends Car {
    constructor(PorsheName){
        super(PorsheName);
    }
    start(){
        super.start();
        console.log("Start2!!!");
    }
    start2(){
        super.start();
        console.log("Run!!!");
    }
}
const p1 = new Porshe("Porshe");
p1.start();
p1.start2();
console.log(p1.name);