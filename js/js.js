/*global $*/
$(function () {
    "use strict";
    var $link = $('#nav a'),
        $link1=$('.secondbtn'),
        $linkToggle = $('.link-toggle'),
        $toggledDiv = $('.toggled-div'),
        $wrapper = $('.wrapper');
    /* Menu Toggle */
    $linkToggle.on('click', function () {
        var $currLink = $(this),
            divClass = ('.'+$(this).attr('id'));
        $linkToggle.removeClass('active');
        $currLink.addClass('active');
        $toggledDiv.addClass('nondisp');
        
        var mySelected = $wrapper.find(divClass);
        mySelected.removeClass('nondisp');
        
    });
    
    //change background image
     $linkToggle.on('click', function () {
     var id = $(this).attr('id');
        switch(id) {
        case 'first': 
            $('.menu').css('background-image','url(../pic/antipasti.png)');
            break;
       case 'second': 
            $('.menu').css('background-image','url(../pic/cream.png)');
            break;       
       case 'third': 
            $('.menu').css('background-image','url(../pic/inslat.png)');
            break;
        case 'fourth': 
            $('.menu').css('background-image','url(../pic/pasta.png)');
            break;
        case 'fifth': 
            $('.menu').css('background-image','url(../pic/Risotti.png)');
            break;
        case 'sixth': 
            $('.menu').css('background-image','url(../pic/Piatto.png)');
            break;        
         case 'seventh': 
            $('.menu').css('background-image','url(../pic/dolci.png)');
            break; 
          case 'eighth': 
            $('.menu').css('background-image','url(../pic/pizzort-1.png)');
            break;        
        default:
             $('.menu').css('background-image','url(../pic/antipasti.png)');
    } 
         
      
    });
    
    /* Smooth Scroll for link*/
    $link.on('click', function (event) {
        if (this.hash !== "") {
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
    //smoth scroll for link1
  $link1.on('click', function (event) {
        if (this.hash !== "") {
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
    // start testmonial
     (function autoSlider() {
        
        $('.slider .active').each(function () {
           
            if (!$(this).is(':last-child')) {
                
                $(this).delay(6000).fadeOut(2000, function () {
                   
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    
                    autoSlider();
                });
                
            } else {
                
                $(this).delay(3000).fadeOut(2000, function () {
                    
                    $(this).removeClass('active');
                    
                    $('.slider div').eq(0).addClass('active').fadeIn();
                    
                    autoSlider();
                });  
            } 
        }); 
    }());

    // start magnificpopup
    $('.zoom-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}	
});
    
    $('.popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
    // start parallax
  $('.parallax-window').parallax({imageSrc: '/path/to/image.jpg'});  
    
    $link.on("click", function() {
        if ($(".navbar-toggle").css("display") !== "none"){
           $(".navbar-toggle").trigger("click"); 
        }
    });
    // start scroll
     var scrolltop=$('.scroll-top');
            
   $(window).scroll(function(){
       if($(this).scrollTop()>=700){
         scrolltop.show();   
       }
       else{
         scrolltop.hide();    
       }
   });         
   scrolltop.click(function(){
       $('html,body').animate({ scrollTop : 0 }, 600);
   });
    //start aos animated
    AOS.init();
    
    // send message 
    $('#sub').on("click",function(event) {
   event.preventDefault();
 var formData = $('#email').serialize();
  $.ajax({url: $('#subscribe').attr('action'),
        type:"POST",
        data: formData,
      success: function(data) {
         $('#submessage').text('Thanks For Your Subscribe.').css("color", "#039b3b");
      },
      error: function() {
         $('#submessage').text('Sorry Please Try Again.').css("color", "#f00");
      }
   });
});   
});
function initMap() {
var myLatLng = {lat: 59.348431, lng: 18.205176};

var map = new google.maps.Map(document.getElementById('map'), {
zoom: 4,
center: myLatLng
});

var marker = new google.maps.Marker({
position: myLatLng,
map: map,

});
}