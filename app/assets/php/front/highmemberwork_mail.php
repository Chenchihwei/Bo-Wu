<?php
include('../Conn.php');
$member_id = $_POST["member_id"];

$sql = "SELECT x.name,s.subscribed_id ,m.name as send_name, m.email ,s.fans_id
        FROM
            subscripition s
            left join member x
            on x.member_id = s.subscribed_id
            join member m
            on s.fans_id = m.member_id
        WHERE s.subscribed_id = ?";

$statement = $pdo->prepare($sql);
$statement -> bindValue(1, $member_id);    
$statement->execute();    

//抓出全部且依照順序封裝成一個二維陣列
$data = $statement->fetchAll();

    require("../PHPMailer-master/src/PHPMailer.php");
    require("../PHPMailer-master/src/SMTP.php");
    require("../PHPMailer-master/src/Exception.php");
    // require_once("./PHPMailer-master/src/PHPMailer.php"); //記得引入檔案 

foreach($data as $index => $row){
    $name = $row["name"];
    $fansName = $row["send_name"];
    $email = $row["email"];
    
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


    $mail->Subject = '=?utf-8?B?'.base64_encode('來自BoWu的展品上架通知').'?=';
    // $mail->Subject = 'this mail is from bowu';
    $mail->CharSet = 'UTF-8';
    $mail->Body = "$fansName 您好!<br>您的訂閱對象$name<br>有新作品上線";
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
    } else {
    echo 'Message has been sent';
    }
}



?> 