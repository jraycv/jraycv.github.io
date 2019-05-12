window.addEventListener("load", function(){
	
	"use strict";
	
	orientDetect();
	
	$('html, body').animate({scrollTop:0},400);
	
	$("#currentYear").html((new Date).getFullYear());
	
	
	$("#container").animate({opacity:1},400,function(){
		$('header a').each(function( index ) {
			$(this).delay( index * 400 ).animate({opacity:"1"},400);
		});
	});
	
	
})

$(window).resize(function(){

	"use strict";
	
	orientDetect();
	
});

$(window).scroll(function () {

    var windscroll = $(window).scrollTop();

    if (windscroll >= 10) {
	    
        $('section').each(function (i) {
	        
            var index = i + 1;
            
            if ($(this).position().top <= windscroll - $(this).height()/4) {
	            
	            $("header").addClass('morph');
	            	            
                $('nav a').removeClass('active');
                $('nav a').eq(index).addClass('active');
            }
            
        });
        
    } else {
	    
		if(!$('nav').hasClass('mobile')){
		
			$("header").removeClass('morph');
		
		}else{
		
			$("header").addClass('morph');
		
		}
	    
        $('nav a.active').removeClass('active');
        $('nav a:first').addClass('active');
    }
	

}).scroll();

function orientDetect(){
	
	"use strict";
	
    if ( $(window).width() <= 768 ){
		
		$('nav').hide();
		$('nav').addClass('mobile');
		
		$("#movable").insertBefore($("#barrier"));
		$("#static .qoute").insertBefore($("#orb"));
 

    }else{
	
		$('nav').show();
		$('nav').removeClass('mobile');
		
		$("#movable").insertAfter($("#static"));
		$("#static .qoute").insertAfter($("#orb"));
				
    }
    
}

var scroller = function(event){

    var loc = $.attr(this, 'href');
    
    if(loc !== ""){
	    
		$('nav a').removeClass("active");
		$(this).addClass("active");
		$('html, body').animate({scrollTop: $(loc).offset().top},800);
		
		event.preventDefault();
		
    }else{
	    console.log("real link click");
    }

	
};

$('nav a').click(scroller);

$('#embark a').click(scroller);

$('#menu').click(function(){
	
		$('nav.mobile').slideToggle(300);
	
});

$('nav a').click(function(){
	
	$('nav.mobile').slideUp(300);
	
});

$('#logo').click(function(event){
    $('html, body').animate({scrollTop: $("#embark").offset().top},800);
    event.preventDefault();
});

$("#download").click(function(){
	
	$("#download").addClass("fadeOutLeft");
	
	setTimeout(function(){
		$("#download").css("display","none");
		$("#cv-download").css("display","block");
		$("#cv-download").addClass("fadeInLeft");
		
	}, 800)
	
});


	
var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

var d = new Date();
var downloadDate = d.getFullYear() + "/" + (d.getMonth()+1) + "/" + d.getDate();

$('#submitDownload').click(function() {
	
	var email = $("#cv_download").val();
	
	var errorMsg = $("#cv-download .validation-msg");
	
	if(email == ""){
	
		errorMsg.show();
		errorMsg.addClass("error");
		errorMsg.text("*Please enter your email.");
		
	}else if(!regex.test(email)){
		
		errorMsg.show();
		errorMsg.addClass("error");
		errorMsg.text("*Please enter a valid email.");
		
	}else{

		var data = {
			userEmail : email,
			downloadDate:downloadDate
		}
		
		//console.log(data);
		var databaseRef = firebase.database().ref('emails');
		
		databaseRef.push(data);
		
		errorMsg.show();
		errorMsg.addClass("success");
		errorMsg.text("Success' Download will begin shortly...");
		
			
		window.open('./inc/download.php?email='+email,'_self');

			
		}
});


$('#submitForm').click(function(e) {
	
	var userName = $("#user_name").val();
	var userEmail = $("#user_email").val();
	var userMsg = $("#user_message").val();
	
	var errorMsg = $("#form .validation-msg");
	
	if(userName == "" || userEmail == "" || userMsg == ""){
	
		errorMsg.show();
		errorMsg.addClass("error");
		errorMsg.text("*All fields are required.");	
		
	}else if(!regex.test(userEmail)){
		
		errorMsg.show();
		errorMsg.addClass("error");
		errorMsg.text("*Please enter a valid email.");
		
	}else{
		
		$(this).attr("disabled", true);
		
		$.ajax({
	        type: 'POST',
	        url: './inc/send.php',
	        data: {
	           name:userName,
	           email:userEmail,
	           message:userMsg
	        },
	        success: function(data) {
		        
		        console.log(data);
		        
				errorMsg.show();
				errorMsg.addClass("success");
				errorMsg.html("Thank you! <br> Your message has been sent successfully.");
				
				$(this).attr("disabled", false);
				
	        }               
	    });
		
	}

    
});



const worksData = [
  {
    title: "CSS Brio",
    subTitle: "Google Chrome Extension",
    poster: "assets/img/works/css-brio.jpg",
    link:"https://css-brio.github.io/",
    linkTitle:"Visit Site",
    description:"CSS Brio is a fast CSS Animation viewer and CSS code provider for Designers. My goal here is to help designers try animations on their projects by giving them ready to use CSS animations provided by animate CSS. They just need to put the id or class of the object they want to animate and choose from the drop down options the animation they want and instantly it will give them a preview of the animation as well with the CSS code. They can again preview the animation by pressing the preview button and to copy the animation just press the copy button and paste the code on their project."
  },
  {
    title: "Mirth Point",
    subTitle: "Gaming Portal",
    poster: "assets/img/works/mirthpoint.jpg",
    link:"https://www.mirthpoint.com/",
    linkTitle:"Visit Site",
    description:"Mirth Point is a gaming portal where everyone can enjoy playing html5 games. This gaming portal can be played in Desktop, Tablets, and smartphones. My goal here is to use PULSE CMS system to make an arcade website that I can easily manage and update. I also created some custom add-ons to make the game display area and game filtering which currently not available in Pulse add-ons."
  }

];

function worksTemplate(data) {
  return ` 	
		<div class="row">
		
			<div class="col-2">
			
				<div class="content">
				
					<img src="${data.poster}" alt="${data.title}">
				
				</div>
			
			</div>
							
			<div class="col-2">
			
				<div class="content align-left">
				
					<div class="workTitle">${data.title}</div>
					
					<div class="workSubTitle">${data.subTitle}</div>
					
					<div class="workDescription">${data.description}</div>
					
					<a href="${data.link}" target="_blank" class="btn">${data.linkTitle}</a>
				
				</div>
			
			</div>
							
		</div>

  `;
}

document.getElementById("personalWorks").innerHTML = `${worksData.map(worksTemplate).join("")}`;





