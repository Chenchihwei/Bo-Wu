<?php
    include("../Lib/UtilClass.php");
    $Util = new UtilClass();

    //建立SQL
    $sql = "SELECT * FROM work 
    JOIN member
    ON work.member_id = member.member_id
    where work.member_id = ? and work.exhibition = 1 and work.verify = 1";

    //執行
    $statement = $Util->getPDO()->prepare($sql);
    $statement->bindValue(1, $_POST["member_id"]);
    $statement->execute();
    $data = $statement->fetchAll();

    echo json_encode($data);
?>

