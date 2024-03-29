// ----------------  start jquery
$(document).ready(function(){



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

// ------------------------- check contact page form

    var emailIcon = $('.contact-icon2');
    var userIcon = $('.contact-icon1');
    var emailInput =  $('.contact-email');
    var nameInput = $('.contact-first-name');
    var cntTextarea = $('.contact-textarea ');

    $('.contact-send-button').on('click', function(event){

        // -------- reCaptcha eror contact page
        var response = grecaptcha.getResponse();
             if(response == ""){
             	$('.g-recaptcha').css('border', '1px solid red')
                if( $('.recaptcha-checkbox-border').css('display') == 'none' ){ alert() }
             	event.preventDefault()
             } else {
             	$('.g-recaptcha').css('border', 'none')
             }

        // ------ check email on click
        var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
            if (testEmail.test( emailInput.val())) {
            emailInput.removeClass('form-error');
            emailIcon.css({'background': '#57697B'});
            } else {
            emailInput.addClass('form-error');
            emailIcon.css({'background': '#E2574C'});
            }

        // ----- check name on click
            if(nameInput.val().length < 2){
                userIcon.css('background', '#E2574C');
                nameInput.addClass('form-error');
            } else {
                userIcon.css('background', '#57697B');
               nameInput.removeClass('form-error');
            }

        // ------- check textarea on click
            if(cntTextarea.val().length < 10){
                cntTextarea.addClass('form-error');
            } else {
                cntTextarea.removeClass('form-error');
            }

        // ------- stop function if intup field is wrong
            if( $('input').hasClass('form-error') ||  $('textarea').hasClass('form-error') ){
                event.preventDefault();
            }
    })
   
    // ------ check email on keyup
    emailInput.keyup(function(){
        if($(this).is('input[type="email"]')){
            var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
            if (testEmail.test($(this).val())) {
            $(this).removeClass('form-error');
            emailIcon.css({'background': '#57697B'});
            }else{
            $(this).addClass('form-error');
            emailIcon.css({'background': '#E2574C'});
            }
        }
    })

    // ------ check name on keyup
    nameInput.keyup(function(){
        if($(this).val().length < 2){
            $(this).addClass('form-error');
            userIcon.css('background', '#E2574C');
        }else{
            $(this).removeClass('form-error');
            userIcon.css('background', '#57697B');
            }
    })

    // ------ check textarea on keyup
    cntTextarea.keyup(function(){
        if($(this).val().length < 10){
            $(this).addClass('form-error');
        }else{
            $(this).removeClass('form-error');
            }
    })

    
// ---------------- calculator monthly limit  --------------------------------------------------------------------------------- calc
    $('.monthly-loan').keyup(function(){
        if( $(this).val() > 240 ){
            $(this).val('240')
        } 
        if( $(this).val() < 0 ){
            $(this).val('0')
        }
        if( $(this).val().length > 3 ){
            $(this).val('240');
        }
    })

// --------------  type only text in input
    // $('.form-only-text').keypress(function(){
    //     return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)
    // })





// --------------- check input value for number, number lenght, text.
    function setInputFilter(textbox, inputFilter) {
        ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
          textbox.addEventListener(event, function() {
            if (inputFilter(this.value)) {
              this.oldValue = this.value;
              this.oldSelectionStart = this.selectionStart;
              this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
              this.value = this.oldValue;
              this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            }
          });
        });
      }


    // ------------ check input id value that user type only number in Form 
    var idNumber = $('.form-id-number');
    for(let i = 0; i < idNumber.length; i++){
        setInputFilter(idNumber[i], function(value) {
            return /^\d*$/.test(value) });
    }
    // && (value === "" || parseInt(value) >= 31000000000 );


    // ---------------  check input id value that max length to be 11 number
    // var max_chars = 10;
    // $('.form-id-number').keydown( function(e){
    //     if ($(this).val().length >= max_chars) { 
    //         $(this).val($(this).val().substr(0, max_chars));
    //     }
    // });
    // $('#input').keyup( function(e){
    //     if ($(this).val().length >= max_chars) { 
    //         $(this).val($(this).val().substr(0, max_chars));
    //     }
    // });


    // ----------- check form input that to be only text
    var onlyText = document.getElementsByClassName("form-only-text");
    for(let i = 0; i < onlyText.length; i++ ){
        setInputFilter(onlyText[i], function(value) {
        return /^[а-яА-ЯЁёa-zA-zა-ჰ\u00c0-\u024f]*$/i.test(value); });
    }

    //   setInputFilter(document.getElementsByClassName("form-only-text")[0], function(value) {
    //     return /^-?\d*$/.test(value); });

    //   setInputFilter(document.getElementsByClassName("form-only-text")[0], function(value) {
    //     return /^-?\d*[.,]?\d*$/.test(value); });

    //   setInputFilter(document.getElementsByClassName("form-only-text")[0], function(value) {
    //     return /^-?\d*[.,]?\d{0,2}$/.test(value); });

    //   setInputFilter(document.getElementsByClassName("form-only-text")[0], function(value) {
    //     return /^[a-z]*$/i.test(value); });

    //   setInputFilter(document.getElementsByClassName("form-only-text")[0], function(value) {
    //     return /^[0-9a-f]*$/i.test(value); });


    // setInputFilter(document.getElementsByClassName("form-only-text")[0], function(value) {
    //     return /^[a-z\u00c0-\u024f]*$/i.test(value); });



