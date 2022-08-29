const text = document.getElementById('text')
const date = document.getElementById('date')
const time = document.getElementById('time')
const add = document.getElementById('add')
const remove = document.getElementById('remove')
const list = document.getElementById('list')
let box = []

class RenderFunction {
    render() {
        let str = ''
        box.forEach((e) => {
            str = str + `
            <div class="item">
            <p>${e.text} <br> ${e.date}${e.time}</p>
            </div>
            `
        })
        //注意不要再寫錯了!
        list.innerHTML = str
    }
}
const rf = new RenderFunction()

add.addEventListener('click', function () {
    box.unshift({
        text: text.value,
        date: date.value,
        time: time.value,
    })
    rf.render();
    
})

remove.addEventListener('click', function () {
    box.shift()
    rf.render();
})