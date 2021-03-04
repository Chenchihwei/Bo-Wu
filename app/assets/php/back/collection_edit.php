<?php
    include('../Conn.php');

    $edit_id = $_POST["edit_id"];
    $edit_name = $_POST["edit_name"];
    $edit_produce = $_POST["edit_produce"];
    $subject = $_POST["subject"];


    $sql = "UPDATE work SET work_name = ?, work_introduce = ? WHERE work_id = ?";







    $statement = $pdo->prepare($sql);
    $statement->bindValue(1 , $edit_name);      
    $statement->bindValue(2 , $edit_produce);    
    $statement->bindValue(3 , $edit_id);    
    $statement->execute();  
?>