// --------------- check loans form on click
    $('.send-form').on('click', function(event){

        $('.fill-loan-main-box :input').each(function(){
            var input = $(this);

            // ------- check input value length 
            if( input.val().length < 2){
                $(this).addClass('form-error');
            } else {
                $(this).removeClass('form-error');
            }

             // ---- remove class form error radio buttons and other input which we don't need 
             if(input.attr('id') != "undefined" &&  (input.attr('id') == "radio_1" ||  input.attr('id') == "radio_2"  ||  input.attr('id') == "valuta_value" )) 
             {
                 $(this).removeClass('form-error');
             }
             if(input.attr('name') != 'undifined' && (input.attr('name') == 'type_form' )) 
             {
                $(this).removeClass('form-error');
             }
             if( $('button').hasClass('form-error')){
                $('button').removeClass('form-error');
             }

            // ------- check id Number value
            for(let i = 0; i < idNumber.length; i++ ){
                if( idNumber.eq(i).val().length != 11 ){
                    idNumber.eq(i).addClass('form-error')
                } 
                else {
                    idNumber.eq(i).removeClass('form-error')
                }
            }

            // ------- you can't get less then 2000 Gel on fast loan page
            var fastLoanMoney = $('.fast-loan-money');
            if( fastLoanMoney.val() < 2000 ){
                fastLoanMoney.addClass('form-error');
                fastLoanMoney.val('2000');
            } else {
                fastLoanMoney.removeClass('form-error');
            }

            // ------- you can't get less then 1000 Gel on consumer loan page
            var consumerLoanMoney = $('.cunsumer-loan-money');
            if( consumerLoanMoney.val() < 1000 ){
                consumerLoanMoney.addClass('form-error');
                consumerLoanMoney.val('1000');
            } else {
                consumerLoanMoney.removeClass('form-error');
            }

            // --------- add error class radion buttons only we choose -------------------------------------------------------------------
            if( $('.fill-form-input-up-box-right-side').css('display') == 'none'  ){
                $('.fill-form-input-up-box-right-side input').removeClass('form-error');
            } 
            if( $('.fill-form-radio-botton-left-side-box ').css('display') == 'none'  ){
                $('.fill-form-radio-botton-left-side-box  input').removeClass('form-error');
            } 

            // ---------- stop function if error is active
            if( $('input').hasClass('form-error') ){
                event.preventDefault()
            }


             // -------- reCaptcha eror contact page
            if(document.getElementById('re_captcha_test') != null) {
                var response = grecaptcha.getResponse();
                if(response == ""){
                    $('.g-recaptcha').css('border', '1px solid red')
                    // if( $('.recaptcha-checkbox-border').css('display') == 'none' ){ alert() }
                    event.preventDefault()
                } else {
                    $('.g-recaptcha').css('border', 'none')
                }
            }


        })
    })


