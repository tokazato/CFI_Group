$(document).ready(function(){
    $('.openHeaderDropDown').click(function(){
         $(this).find('.dropDownContent').slideToggle('slow');
         $(this).find('.loansArrow').toggleClass('loansArrow-active');
        });
    
    $('.burger').click(function(){
        $('.burger-span-1').toggleClass('burger-span-1-active');
        $('.burger-span-2').toggleClass('burger-span-2-active');
       $('.navigationBox').slideToggle('slow')
    });
    
    $('.question').hover(function(){
        $('.attention').toggle();
    });

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
})

var startToCalculate = document.getElementById('startToCalculate')
var getMoney = document.getElementById('getMoney');
var annualPercent = document.getElementById('annualPercent');
var monthly = document.getElementById('monthly');
function calculator(){
    if(getMoney.value < 5000){
        annualPercent.value = 24;
        monthly.value = 2;
    }
    if(getMoney.value > 5000){
        annualPercent.value = 18;
        monthly.value = 1.5;
    }
    if(getMoney.value > 10000){
        annualPercent.value = 12;
        monthly.value = 1;
    }
}
startToCalculate.addEventListener('click', calculator );

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
