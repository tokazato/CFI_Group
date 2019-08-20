$(document).ready(function(){
    $('.openHeaderDropDown').hover(function(){
         $('.dropDownContent').slideDown('slow').css('display', 'flex');
        }, function(){
        $('.dropDownContent').slideUp();
    });
    // $('.headerLanguageLi').hover(function(){
    //     $('.downLanguage').slideDown('slow').css('display', 'flex');
    //    }, function(){
    //    $('.downLanguage').slideUp();
//    });
})