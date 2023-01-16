
let count = 0
let counter = document.getElementById("count-num") 
let welcomeTxt = document.getElementById("welcome") 
let history = document.getElementById("history")

let greeting = "Nice to Meet you 😎 "

welcomeTxt.innerText += "  " + greeting  

// ==================== FUNCTIONS =========================
function increment(){
    count += 1
    counter.innerText = count
}

function decrement(){
    count -= 1
    counter.innerText = count
}

function save(){
    let countstr = "[" + count + "]" +" => "
    history.textContent += countstr
}

function reset(){
    count = 0
    counter.innerText = 0
}
// ==================== FUNCTIONS =========================