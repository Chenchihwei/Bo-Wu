<?php
//抓出全部且依照順序封裝成一個二維陣列
$data = $statement->fetchAll();
echo '<tr class="table-dark">
        <th></th>
        <th><p class="th_p">展品編號</p></th>
        <th>展品圖片</th>
        <th><p class="th_p">展品名稱</p></th>
        <th>展品簡介</th>
        <th><p class="th_p">展品作者</p></th>
        <th><p class="th_p">上架狀態</p></th>
        <th><p class="th_p">按讚數</p></th>
        <th><p class="th_p">瀏覽數</p></th>
        <th></th>
    </tr>';

foreach($data as $index => $row){
    echo '<tr class="table-light"><td><input type="checkbox" class="work_checkbox"></td>';
    echo '<td><p class="work_id">'.$row["work_id"].'</p></td>';
    echo '<td><img src="'.$row["img_path"].'" alt=""></td>';
    echo '<td>'.$row["work_name"].'</td>';
    echo '<td>'.$row["work_introduce"].'</td>';
    echo '<td>'.$row["name"].'</td>';
    
    $exhibition = $row["exhibition"];
    switch ($exhibition) {
        case "1":
            $exhibition = '上架中';
            break;
        case "2":
            $exhibition = '下架中';
            break;
        case "3":
            $exhibition = '倒數上架';
            break;
        default:
            $exhibition = '錯誤';
            break;
    };
    echo '<td><p class="exhibition_status">'.$exhibition.'</p></td>';
    echo '<td>'.$row["like_num"].'</td>';
    echo '<td>'.$row["visitors"].'</td>';
    echo '<td><a href="###" class="message_content" >留言明細</a></td></tr>';
};
?>