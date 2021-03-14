<?php
    include('../Conn.php');

    $work_id = $_POST['work_id'];
    $status = $_POST['status'];

    $sql = 'UPDATE work SET exhibition = ? WHERE work_id = ?';
    
    
    
    
    
    $statement = $pdo->prepare($sql);    
    $statement->bindValue(1, $status);    
    $statement->bindValue(2, $work_id);    
    $statement->execute();  

?>
