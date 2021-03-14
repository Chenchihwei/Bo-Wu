<?php
    // include("../Lib/UtilClass.php");
    // $Util = new UtilClass();
    include('../Conn.php');
    

    //建立SQL
    $sql = "SELECT * FROM postcard WHERE postcard_exhibition = 1 and postcard_category = ?";

    //執行
    // $statement = $Util->getPDO()->prepare($sql);
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $_POST["postcard_category"]);
    $statement->execute();
    $data = $statement->fetchAll();

    $imgUrl = "";
    foreach($data as $index => $row){
        $imgUrl = $row["postcard_img_path"];
        echo'<li><img src="'.$imgUrl.'" alt=""></li>';
    };


?>