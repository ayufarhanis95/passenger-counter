let countEl=document.getElementById("count-el");
let saveEl=document.getElementById("save-el");
let count = 0;

console.log(saveEl);

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    let saveStr = count + " - ";
    saveEl.textContent += saveStr;
    countEl.textContent = 0;
    count=0;
}

function reset() {
    let resetStr = "- "
    saveEl.textContent = "Previous Entries: ";
    countEl.textContent = 0;
    count=0;
}
