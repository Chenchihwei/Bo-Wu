<?php
    include('../Conn.php');

    $member_id = $_POST['member_id'];


    $sql = 'SELECT * from  member where member_id = ?';
    
    
    
    
    $statement = $pdo->prepare($sql);    
    $statement->bindValue(1, $member_id);      
    $statement->execute();  

    $data = $statement->fetchAll();
    $img_path = '';
    foreach($data as $index => $row){
        if($row['img_path']==""){
            $img_path="./assets/img/normalnumber/art.png";
        }else{
            $img_path = $row['img_path'];
        }
        echo $row['name'].'/'.$row['email'].'/'.$row['introduction'].'/'.$img_path;
    };

?>