<?php
    include("../Lib/UtilClass.php");
    $Util = new UtilClass();
    //建立SQL
    $sql = "SELECT * FROM subscripition WHERE fans_id = ? and subscribed_id = ?";

    //執行
    $statement = $Util->getPDO()->prepare($sql);

    //給值
    $statement->bindValue(1, $_POST["fans_id"]);
    $statement->bindValue(2, $_POST["subscribed_id"]);
    $statement->execute();
    $data = $statement->fetchAll();

    $subscripition_id = "";
    foreach($data as $index => $row){
        $subscripition_id = $row["subscripition_id"];
    }

    //判斷是否有註冊重複
    if($subscripition_id == ""){
        echo "0"; 
    }else{
        echo "1"; 
    }
?>
    

    