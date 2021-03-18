<?php
    include('../Conn.php');

    $member_id = $_POST['member_id'];

    $sql = 'SELECT * FROM member WHERE member_id = ?';
    $statement = $pdo->prepare($sql);    
    $statement->bindValue(1, $member_id) ;    
    $statement->execute();  


    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll();
    foreach($data as $index => $row){
       echo $row['level'];
    };


   
?>
