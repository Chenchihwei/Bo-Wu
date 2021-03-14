<?php
    include('../Conn.php');

    $member_id = $_POST['member_id'];
    $field = $_POST['field'];
    $edit_content = $_POST['edit_content'];


    if($field == 'name'){
        $sql = 'UPDATE member SET `name` = ? WHERE member_id = ?';
        $statement = $pdo->prepare($sql);    
        $statement->bindValue(1, $edit_content);    
        
    }else if($field == 'work_name'){
        $sql = 'UPDATE member SET `email` = ? WHERE member_id = ?';
        $statement = $pdo->prepare($sql);    
        $statement->bindValue(1, $edit_content);    
        
    }else{
        $sql = 'UPDATE member SET `introduction` = ? WHERE member_id = ?';
        $statement = $pdo->prepare($sql);    
        $statement->bindValue(1, $edit_content);
    }

    $statement->bindValue(2, $member_id);    
    $statement->execute(); 

?>