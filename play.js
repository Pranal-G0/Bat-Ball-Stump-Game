function leftMoves(){
    const movesleft=document.querySelector('#moves-left');
movesleft.textContent=`Moves Left : ${5-(score.win+score.lost+score.tie)}`;
}
leftMoves();

