<?php
    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll();
    foreach($data as $index => $row){

        echo '<li class="exb_pic">';
        echo '<p class="work_id" style="display:none">'.$row['work_id'].'</p>';
        echo '<img src="'.$row['img_path'].'" alt="">';
        echo '<div class="product_like"><i class="fas fa-heart"></i>';
        echo '<span>'.$row['like_num'].'</span>';
        echo ' <a class="share" data-social="facebook" href="###">share</a></div></li>';                    
    }
?>