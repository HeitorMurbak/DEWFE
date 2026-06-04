
function verificar(){
    let senha = document.getElementById("senha").value;
    const msgSenha = document.getElementById("senhaMsg")

    if (senha.length < 8){
        msgSenha.innerHTML = "Senha Invalida, minimo de 8 caracteres."
        msgSenha.style.color = "red"
    }
    else{
        msgSenha.style.color = "green"
        msgSenha.innerHTML = "Senha valida!"
    }
}


function MostrarCampoEstudantes(){
    const souEstudante = document.getElementById("camposEstudantes") 
    const checkbox = document.getElementById("estudante") 

    if(checkbox.checked){
        souEstudante.style.display = "block";
    }
    else{
        souEstudante.style.display = "none";
    }
}

function mostrarSenha() {
    let senha = document.getElementById("senha");

    senha.type = "text";
}


function naoMostrarSenha() {
    let senha = document.getElementById("senha");

    senha.type = "password";
}

let botao = 0

function ordemBotao(){

    if(botao == 0){
        mostrarSenha() 
        botao++;
    }
    else{
        naoMostrarSenha()
        botao--
    }
}