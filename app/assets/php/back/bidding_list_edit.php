<?php
    include('../Conn.php');

    $edit_id = $_POST["edit_id"];
    $edit_price = $_POST["edit_price"];
    $edit_time = $_POST["edit_time"];


    $sql = "UPDATE bidding_list SET start_price = ?, now_price = ?, bidding_time = ? WHERE work_id = ?";


    $statement = $pdo->prepare($sql);
    $statement->bindValue(1 , $edit_price);        
    $statement->bindValue(2 , $edit_price);        
    $statement->bindValue(3 , $edit_time); 
    $statement->bindValue(4 , $edit_id); 
    $statement->execute();  
?>
