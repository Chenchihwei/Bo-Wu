<?php
    include('../Conn.php');

    $member_id = $_POST['member_id'];

    $sql = 'SELECT * FROM work WHERE member_id = ? and exhibition = 1';
    $statement = $pdo->prepare($sql);    
    $statement->bindValue(1, $member_id) ;    
    $statement->execute();  


    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll();
    foreach($data as $index => $row){
        echo '<div class="personal_work">';
        echo '<img data-id="'.$row['work_id'].'" src="'.$row['img_path'].'" alt=""><input type="checkbox" class="checkrage" data-img="1"><div class="custom-checkbox"><i class="fas fa-check"></i></div></div>';
    };


   
?>
