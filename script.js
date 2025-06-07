function mostrarMensagem() {
    alert("Olá, Eu sou Dayanne!");
}
function verificarNumero() {
let numero = document.getElementById("numero").value;
numero = Number(numero);
let mensagem = "";
if (numero < 0){
    mensagem = "O Número é positivo";
}
else if (numero > 0){
    mensagem = "O número é negativo";}
    
    Document.getElementById("Resultado").innertext = mensagem;
}