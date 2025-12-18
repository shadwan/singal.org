(function($) {
    "use strict"; 
    $.fn.extend({
        toggleText: function(a, b) {
            return this.html(this.html() == b ? a : b);
        }
    });
    $('.image-container img:not(.edu)').hide();

    //* Navbar Fixed  
    function navbarFixed(){
        if ( $('.bg-light').length ){ 
            $(window).on('scroll', function() {
                var scroll = $(window).scrollTop();   
                if (scroll >= 100) {
                    $(".bg-light").addClass("navbar_fixed");
                } else {
                    $(".bg-light").removeClass("navbar_fixed");
                }
            });
        };
    };  

    navbarFixed (); 
    
    $(document).ready(function(){
        $(".more-story").hide();
        $(".sent").hide();
        $(".oops").hide();
        
        $(".show-story").click(function(){
            $(".more-story").show();
            $(".show-story").hide();
        });
      
        $.urlParam = function(name){
          var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
          if (results === null) {
              return null;
          }
          return decodeURI(results[1]) || 0;
        }
        if ($.urlParam('thank-you') !== null) {
            $(".unsent").hide();
            $(".sent").show();
        }
        if ($.urlParam('oops') !== null) {
            $(".oops").show();
        }
        if (top.location.pathname === '/donate.html' || top.location.pathname === '/lurnrelieffund/') {
            var body = $('.image-container');
            var divHeight = $('.donate_area').outerHeight();
            var divTop= $('.navbar').outerHeight();
            body.css('top', divTop);
            body.css('height', divHeight - (divTop*2));
            
            window.isOnce = true;
            
            $(".donation-type").on('change', function(){
                var value = $( 'input[name=donation-type]:checked' ).val();
                if(value === 'once'){
                    isOnce = true;
                    $( "input[name='cmd']" ).val('_xclick');
                    $( "input[name='bn']" ).val('PP-BuyNowBF:btn_buynow_LG.gif:NonHosted');
                    $('.donation_btn h2 span').text(passAmount);
                }else if(value === 'monthly'){
                    isOnce = false;
                    $( "input[name='cmd']" ).val('_xclick-subscriptions');
                    $( "input[name='bn']" ).val('PP-SubscriptionsBF:btn_subscribeCC_LG.gif:NonHosted');
                    $('#donationForm').append('<input type="hidden" name="lc" value="US">');
                    $('#donationForm').append('<input type="hidden" name="no_note" value="1">');
                    $('#donationForm').append('<input type="hidden" name="src" value="1">');
                    $('#donationForm').append('<input type="hidden" name="p3" value="1">');
                    $('#donationForm').append('<input type="hidden" name="t3" value="M">');
                    $('#donationForm').append('<input type="hidden" name="a3" value="'+passAmount+'">');
                    $('.donation_btn h2 span').text('$'+passAmount+' Monthly');
                    /*$( "input[name='cmd']" ).val('_donations');
                    $( "input[name='bn']" ).val('PP-DonationsBF:btn_donateCC_LG.gif:NonHosted');*/
                    
                }
            });
            
            window.cause = "Education";
            $( "input[class*='cause-input']" ).val(cause);
            window.passAmount = '35.00';
        }
      
        $('.nav_tabs li').on('click', 'a', function () {
            var myClass = $(this).data("set");
            setTimeout(function() {
                $('.image-container img.'+myClass).show();
            }, 0);
            setTimeout(function() {
                $('.image-container img:not(.'+myClass+')').hide(0);
            }, 700);
            
            
            cause = $(this).text();
            $( "input[class*='cause-input']" ).val(cause);
        });
    });

    var owl = jQuery('#carousel');
    owl.owlCarousel({
        autoplay: true,
        lazyLoad: true,
        loop: true,
        margin: 20,
        responsiveClass: true,
        autoHeight: true,
        autoplayTimeout: 70000,
        smartSpeed: 500,
        stagePadding: 0,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },

            600: {
                items: 2
            },

            1024: {
                items: 3
            },

            1366: {
                items: 3
            },
            1921: {
                items: 4
            }
        }
    });
    // Custom Button
	
	//* Magnificpopup js
    function magnificPopup() {
        if ($('.video-popup').length) { 
            //Video Popup
            $('.video-popup').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false, 
                fixedContentPos: false,
            });   
        };
    };
	magnificPopup ();

    //* Click btn
    function clickBtn() {
        if ($('.click_btn').length) { 
            $('.click_btn .btn').click(function () {
                $('.click_btn .btn').removeClass("active");
                $(this).addClass("active");
                if(typeof passAmount !== "undefined" && typeof $(this).data('value') !== "undefined") {
                    if ($(this).data('value') === "custom"){
                        if (parseFloat($(this).val()) > 0){
                            passAmount = $(this).val();
                        }else {
                            passAmount = '0.00';
                        }
                        $(this).on("change paste keyup", function() {
                            var input = $(this).val();
                            passAmount = parseFloat(input).toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1");
                            if(isOnce){
                                $('.donation_btn h2 span').text('$'+passAmount);
                            } else {
                                $('.donation_btn h2 span').text('$'+passAmount+' Monthly');
                            }
                            $( "input[name='amount']" ).val(passAmount);
                            $( "input[name='a3']" ).val(passAmount);
                        });
                    } else {
                        passAmount = $(this).data('value');
                    }
                    if(isOnce){
                        $('.donation_btn h2 span').text('$'+passAmount);
                    } else {
                        $('.donation_btn h2 span').text('$'+passAmount+' Monthly');
                    }
                    $('input[name="amount"]').val(passAmount);
                    $( "input[name='a3']" ).val(passAmount);
                }
            });  
        }
    }
    clickBtn ();

    $("#donationForm").validate({
        rules: {
            first_name: "required",
            last_name: "required",
            os3: {
                required: true,
                email: true
            },
            country: "required",
            street: "required",
            city: "required",
            state: "required",
            zip: "required"
        },
        messages: {
            first_name: "Please enter your first name",
            last_name: "Please enter your last name",
            os3: "Please enter your email",
            country: "Please enter your country",
            street: "Please enter your street",
            city: "Please enter your city",
            state: "Please enter your state",
            zip: "Please enter your zip/postal code"
        },
        submitHandler: function(form) {
            var name = $("input[name=first_name]").val() + " " + $("input[name=last_name]").val()
            var address = $("input[name=street]").val() + "<br>" + $("input[name=city]").val() + " " + 
                        $("input[name=state]").val() + " " + $("input[name=zip]").val()  + "<br>" + 
                        $("input[name=country]").val();

            $("input[name=os1]").val(name);
            $("input[name=os2]").val(address);
            form.submit();
        }
    });

})(jQuery)