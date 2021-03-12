<?php
    include("../Lib/UtilClass.php");
    $Util = new UtilClass();

    //建立SQL
    $sql = "select * 
    from work w
     join work_message wm
        on w.work_id = wm.work_id
     join member m
        on wm.member_id = m.member_id
        where w.work_id = ? and wm.message_show = 1";

    //執行
    $statement = $Util->getPDO()->prepare($sql);
    $statement->bindValue(1, $_POST["work_id"]);
    $statement->execute();
    $data = $statement->fetchAll();

    echo json_encode($data); 
?>

