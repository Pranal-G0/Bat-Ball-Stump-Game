function finalResultDisplay(){
    if(score.win>score.lost){
      
     const div= document.querySelector('div');
     div.textContent="CONGRATULATIONS! YOU WON THE GAME";
      
    }else if(score.win<score.lost){
     
      const div= document.querySelector('div');
      div.textContent="OH NO! YOU LOSE THE GAME";
      
    }
    else if(score.win===score.lost){
     
      const div=document.querySelector('div');
      div.textContent="IT'S A TIE !!!";
      
    }
  };
 
  finalResultDisplay();

  
function gradeDisplayR(){
  const yougrade=document.querySelector('#your-gradeR');
  yougrade.textContent=` YOU : ${score.win}`;
  const compgrade=document.querySelector('#comp-gradeR');
  compgrade.textContent=` COMPUTER : ${score.lost}`;

};
gradeDisplayR();
