$(document).ready(function(){
    // $('.openHeaderDropDown').hover(function(){
    //      $('.dropDownContent').slideToggle('slow');
    //     });
    // $('.openHeaderDropDownSecond').hover(function(){
    //     $('.dropDownContentSecond').slideToggle('slow');
    //    });
    $('.question').hover(function(){
        $('.attention').toggle();
    });
})

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
 