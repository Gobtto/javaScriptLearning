const btn = document.getElementById("h1");
const output = document.getElementById("output");
btn.addEventListener("click", () => {
    const userName = prompt("Qual é seu nome>", "Guest");
    
    if (userName === null || userName === "" || userName === "Guest") {
        output.textContent = "Fuck you and put a fucking name";}
        else {output.textContent = "Hello, " + userName + "!";}

});
let divisao = " " / 2
console.log(typeof divisao)
let notNumber = "" / ""
console.log(typeof notNumber)
console.log(Number.isNaN(notNumber));   
console.log(5 == '5')