// ------------------- check loans form on key up

    // ------- check input length  -------------------------------------------------------------------------------------------
    $('.fill-loan-main-box :input').each(function(){
        var input = $(this);
        input.keyup(function(){
            if( input.val().length < 2){
                $(this).addClass('form-error');
            } else {
                $(this).removeClass('form-error');
            }
        })
    })

    // --------- check id number
    $(idNumber).keyup(function(){
            if( $(this).val().length != 11 ){
                $(this).addClass('form-error')
            } 
            else {
                $(this).removeClass('form-error')
            }
    })

    // check input type number that users can't type "e"
    $('.form-phone-number').keydown(function(){
        return event.keyCode !== 69;
    })

    // ------- you can't get less then 2000 Gel on fast loan page
    var fastLoanMoney = $('.fast-loan-money');
    $(fastLoanMoney).keyup(function(){
        if( fastLoanMoney.val() < 2000 ){
            fastLoanMoney.addClass('form-error');
        } else {
            fastLoanMoney.removeClass('form-error');
        }
    })

    // ------- you can't get less then 1000 Gel on consumer loan page
    var consumerLoanMoney = $('.cunsumer-loan-money');
    $(consumerLoanMoney).keyup(function(){
        if( consumerLoanMoney.val() < 1000 ){
            consumerLoanMoney.addClass('form-error');
        } else {
            consumerLoanMoney.removeClass('form-error');
        }
    })

    // ---------- select currency 
    $('.fill-form-select-main-box').click(function(){
        var inputValue = $('#valuta_value');
        var currentValue = $('.fill-form-select-text-active').attr('data-select-currency');
        inputValue.val(currentValue);
    })


// -------------------------------- check calculator field

    // var calcInputNumber = $('.calculatorInput-number');
    //     for(let i = 0; i < calcInputNumber.length; i++){
    //         setInputFilter(calcInputNumber[i], function(value) {
    //             return  /^\d*$/.test(value) && (value === "" || parseInt(value) <= 310000000000); 
    //         });
    //     }
        
    // ---------- check on click
    $('#startToCalculate').on('click', function(event){
       $('.calculatorInput').each(function(){
        var calcInput = $(this);
        if(calcInput.val() < 0.1){
            calcInput.css('border', '1px solid red ')
            event.preventDefault()
        } else {
            calcInput.css('border', 'none');
        }
       })
    })

    // ---------- check on keyup
    $('.calculatorInput').keyup(function(event){
        $('.calculatorInput').each(function(){
            var calcInput = $(this);
            if(calcInput.val() < 0.1){
                calcInput.css('border', '1px solid red ')
                event.preventDefault()
            } else {
                calcInput.css('border', 'none')
            }
        })
    })

    
    function rs(){
        if(window.matchMedia('(max-width: 1000px)').matches){
            $('.headerLanguageContent').on('click', function(){
                $(this).toggleClass('header-change-height');
                $('.languageArrow').toggleClass('languageArrow-rotate');
                $('.headerLanguageContent a.active').toggleClass('active-black-for-mobile')
            });
        }
    }
    rs()
    $( window ).resize(function() {
        rs()
    });
    
  

}) // -------------- end jquery    


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

try {
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
} catch (error) {
    
}


// ------------------------------------- google map Contact Page
    // -------------- Initialize and add the map
    function initMap() {
        var options = {
            zoom: 8,
            center: {
                lat:42.3601,
                lng:-71.0589
            }
        }
        var map = new 
        google.maps.Map(document.getElementById('map'), options);

        //  // -------- add marker
        //  var marker = new google.maps.Marker({
        //      position: {lat:42.4668, lng:-70.9495},
        //      map:map,
        //      icon: "https://cdn.webshopapp.com/shops/16738/files/43789804/50x50x2/beach-flag-convex.jpg"
        //  });

        //  var infoWindow = new google.maps.InfoWindow({
        //      content: '<h1> Zato </h1>'
        //  });

        //  marker.addListener('click', function(){
        //      infoWindow.open(map, marker);
        //  });

        // --------- array of markers
        var markers = [
            {
                coords: {lat:42.4668, lng:-70.9495},
                iconImg: 'https://cdn.webshopapp.com/shops/16738/files/43789804/50x50x2/beach-flag-convex.jpg',
                content: '<h1>Zato</h1>',
            },
            {
                coords: {lat:42.8584, lng:-70.9300}
            },
            {
                coords: {lat:42.7762, lng:-71.0773}
            }
        ]

        // -------- loop through markers
        for(let i = 0; i < markers.length; i++){
            addMarker(markers[i]);
        }

        // -------- add marker function
        function addMarker(props){
            var marker = new google.maps.Marker({
                    position: props.coords,
                    map:map,
                    //  icon: props.iconImg
                });
            // ---- check for customicon
            if(props.iconImg){
                // ----- set icon image
                marker.setIcon(props.iconImg);
            }

            // ----- check content popup
            if(props.content){
                var infoWindow = new google.maps.InfoWindow({
                        content: props.content
                    });
                    marker.addListener('click', function(){
                        infoWindow.open(map, marker);
                    });
            }
        } 
    }



