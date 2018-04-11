let bancoDeImagens = ["01-sim.png", "02-sim.png", "03-sim.png", "04-sim.png", "05-nao.png", "06-nao.png", "07-sim.png", "08-sim.png", "09-nao.png", "10-sim.png"];
const resultado = ["Yes", "Yes", "Yes", "Yes", "No", "No", "Yes", "Yes", "No", "Yes"];
const resposta = []; //Armazena as infos dada pelo participante
const resultadoFinal = []; //Armazena as infos validadas com as repostas corretas - True ou False


var i = 0;
let contador = function(valor) {
        if(i < 9) {
            resposta[i] = valor; //Pega o valor do parametro no html do index, para deifinir qual botão foi clicado
            resultadoFinal[i] = resposta[i] === resultado[i] ? true : false; //Valida se a resposta dada está correta ou errada
            console.log(resposta[i], bancoDeImagens[i], resultadoFinal[i]); 
            i++;      
            document.getElementById("imgTweet").src = "./assets/img/"+bancoDeImagens[i]; //Troca a imagem ao clicar no botão     
            sessionStorage.setItem("questionario", JSON.stringify(resultadoFinal)); //Armazena as informações do jogo para exibir na tela do resultado
        } else {
            window.location.replace("resultado.html") //Redireciona para a página de resultados ao final do quiz
        }      
}


let recuperar = JSON.parse(sessionStorage.getItem("questionario")); //Converte o dado da LocalStorage de string para array
console.log(recuperar); 
//Função ainda não funciona completamente
i = 0; 
do {
        recuperar[i] === true ? "Acertou" : "Errou"; //Verifica se acertou ou errou a questão para printar na tela final do quiz
        console.log(recuperar[i]);
        document.getElementById("acertos").innerHTML = "<p><span>" +(i+1)+ "</span>" +recuperar[i]; //Descobrir como colocar linha no html 
        i++;
    } while (i < 9);
