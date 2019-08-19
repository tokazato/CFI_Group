$(document).ready(function(){
    $('.openHeaderDropDown').hover(function(){
               $('.dropDownContent').slideDown('slow').css('display', 'flex');
           }, function(){
            $('.dropDownContent').slideUp();
           });
})