// let buttonNo = document.getElementById('btnNo');
// let buttonYes = document.getElementById('btnYes');
// let no = 0;
// let yes = 0;
// const resultado = [];


// let questionario  =  function() {
//     for (var i = 0; i < resultado.length; i++) { 
//     resultado[i];

//         if(buttonNo.addEventListener('click')) {
//             } function no() {
//                 console.log(no);
//             }
//         }

//         if(buttonYes.addEventListener('click')) {
//             } function yes() {
//                 console.log(yes);
//             }
// }

//----------------------------------------------------------

// const resultado = [];

// let questionario = function (resposta){
//     for(var i = 0; i < resultado.length; i++)
//     resultado = resposta[i];
//     console.log(resultado);
//   }

//-----------------------------------------------------------

let bancoDeImagens = ["01-sim.png", "02-sim.png", "03-sim.png", "04-sim.png", "05-nao.png", "06-nao.png", "07-sim.png", "08-sim.png", "09-nao.png", "10-sim.png"];

let btnNo = document.getElementById('btnNo');
let btnYes = document.getElementById('btnYes');
const resultado = ["Sim", "Sim", "Sim", "Sim", "Não", "Não", "Sim", "Sim", "Não", "Sim"];
const resposta = [];

let contador = function(valor) {
    for (var i = 1; i <= 10; i++) { 
        if(i < 10) {
            document.getElementById("imgTweet").src = "../assets/img/"+bancoDeImagens[i];
            resposta[i] = "btn"+valor;
            console.log(contador);
            console.log(i);
        } else {
            window.location.replace("resultado.html")
        }      
    }
}

document.getElementById("btnNo").addEventListener('click', contador("No"));
    
document.getElementById("btnYes").addEventListener('click', contador("Yes"));



    
