$(document).ready(function() {
  $('.ReportPreview').eq(0).click(function(){
      $('.ReportContent').eq(0).toggleClass('fullscreen');
  });  
    $('.ReportPreview').eq(1).click(function(){
      $('.ReportContent').eq(1).toggleClass('fullscreen');
  }); 
      $('.ReportPreview').eq(2).click(function(){
      $('.ReportContent').eq(2).toggleClass('fullscreen');
  }); 
    
    $('.ReportClosePreview').eq(0).click(function(){
         $('.ReportContent').eq(0).toggleClass('fullscreen');
});  
    $('.ReportClosePreview').eq(1).click(function(){
         $('.ReportContent').eq(1).toggleClass('fullscreen');
}); 
    $('.ReportClosePreview').eq(2).click(function(){
         $('.ReportContent').eq(2).toggleClass('fullscreen');
}); 
});
