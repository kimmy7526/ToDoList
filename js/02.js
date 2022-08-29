//Array & Object

//Array[] 
let classA = ["A", "B", "C"]
classA.push("D")
classA.pop()
console.log(classA)
console.log(classA.length)

//Object{}   k:v
const card={
    name:"Kimmy",
    age:"21",
    address:"Yilan",
    comment:["wow","haha"]
}
console.log(card)
const post=[card,card,card,card]
console.log(post)

//取值
console.log(classA[0])
console.log(post[0].name)
console.log(post[0].comment[0])