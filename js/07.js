//DOM操作 window & document
window.alert("hi~");
//callback load完成=>執行function
window.addEventListener("load", function (params) {
    console.log("load is ok");
    const p1 = document.getElementById("title1");
    const p2 = document.getElementById("title2");

    //沒有 CSS 隱藏文本間距和標籤，除了 <script> 和 <style> 元素。
    p1.innerText = "<h1>D</h1><p>C</p>";
    //包括所有間距和內部 HTML 標記
    p2.innerHTML = "<h1>D</h1><p>C</p>";

    const btn = document.getElementById("btn");
    btn.addEventListener("dblclick", function () {
        console.log("Click~");
    });
    // .選取class #選取id
    const box1 = document.querySelector(".box1");
    box1.innerHTML = "<p>ww</p>";
    const input = document.querySelector("#input");
    //鍵盤彈起來:紀錄乙次
    //callback 傳回參數(e
    //可用來監聽使用者輸入帳密
        input.addEventListener("keyup", function (e) {
        console.log("input!");
        // console.log(e);
        console.log(e.target.value);
    })
})