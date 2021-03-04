<?php
    include('../Conn.php');

    $edit_id = $_POST["edit_id"];
    $edit_name = $_POST["edit_name"];
    $edit_category = $_POST["edit_category"];

    switch ($edit_category) {
        case "背景":
            $edit_category = '1';
        break;
        case "圖樣":
            $edit_category = '2';
        break;
        default:
            $edit_category = '錯誤';
    };

    $sql = "UPDATE postcard SET postcard_name = ?, postcard_category = ? WHERE postcard_id = ?";


    $statement = $pdo->prepare($sql);
    $statement->bindValue(1 , $edit_name);      
    $statement->bindValue(2 , $edit_category);    
    $statement->bindValue(3 , $edit_id);    
    $statement->execute();  
?>