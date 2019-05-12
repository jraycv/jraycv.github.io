<?php
	
	$userName = $_POST["name"];
    $userEmail = $_POST["email"]; 
    $userMessage = $_POST["message"];  
    
    if($userName != "" ||  $userEmail != "" || $userMessage !=""){
	   
	
		$to = "hello@jraycv.com";
		
		$subject = stripslashes('New! Message from your site.');
		
		
		$body = '
		
		<!DOCTYPE html>
		
		<html>
		<head>
		<title></title>
		</head>
		
		<body>
		
		<div style="margin:10px; background-color:#ccc; color:#333; padding:10px; font-size:14px; font-weight:bold;">New! Message from your site.</div>
		
		
		<div style="margin:5px 10px;">Name: '.$userName.'</div>
		<div style="margin:5px 10px;">Email: '.$userEmail.'</div>
		<div style="margin:5px 10px;">Message: '.$userMessage.'</div>
		
		
		<div style="margin:10px 10px; background-color:#ccc; padding:10px; font-size:10px; color:#333;">&copy; 2019  JRAYCV</div>
		
		
		</body>
		</html>
		
		';
		
		mail($to, $subject, $body, "From:$userName <$userEmail> \r\n"."MIME-Version: 1.0\n"."Content-type: text/html; charset=iso-8859-1");
		
		
	}else{
		
		echo "hey!";
		
	}

?> 


