<?php
    include('../Conn.php');
    
    $work_id = $_POST['work_id'];

    $sql = 'SELECT * 
            FROM work w
                join member m 
                on w.member_id = m.member_id
            where w.work_id = ?';

    $statement = $pdo->prepare($sql);  
    $statement -> bindValue(1, $work_id); 
    $statement->execute();  


    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll();
    foreach($data as $index => $row){
        echo '<img src="'.$row['img_path'].'" alt="">';
        echo '<div class="product">';
        echo '<p class="work_id" style="display:none">'.$row['work_id'].'</p>';
        echo '<h1>'.$row['work_name'].'</h1>';
        echo '<h2>'.$row['name'].'</h2>';
        echo '<p>'.$row['work_introduce'].'</p>';
        echo '<div class="product_like"><i class="fas fa-heart"></i>';
        echo '<span>'.$row['like_num'].'</span><a class="share" data-social="facebook" href="###">share</a></div><i class="far fa-times-circle"></i></div>';                  
    }
?>
