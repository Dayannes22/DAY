function mostrarMensagem() {
    alert("Olá, Eu sou Dayanne!");
}
function verificarNumero() {
let numero = document.getElementById("numero").value;
numero = Number(numero);
let mensagem = "";

if (numero < 0) {
    mensagem = "O Número é negativo";
}
else if (numero > 0){
    mensagem = "O número é positivo";
}
 else {  
    mensagem = "o número é zero"
 }   
    document.getElementById("resultado").innerText= mensagem;
}




function executaFor() {
 let resultado = "Números pares de 0 a 10: ";
for (let i = 0; i <= 10; i++) {
    if(i % 2 === 0) {
        resultado += i + " ";
    }
       
}
document.getElementById("saida").textContent = resultado;
}

    function executarArray() {
            let nomes = ["Manu", "Samira", "Andreia", "Ana"];
            let resultado = "Lista de alunas:" ;

            for (let i = 0; nomes.length; i++) {
                resultado += nomes [i]
            }

    document.getElementById("saida").textContent = resultado;
        }