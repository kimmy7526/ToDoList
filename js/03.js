// if & switch (不用太擔心)

// if 
let ans = 100 < 50;
//ans自動轉boolean (同java)
console.log(ans)
if (ans) {
    console.log("YES") //true執行此行
} else {
    console.log("NO") 
}

let ans1 = true && false;
console.log(ans1) //false
let ans2 = true || false;
console.log(ans2) //true

//一個答案成立即可
if (ans) {
    console.log("Level:1")
} else if (ans === false) {
    console.log("Level:2")  //ans
} else {
    console.log("Level:3")
}

// switch 
let key = 30
switch (key) {
    case 10:
        console.log("not you")
        break;
    case 20:
        console.log("not you")
        break;
    default:
        console.log("find you")
}

