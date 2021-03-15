<?php
    include('../Conn.php');

    $work_id = $_POST['work_id'];


    $sql = 'SELECT work_name, work_introduce from  work  WHERE work_id = ?';
    
    
    
    
    
    $statement = $pdo->prepare($sql);    
    $statement->bindValue(1, $work_id);       
    $statement->execute();  

    $data = $statement->fetchAll();

    echo json_encode($data);


?>