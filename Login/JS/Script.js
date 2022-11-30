//JavaScript Document

function validalogin(){

    //alert ("Entrou na função");


    var usuario = "admin";
    var senha = "admin";
    var recebeu_usuario = document.getElementById("usuario").value;
    //Nesta função eu estou dizendo para receber o elemento de identificação que e o usuario.
    var recebeu_senha = document.getElementById("senha").value;
    //Nesta função eu estou dizendo para receber o elemento de identificação que e o senha.
    if ((usuario == recebeu_usuario)&&(senha == recebeu_senha)){
        // esta e uma condiçao.
        // esta linha eu estou fazendo as comparaçoes de usuario e senha digitado pelos usuarios.

    window.location.href ="Index-Obrigado.html";
    }

    else{
        alert("Dados Incorretos. Entre com o nome do usuário e senha!");
    }
    //Se caso um ou dois itens usuario e senha estiver errados´,vai me dar esta mensagem de dados incorretos.

}