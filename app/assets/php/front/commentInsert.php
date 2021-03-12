<?php
    include("../Lib/UtilClass.php");
    $Util = new UtilClass();

    //建立SQL
    $sql = "INSERT INTO work_message (message_id, work_id, message_text, member_id, message_time, message_port, message_show) 
    VALUES (?, ?, ?, ?, now(), '1', '1')";

    //執行
    $statement = $Util->getPDO()->prepare($sql);
    //時間
    $NowTime=date("Y-m-d H:i:s");
    //給值
    $statement->bindValue(1, strtotime("$NowTime,now"));
    $statement->bindValue(2, $_POST["work_id"]);
    $statement->bindValue(3, $_POST["message_text"]);
    $statement->bindValue(4, $_POST["member_id"]);
    $statement->execute();
?>
