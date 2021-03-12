<?php
    include("../Lib/UtilClass.php");
    $Util = new UtilClass();

    //建立SQL
    $sql = "INSERT INTO subscripition (subscripition_id, fans_id, subscribed_id) VALUES (?, ?, ?);";

    //執行
    $statement = $Util->getPDO()->prepare($sql);
    //時間
    $NowTime=date("Y-m-d H:i:s");
    //給值
    $statement->bindValue(1, strtotime("$NowTime,now"));
    $statement->bindValue(2, $_POST["fans_id"]);
    $statement->bindValue(3, $_POST["subscribed_id"]);
    $statement->execute();

    echo strtotime("$NowTime,now");
?>