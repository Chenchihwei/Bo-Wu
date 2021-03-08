<?php
include('../Conn.php');
$verify_id = $_POST["verify_id"];
$verify_status = $_POST["verify_status"];

$sql = "SELECT w.work_id ,m.name, m.email 
        FROM
            work w
            join member m
            on w.member_id = m.member_id
        WHERE w.work_id = ?";

$statement = $pdo->prepare($sql);
$statement -> bindValue(1, $verify_id);    
$statement->execute();    

//抓出全部且依照順序封裝成一個二維陣列
$data = $statement->fetchAll();


$name = $data[0][1];
$email = $data[0][2];


if($verify_status == 1){
    $status = '審核成功';
}else{
    $status = '審核失敗';
};

require("../PHPMailer-master/src/PHPMailer.php");
require("../PHPMailer-master/src/SMTP.php");
require("../PHPMailer-master/src/Exception.php");
// require_once("./PHPMailer-master/src/PHPMailer.php"); //記得引入檔案 
$mail = new PHPMailer\PHPMailer\PHPMailer();
// $mail->Charset='UTF-8';
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

$mail->setFrom('fubycena@gmail.com', 'BoWu_meseum'); //寄件的Gmail
$mail->addAddress($email, $email); // 收件的信箱
$mail->isHTML(true); // Set email format to HTML

/*
    內文
*/


$mail->Subject = '=?utf-8?B?'.base64_encode('來自BoWu的展品審核通知').'?=';
// $mail->Subject = 'this mail is from bowu';
$mail->CharSet = 'UTF-8';
$mail->Body = "$name 您好!<br>您的展品ID:$verify_id<br>審核狀態:$status";
$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

if(!$mail->send()) {
 echo 'Message could not be sent.';
 echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
 echo 'Message has been sent';
}


?> 
