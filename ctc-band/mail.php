<?php
if($_POST)
{
	$to_Email   	= "info@ctc-band.com"; //Replace with recipient email address
	$subject        = 'Anfrage von Homepage'; //Subject line for emails
	
	
	//check if its an ajax request, exit if not
    if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
	
		//exit script outputting json data
		$output = json_encode(
		array(
			'type'=>'error', 
			'text' => 'Request must come from Ajax'
		));
		
		die($output);
    } 
	
	//check $_POST vars are set, exit if any missing
	if(!isset($_POST["email"]) || !isset($_POST["message"]))
	{
		$output = json_encode(array('type'=>'error', 'text' => 'Input fields are empty!'));
		die($output);
	}

	//Sanitize input data using PHP filter_var().
	$user_Email       = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
	$user_Message     = filter_var($_POST["message"], FILTER_SANITIZE_STRING);
	
	//additional php validation
	
	if(!filter_var($user_Email, FILTER_VALIDATE_EMAIL)) //email validation
	{
		$output = json_encode(array('type'=>'error', 'text' => 'Wie sollen wir dich erreichen wenn du keine richtige Mailadresse angibst :,('));
		die($output);
	}
	if(strlen($user_Message)<5) //check emtpy message
	{
		$output = json_encode(array('type'=>'error', 'text' => 'Deine Nachricht war zu kurz Spam uns nicht zu ;)'));
		die($output);
	}
	
	//proceed with PHP email.
	$headers = 'From: '.$user_Email.'' . "\r\n" .
	'Reply-To: '.$user_Email.'' . "\r\n" .
	'X-Mailer: PHP/' . phpversion();
	
	$sentMail = @mail($to_Email, $subject, $user_Message, $headers);
	
	if(!$sentMail)
	{
		$output = json_encode(array('type'=>'error', 'text' => 'Die Mail konnte nicht versendet werden Serverfehler :('));
		die($output);
	}else{
		$output = json_encode(array('type'=>'message', 'text' => 'Danke für deine Anfrage :)'));
		die($output);
	}
}
?>