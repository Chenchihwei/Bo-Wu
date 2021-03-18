<?php
    include('../Conn.php');

    $member_id = $_POST['member_id'];

    $sql = 'SELECT * FROM work WHERE member_id = ? order by verify';
    $statement = $pdo->prepare($sql);    
    $statement->bindValue(1, $member_id) ;    
    $statement->execute();  


    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll();
    foreach($data as $index => $row){
        if($row['verify'] == 3){
            echo '<div class="authority_div" style="height:178px;"><p style="font-weight:bold;">待審核</p><img style="opacity:0.4;" class="uncheck" data-id="'.$row['work_id'].'" src="'.$row['img_path'].'" alt=""></div>';
        }else{
            echo '<div class="authority_div" style="height:178px"><p style="font-weight:bold;" class="none">已選取</p><img class="checked" data-id="'.$row['work_id'].'" src="'.$row['img_path'].'" alt=""></div>';
        }
    
    };
?>
