let bancoDeImagens = ["01-sim.png", "02-sim.png", "03-sim.png", "04-sim.png", "05-nao.png", "06-nao.png", "07-sim.png", "08-sim.png", "09-nao.png", "10-sim.png"];
const resultado = ["Yes", "Yes", "Yes", "Yes", "No", "No", "Yes", "Yes", "No", "Yes"];
const resposta = []; //Armazena as infos dada pelo participante
const resultadoFinal = []; //Armazena as infos validadas com as repostas corretas - True ou False


var i = 0;
let contador = function(valor) {
    resposta[i] = valor; //Pega o valor do parametro no html do index, para deifinir qual botão foi clicado
        if(resposta[i] === resultado[i]) {
            resultadoFinal[i] = true; //Valida se a resposta dada está correta ou errada
        } else {
            resultadoFinal[i] = false; 
        }    

        i++;

        if(i === resultado.length){               
            sessionStorage.setItem("questionario", JSON.stringify(resultadoFinal)); //Armazena as informações do jogo para exibir na tela do resultado
            window.location.replace("resultado.html") //Redireciona para a página de resultados ao final do quiz
        } else {
            document.getElementById("imgTweet").src = "./assets/img/"+bancoDeImagens[i]; //Troca a imagem ao clicar no botão
        }      
}

let recuperar = JSON.parse(sessionStorage.getItem("questionario")); //Converte o dado da LocalStorage de string para array
console.log(recuperar); 

//Função ainda não funciona completamente

i = 0;
let counter = 0;
let pAcertos = document.getElementById("resultado");

console.log(pAcertos);

let finalQuiz = function() {
    for(i = 0; i < recuperar.length; i++) {
        if(recuperar[i] === true) {
            console.log(recuperar[i]);
            document.getElementsByClassName("resultadoFinal")[i].innerHTML = "<span>" +(i+1)+ "</span> ACERTOU";
            //document.getElementsByClassName("span")[i].style.backgroundColor = "green";
            counter += 1;
            counter <= 1 ? pAcertos.innerHTML = counter+ " ACERTO" : pAcertos.innerHTML = counter+ " ACERTOS";
        } else {
            document.getElementsByClassName("resultadoFinal")[i].innerHTML = "<span>" +(i+1)+ "</span> ERROU";
            //document.getElementsByClassName("span")[i].style.backgroundColor = "red";
        } console.log(); 
    }
}

sessionStorage.getItem(finalQuiz());



