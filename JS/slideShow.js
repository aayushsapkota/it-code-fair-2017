
$(document).ready(function(){

    var slideIndex = 1;
showImg(slideIndex);
    
function plusImg(n) {
    showImg(slideIndex += n);
}

function showImg(n) {
    var i;
    var x = document.getElementsByClassName("slides");
    if (n > x.length)
    {slideIndex = 1};
    if (n < 1) 
    {slideIndex = x.length};
    
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
   
}
    
    
    $('.NextImage').click(function(e){
     plusImg(+1);
  }); 
    $('.PreviousImage').click(function(e){
      plusImg(-1);
  }); 


});


