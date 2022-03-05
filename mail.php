<?php
$email    =$_POST['email'];
$to       ="asma2_kamal2009@yahoo.com";
$subject  ="support";
$message  ="email:".$email;
$headers  ="from:".$email;
mail($to, $subject, $message, $headers);
?>


