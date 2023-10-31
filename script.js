// function getComputerChoice(){
//     let list = ['ROCK','PAPER','SCISSOR'];
//     let chosen =Math.floor(Math.random() * list.length);
//     return list[chosen];
// }
// const computerValue = getComputerChoice();
// const humanselected = "ROCK" 

// function playRound(computerSelected , playerSelected){
//     let result ='';
//     if (computerSelected === playerSelected){
//         console.log("its a draw");
//     }else if( (computerSelected === 'ROCK' && playerSelected === 'SCISSOR') ||
//               (computerSelected === 'PAPER' && playerSelected === 'ROCK')||
//               (computerSelected === 'SCISSOR' && playerSelected === 'PAPER')){
//                 result = "Computer Won ";
//               }  
//     else if((playerSelected === 'ROCK' && computerSelected === 'SCISSOR') ||
//             (playerSelected === 'PAPER' &&  computerSelected === 'ROCK') ||
//             (playerSelected === 'SCISSOR' && computerSelected === 'PAPER')){
//                 result = "Human Won ";
//             }
//     return result;
// }

// console.log(playRound(computerValue,humanselected));



const buttons = document.querySelectorAll('.button');

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        console.log('hiii')
    });
});