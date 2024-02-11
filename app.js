let score;
let scoreStr=localStorage.getItem('Score');

function resetScore(scoreStr){
    if(scoreStr!==undefined){
    score=JSON.parse(scoreStr);
    }
    else{
        score={
        win:0,
        lost:0,
        tie:0,      
      };
    }       
    score.displayScore= function(){
        return `Score:  Won : ${score.win}    Lost : ${score.lost}    Tie : ${score.tie}`;
    };
    
}

resetScore(scoreStr);
 





function generateComputerChoice(){
//This will generate random number between 0 and 3
let randomNumber=Math.random()*3;
 if(randomNumber>0 && randomNumber<=1){
    return 'Bat';
  
 }else if(randomNumber<=2){
    return 'Ball';
     
 }else {
    return 'Stump';
    
 }
}
function getResult(userMove,computerMove){
if(userMove==='Bat'){
    if(computerMove==='Ball'){
    score.win++;
    return 'User Won.';
    }else if(computerMove==='Bat'){
     score.tie++;
        return 'Its a tie.';
    }else if(computerMove==='Stump'){
        score.lost++;
        return 'Computer Won.';
    }
}else if(userMove==='Ball'){
    if(computerMove==='Stump'){
        score.win++;
        return 'User Won.';
    }else if(computerMove==='Ball'){
        score.tie++;
        return `It's a tie.`;
     }else if(computerMove==='Bat'){
        score.lost++;
        return 'Computer Won.';
     }
}else{
    if(computerMove==='Bat'){
        score.win++;
        return 'User Won.';
    }else if(computerMove==='Stump'){
        score.tie++;
        return `It's a tie.`;
    }else if(computerMove==='Ball'){
        score.lost++;
        return 'Computer Won.';
    }
}

}
function showResult(userMove,computerMove,resultMsg){
localStorage.setItem('Score',JSON.stringify(score));
document.querySelector('#userInfo').innerText=userMove ? `You have chosen ${userMove}` : ``;
document.querySelector('#computerInfo').innerText=computerMove ? `Computer Choice is ${computerMove} ` : ``;
document.querySelector('#resultInfo').innerText=resultMsg ? resultMsg : ``;
document.querySelector('#scoreInfo').innerText=`( Your ${score.displayScore()}  )`  || ``;


if (score.win+score.lost+score.tie >=5){
   
    location.href="result.html";
    
 }


}




