$(document).ready(function(){
// ----------------  start jquery


// -------------- navigation drop down in menu
    $('.openHeaderDropDown').click(function(){
        if(window.matchMedia('(max-width: 1000px)').matches){
            $(this).find('.dropDownContent').slideToggle('slow');
            $(this).find('.loansArrow').toggleClass('loansArrow-active');
        }
        });
    
// ---------------- open burger menu 
    $('.burger').click(function(){
        $('.burger-span-1').toggleClass('burger-span-1-active');
        $('.burger-span-2').toggleClass('burger-span-2-active');
       $('.navigationBox').slideToggle('slow')
    });
    
// ------------ main page: calculator question popup
    $('.question').hover(function(){
        $('.attention').toggle();
    });

// ---------------- fill form open input with radio button 
    $("#radio_1").prop("checked", true);
    $("#radio_1").on('click', function(){
       $('.fill-form-input-up-box-right-side').css('display', 'none');
       $('.fill-form-radio-botton-left-side-box ').css('display', 'block');
    })
    
    $("#mortgage_radio_1").on('click', function(){
        $('.fill-form-input-up-box-right-side').css('display', 'none');
        $('.fill-form-radio-botton-left-side-box-mortgage').css('display', 'block');
     })
    
    $("#radio_2").on('click', function(){
        $('.fill-form-input-up-box-right-side').css('display', 'flex');
        $('.fill-form-radio-botton-left-side-box ').css('display', 'none');
        $('.fill-form-radio-botton-left-side-box-mortgage').css('display', 'none');
     })


// -------------- calculator easy and annuity
     $('#annuity').on('click', function(){
         $('#startToCalculate').attr('href', 'annuityCalculator.html');
         $('.anuiteti').addClass("get-loan-type-active");
         $('.loanEasy').removeClass('get-loan-type-active');
     });
     $('#easyLoan').on('click', function(){
        $('#startToCalculate').attr('href', 'easyCalculator.html');
        $('.loanEasy').addClass("get-loan-type-active");
        $('.anuiteti').removeClass('get-loan-type-active');
    });


// ------------- calendar hide last days
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 
    today = yyyy+'-'+mm+'-'+dd;
    $('#txtDate').attr('min', today);


// -------------- slider counter and  add 0
    var sliderLength = $('.swiper-slide').length;
    if(sliderLength < 10){
        $('.wholeImgNumber').text('/ 0' + sliderLength);
    } else {
        $('.wholeImgNumber').text('/ ' + sliderLength);
    }

    for(let i = 1; i <= sliderLength; i++){
        var li = $(`<li>${i}</li>`);
        if(i < 10){
            li = $(`<li>${'0' + i}</li>`);
        }
        $('#indexCounter').append(li);
    }

// ---------------  select currency
    $('.fill-form-select').on('click', function(){
        $('.fill-form-select').removeClass('fill-form-select-text-active');
        $(this).addClass('fill-form-select-text-active');
    })

    $('.form-description').on('click', function(){
        $('.form-description').removeClass('form-description-active');
        $(this).addClass('form-description-active');
    })


// ---------------  send success message close
    $('.popup-hide').on('click', function(){
        $('.popup').hide();
    })


// --------------- check contact page form
    $('.contact-send-button').on('click', function(){
        var cntInput = $('.contact-input');
        var cntIcon1 = $('.contact-icon1');
        var cntIcon2= $('.contact-icon2');

        for(let i = 0; i < cntInput.length; i++ ){
            if( cntInput.eq(i).val().length < 2 ){
                // cntInput.eq(i).css('color', 'red');
                cntInput.eq(i).css('border-color', '#E2574C');
                cntIcon1.eq(i).css('background', '#E2574C');
                cntIcon2.eq(i).css('background', '#E2574C');
                
            } else {
                // cntInput.eq(i).css('color', '#102943');
                cntInput.eq(i).css('border-color', '#102943');
                cntIcon1.eq(i).css('background', '#102943');
                cntIcon2.eq(i).css('background', '#102943');
            }
        }  
    })
    $('.contact-email').keyup(function(){
        if($(this).is('input[type="email"]')){
            var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
            if (testEmail.test($(this).val())) {
            $(this).css({'border-color': '#102943'});
            $('.contact-icon2').css('background', '#102943');
            }else{
            $(this).css({'border-color': '#E2574C'});
            $('.contact-icon2').css('background', '#E2574C');
            }
        }
    })
    $('.contact-first-name').keyup(function(){
        if($(this).val().length < 2){
            $(this).css('border-color', '#E2574C');
            $('.contact-icon1').css('background', '#E2574C');
        }else{
            $(this).css('border-color', '#102943');
            $('.contact-icon1').css('background', '#102943');
            }
    })
    



    
// -------------- end jquery     
})


// ---------- calculator 
var startToCalculate = document.getElementById('startToCalculate')
var getMoney = document.getElementById('getMoney');
var annualPercent = document.getElementById('annualPercent');
var monthly = document.getElementById('monthly');

// function calculator(){
//     if(getMoney.value < 5000){
//         annualPercent.value = 24;
//         monthly.value = 2;
//     }
//     if(getMoney.value > 5000){
//         annualPercent.value = 18;
//         monthly.value = 1.5;
//     }
//     if(getMoney.value > 10000){
//         annualPercent.value = 12;
//         monthly.value = 1;
//     }
// }
// startToCalculate.addEventListener('click', calculator );
// if(startToCalculate){
//     startToCalculate.addEventListener('click', swapper, false);
// }


// ------------ calculator: monthly and annual counter
monthly.addEventListener('keyup', function(){
    var savePercentMonthly =  monthly.value * 12;
    var saveToFixedNumberMonthly = savePercentMonthly.toFixed(2)
    annualPercent.value = saveToFixedNumberMonthly;
})
annualPercent.addEventListener('keyup', function(){
    var savePercent =  annualPercent.value / 12;
    var saveToFixedNumber = savePercent.toFixed(2)
    monthly.value = saveToFixedNumber;
})
