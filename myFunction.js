

jQuery(document).ready(function(){
    jQuery(".item1").hide();
    jQuery(".input").click(function(){
        jQuery(".item1").slideToggle();

        
    })
    jQuery(".item2").hide();
    jQuery(".input2").click(function(){
        jQuery(".item2").slideToggle();
    })

    jQuery(".item3").hide();
    jQuery(".input3").click(function(){
        jQuery(".item3").slideToggle();
    })


    jQuery(".item4").hide();
    jQuery(".input4").click(function(){
        jQuery(".item4").slideToggle();
    })


    jQuery(".item5").hide();
    jQuery(".input5").click(function(){
        jQuery(".item5").slideToggle();
    })


    jQuery(".item6").hide();
    jQuery(".input6").click(function(){
        jQuery(".item6").slideToggle();
    })


    jQuery(".item7").hide();
    jQuery(".input7").click(function(){
        jQuery(".item7").slideToggle();
    })


    jQuery(".item8").hide();
    jQuery(".input8").click(function(){
        jQuery(".item8").slideToggle();
    })

    jQuery(".item9").hide();
    jQuery(".input9").click(function(){
        jQuery(".item9").slideToggle();
    })

    
    jQuery(".item10").hide();
    jQuery(".input10").click(function(){
        jQuery(".item10").slideToggle();
    })
 
    jQuery(".form").hide();
    var followClicked1 =false;
    var chooseClicked1= false;
    $(".button").click(function(){
        followClicked1 =true;
        showForm();
    });
    $(".select").click(function(){
        chooseClicked1 =true;
        showForm();
    });

    function showForm(){
        if(followClicked1&&chooseClicked1){
            $(".form").slideToggle();
        }
    }
    document.addEventListener('DOMContentLoaded', (event) => {
        generateCaptcha();
    });
    
    function INFO_FORM() {
        const fullName = document.getElementById('fullName').value;
        const SELLERNUMBER = document.getElementById('SELLERNUMBER').value;
        const Birthday = document.getElementById('Birthday').value;
        const MobileNumber = document.getElementById('MobileNumber').value;
        const email = document.getElementById('email').value;
        const captcha = document.getElementById('captcha').value;
        const captchaValue = document.getElementById('captchaContainer').dataset.value;
    
     const fullName1= /^[\u0600-\u06FF\s]+$/;
        if (!fullName1.test(fullName)) {
            alert('   الاسم يجب ان يكون باللغه العربيه فقط   .');
            return false;
        }
    
        const SELLERNUMBERPattern= /^\d{2}-\d{6}-\d{3}$/;
        if (!SELLERNUMBERPattern.test(SELLERNUMBER)) {
            alert(' الرقم الوطني غير معروف');
            return false;
        }
    
        const BirthdayPattern= /^\d{2}-\d{2}-\d{4}$/;
        if (!BirthdayPattern.test(Birthday)) {
            alert('يرجى كتابة تاريخ الميلاد بشكل صحيح');
            return false;}

            const MobileNumberPATTERN = /^09[1-9]\d{7}$/;
            if (!MobileNumber.test(mobile)) {
                alert("رقم الموبايل غير صالح");
                return false;
            }
        
            
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert('لم يتم التعرف على الايميل');
                return false;
            }
        
            
      
        }   }  
    
    
);
