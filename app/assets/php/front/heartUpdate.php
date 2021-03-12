<?php
    include("../Lib/UtilClass.php");
    $Util = new UtilClass();

    //建立SQL
    $sql = "UPDATE work SET like_num = ? WHERE work_id = ?";

    //執行
    $statement = $Util->getPDO()->prepare($sql);
    $statement->bindValue(1, $_POST["like_num"]);
    $statement->bindValue(2, $_POST["work_id"]);
    $statement->execute();
?>
