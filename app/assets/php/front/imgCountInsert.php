<?php
    include("../Lib/UtilClass.php");
    $Util = new UtilClass();

    //建立SQL
    $sql = "UPDATE `team3`.`work` SET `visitors` = ? WHERE (`work_id` = ?)";

    //執行
    $statement = $Util->getPDO()->prepare($sql);
    $statement->bindValue(1, $_POST["visitors"]);
    $statement->bindValue(2, $_POST["work_id"]);
    $statement->execute();

?>