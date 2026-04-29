
let divisao = " " / 2
console.log(typeof divisao)
let notNumber = "" / ""
console.log(typeof notNumber)
console.log(Number.isNaN(notNumber));   
console.log(5 == '5')

function escondeEmail(email){  // arthurlessa@gmail.com => a*********a@gmail.com
    let arroba = email.slice(email.indexOf("@"))
    let nome = email.slice(0,email.indexOf("@"))
    let primeiraL = nome.slice(0,1)
    let ultimaL = nome.slice(-1)
    let asterisco = "*".repeat(nome.length - 2)
    return primeiraL + asterisco + ultimaL + arroba
}
console.log(escondeEmail("arthurlessa023@gmail.com"))
console.log(escondeEmail("douglasSempreDisponivel@gmail.com"))

const btn = document.getElementById("h1");
const output = document.getElementById("output");
btn.addEventListener("click", () => {
    const userName = prompt("Qual é seu email?", "Guest");
    
    if (userName === null || userName === "" || userName === "Guest") {
        output.textContent = "Fuck you and put a fucking name";}
        else {output.textContent = "Hello, " + escondeEmail(userName) + "!";}

});
