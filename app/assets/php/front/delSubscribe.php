<?php
    include("../Lib/UtilClass.php");
    $Util = new UtilClass();

    //建立SQL
    $sql = "DELETE FROM subscripition WHERE subscripition_id = ?";

    //執行
    $statement = $Util->getPDO()->prepare($sql);
    //給值
    $statement->bindValue(1, $_POST["subscripition_id"]);
    $statement->execute();
?>