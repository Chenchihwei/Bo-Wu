<?php

$your_mail = $_POST['your_mail'];
$base64 = $_POST['base64'];
require("../PHPMailer-master/src/PHPMailer.php");
require("../PHPMailer-master/src/SMTP.php");
require("../PHPMailer-master/src/Exception.php");
// require_once("./PHPMailer-master/src/PHPMailer.php"); //記得引入檔案 
$mail = new PHPMailer\PHPMailer\PHPMailer();
$mail->Charset='UTF-8';
$mail->SMTPOptions = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
);
//$mail->SMTPDebug = 3; // 開啟偵錯模式
$mail->isSMTP(); // Set mailer to use SMTP
$mail->SMTPDebug =1; // debugging: 1 = errors and messages, 2 = messages only
$mail->Host = 'smtp.gmail.com'; // Specify main and backup SMTP servers
$mail->SMTPAuth = true; // Enable SMTP authentication
$mail->Username = 'fubycena@gmail.com'; // SMTP username
$mail->Password = '22524968'; // SMTP password
$mail->SMTPSecure = 'tls'; // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587; // TCP port to connect to

$mail->setFrom('fubycena@gmail.com', 'From BoWu'); //寄件的Gmail
$mail->addAddress($your_mail, $your_mail); // 收件的信箱
$mail->isHTML(true); // Set email format to HTML

/*
    內文
*/
$mail->Subject = '=?utf-8?B?'.base64_encode('來自BoWu的祝福明信片').'?=';
// $mail->Subject = 'this mail is from bowu';
$mail->Body = "hello I'am fine</b>";
$base64 = $_POST['base64'];
$resource = base64_decode(str_replace(" ", "+", substr($base64, strpos($base64, ","))));
$mail->addStringAttachment($resource, "Filename.png");
$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

if(!$mail->send()) {
 echo 'Message could not be sent.';
 echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
 echo 'Message has been sent';
}


?> 
