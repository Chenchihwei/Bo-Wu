<?php
    include('../Conn.php');

    //連線開始


    $_POST =json_decode(file_get_contents("php://input",true));// axios post做轉換
    $work_id = 1 ;
    $member_id = $_POST->member_id;
    $messages = $_POST->messages;
    $time = '2021-03-21 12:00:00';
    $messageshow = 1;
    $sql2 = "INSERT INTO `team3`.`bidding_message` (`work_id`, `member_id`, `bidding_messages`,`message_time`,`message_show`) VALUES (:work_id, :member_id, :messages,:time,:messageshow)";
    $messageList = $pdo->prepare($sql2);
    $messageList->bindValue(':work_id',$work_id);
    $messageList->bindValue(':member_id',$member_id);
    $messageList->bindValue(':messages',$messages);
    $messageList->bindValue(':time',$time);
    $messageList->bindValue(':messageshow',$messageshow);

    $messageList->execute();
?>