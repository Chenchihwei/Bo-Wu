<?php
    include('../Conn.php');

    $work_id = $_POST['work_id'];

    $sql = 'SELECT w.member_id, m.name, m.email, m.level
            FROM work w
                join member m
                on w.member_id = m.member_id 
            WHERE w.work_id = ?';
    $statement = $pdo->prepare($sql); 
    $statement-> bindValue(1, $work_id);    
    $statement->execute();  
    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll();
    $member_id = $data[0][0];
    $name = $data[0][1];
    $email = $data[0][2];
    $level = $data[0][3];
    // echo $member_id;
    // echo $name;

if($level == 2){

    $sql_num = 'SELECT `like_num`
            FROM work
            WHERE member_id = ?';
    $statement = $pdo->prepare($sql_num); 
    $statement-> bindValue(1, $member_id);    
    $statement->execute();  
    //抓出全部且依照順序封裝成一個二維陣列
    $data_num = $statement->fetchAll();
    // print_r($data_num);
    // echo count($data_num);
    
    $num_all = 0;
    for($i = 0; $i < count($data_num); $i++){
        // echo (int)$data_num[$i][0];
        $num_all += (int)$data_num[$i][0];
    };
    // echo $num_all;

    if( $num_all > 500 ){
        $sql_update_level = 'UPDATE member SET level = 1 WHERE member_id = ?';
        $statement = $pdo->prepare($sql_update_level); 
        $statement-> bindValue(1, $member_id);    
        $statement->execute();

        //撈出展間封面圖片
        $sql_imgpath = 'SELECT img_path
                        FROM work 
                        WHERE member_id = ? 
                        ORDER BY like_num DESC LIMIT 1';
        $statement = $pdo->prepare($sql_imgpath); 
        $statement-> bindValue(1, $member_id);    
        $statement->execute();
        $data_imgpath = $statement->fetchAll();

        $advance_id = date('mdHis');
        $imgpath = $data_imgpath[0][0];

        //新增展間資料表資料
        $sql_insert_advance = 'INSERT INTO advanced (advanced_id, member_id, advance_img_path) VALUES (?, ?, ?)';
        $statement = $pdo->prepare($sql_insert_advance); 
        $statement-> bindValue(1, $advance_id);    
        $statement-> bindValue(2, $member_id);    
        $statement-> bindValue(3, $imgpath);    
        $statement->execute();
        



                
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


        $mail->Subject = '=?utf-8?B?'.base64_encode('來自BoWu的升級通知').'?=';
        // $mail->Subject = 'this mail is from bowu';
        $mail->CharSet = 'UTF-8';
        $mail->Body = "$name 您好!<br>您的作品總按讚數超過500,已升級為高級會員!已為您開設個人展間";
        $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

        if(!$mail->send()) {
        echo 'Message could not be sent.';
        echo 'Mailer Error: ' . $mail->ErrorInfo;
        } else {
        echo 'Message has been sent';
        }


    }else{

    };
}else{
    // echo "已經是高級會員";
}
?>
