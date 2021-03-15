<?php
    include('../Conn.php');

    $sql = 'SELECT *
            FROM 
                advanced';
    $statement = $pdo->prepare($sql);    
    $statement->execute();  


    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll();
    foreach($data as $index => $row){
        echo '<li><p class=advance_memberid style="display:none">'.$row['member_id'].'</p>';
        echo '<a href="###"><img class="advance_url" src="'.$row['advance_img_path'].'" alt=""></a></li>';
                          
    };
?>
