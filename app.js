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

function showUserMove(userMove){
    if(userMove==='Bat'){
        document.querySelector('#userInfo').innerHTML= `Your Choice <br/><img src="images/finalbat.jpg" alt="Bat" class="choice-img">` ;
    }
    else if(userMove==='Ball'){
        document.querySelector('#userInfo').innerHTML=`Your Choice<br/><img src="images/finalball.jpg" alt="Ball" class="choice-img">`;
    }
    else if(userMove==='Stump'){
        document.querySelector('#userInfo').innerHTML=`Your Choice<br/><img src="images/finalstump.jpg" alt="Stump" class="choice-img">`;
    }
    else{
        document.querySelector('#userInfo').innerHTML= ` `;
    }
}
function showComputerMove(computerMove){
    if(computerMove==='Bat'){
        document.querySelector('#computerInfo').innerHTML= `Computer Choice <br/><img src="images/finalbat.jpg" alt="Bat" class="choice-img">`;
    }
    else if(computerMove==='Ball'){
        document.querySelector('#computerInfo').innerHTML=`Computer Choice<br/><img src="images/finalball.jpg" alt="Ball" class="choice-img">`;
    }
    else if(computerMove==='Stump'){
        document.querySelector('#computerInfo').innerHTML=`Computer Choice <br/><img src="images/finalstump.jpg" alt="Stump" class="choice-img">`;
    }
    else{
        document.querySelector('#computerInfo').innerHTML= ` `;
    }
}



function showResult(userMove,computerMove,resultMsg){
    localStorage.setItem('Score',JSON.stringify(score));
  

    document.querySelector('#resultInfo').innerText=resultMsg ? resultMsg : ``;
    document.querySelector('#scoreInfo').innerText=`( Your ${score.displayScore()}  )`  || ``;

    setTimeout(redirect,5000);
    

}
function redirect(){
    if (score.win+score.lost+score.tie >=5){
       
        location.href="result.html";
    }
}




