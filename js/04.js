//for & while
//，隔開
let classA = [100, 60, 0]
classA.push(101)

for (let i = 0; i < classA.length; i++) {
    if (i === 2) {
        classA[i] = 999
    }
    console.log("i:", classA[i] + 1)
}

let toggle = true;
let cnt = 0;
while (toggle) {
    console.log(toggle);
    cnt++;
    if (cnt === 10) {
        toggle = false;
    }
}