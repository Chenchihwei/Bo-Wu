<?php
    include('../Conn.php');
    
    $login_id = $_POST['login_id'];

    $sql = 'SELECT * FROM like_list WHERE member_id = ? and `like` = 1'; 

    $statement = $pdo->prepare($sql);  
    $statement -> bindValue(1, $login_id); 
    $statement->execute();  


    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll();
    foreach($data as $index => $row){
        echo $row['work_id'].'/';
    }
?>
