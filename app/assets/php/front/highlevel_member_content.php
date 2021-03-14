<?php
    include('../Conn.php');

    $member_id = $_POST['member_id'];


    $sql = 'SELECT * from  member where member_id = ?';
    
    
    
    
    $statement = $pdo->prepare($sql);    
    $statement->bindValue(1, $member_id);      
    $statement->execute();  

    $data = $statement->fetchAll();
    foreach($data as $index => $row){
        echo $row['name'].'/'.$row['email'].'/'.$row['introduction'];
    };

?>