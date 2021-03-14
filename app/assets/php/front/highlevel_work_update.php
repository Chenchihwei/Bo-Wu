<?php
    include('../Conn.php');

    $work_id = $_POST['work_id'];
    $field = $_POST['field'];
    $edit_content = $_POST['edit_content'];


    if($field == 'work_name'){
        $sql = 'UPDATE work SET `work_name` = ? WHERE work_id = ?';
        $statement = $pdo->prepare($sql);    
        $statement->bindValue(1, $edit_content);    
        
    }else if($field == 'introduce'){
        $sql = 'UPDATE work SET `work_introduce` = ? WHERE work_id = ?';
        $statement = $pdo->prepare($sql);    
        $statement->bindValue(1, $edit_content);
    }else{

    }

    $statement->bindValue(2, $work_id);    
    $statement->execute(); 

?>