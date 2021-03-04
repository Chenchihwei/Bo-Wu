<?php
    include('../Conn.php');

    $message_id = $_POST["message_id"];
    $message_show = $_POST["message_show"];


    $sql = "UPDATE work_message SET message_show = ? WHERE message_id = ?";



    $statement = $pdo->prepare($sql);
    $statement->bindValue(1 , $message_show);         
    $statement->bindValue(2 , $message_id);         
    $statement->execute();  
?>
