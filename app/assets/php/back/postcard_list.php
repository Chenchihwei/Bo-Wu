<?php
    include('../Conn.php');
    
    $exhibition_status = $_POST['exhibition_status'];

    
    $sql = 'SELECT * FROM postcard where postcard_exhibition =?';
      
    $statement = $pdo->prepare($sql);
    $statement -> bindValue(1, $exhibition_status);      
    $statement->execute();  


    include('./postcard_public.php');
?>