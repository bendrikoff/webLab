window.onload= function(){
//scroll bttn
var bttn = document.querySelector('.upBttn');

function upScroll(){
    if (window.pageYOffset > 20){
        bttn.style.opacity='0.5';
    } else{
        bttn.style.opacity='0';
    }
}
window.onscroll = upScroll;
bttn.onmouseover = function(){
    this.style.opacity='1';
}
bttn.onmouseout= function(){
    this.style.opacity='0.5';
}
bttn.onclick = function(){
    window.scrollTo(0,0);
}
//telegram scroll
var div= document.querySelector('.telegram');
    var y;
              
    document.addEventListener('scroll',scrollTg);
              
    function scrollTg(){
        y=window.scrollY/5;
        var coords = '50% '+ -y +'px';
        div.style.backgroundPosition=coords;
    }
//popup
 var popUpBttn = document.querySelector('.popUpBttn');
 var popUp = document.querySelector('.dialog');
 
 var popUpClose = document.querySelector('.close');
 var overlay = document.querySelector('.overlay');

popUpBttn.onclick= function(){
    overlay.style.visibility='visible';
    popUp.style.visibility='visible';

}
popUpClose.onclick=function(){
    overlay.style.visibility='hidden';
    popUp.style.visibility='hidden';

}
 


}