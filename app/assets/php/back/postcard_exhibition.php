<?php
    include('../Conn.php');
    $work_id = $_POST["work_id"];
    $exhibition_status = $_POST["exhibition_status"];

    
    $sql = "UPDATE postcard SET postcard_exhibition = ? WHERE postcard_id = ?";

    $statement = $pdo->prepare($sql);
    $statement -> bindValue(1, $exhibition_status);
    $statement -> bindValue(2, $work_id);    
    $statement->execute();  

?>
