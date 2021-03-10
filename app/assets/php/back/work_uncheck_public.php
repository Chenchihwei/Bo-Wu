<?php
//抓出全部且依照順序封裝成一個二維陣列
$data = $statement->fetchAll();
echo '<tr class="table-dark">
        <th></th>
        <th>展品編號</th>
        <th>展品圖片</th>
        <th>展品名稱</th>
        <th>展品簡介</th>
        <th>展品作者</th>
        <th>審核狀態</th>
    </tr>';

foreach($data as $index => $row){
    echo '<tr class="table-light"><td><input type="checkbox" class="uncheck_checkbox"></td>';
    echo '<td><p class="uncheck_work_id">'.$row["work_id"].'</p></td>';
    echo '<td><img src="'.$row["img_path"].'" alt=""></td>';
    echo '<td>'.$row["work_name"].'</td>';
    echo '<td>'.$row["work_introduce"].'</td>';
    echo '<td>'.$row["name"].'</td>';
    
    $verify = $row["verify"];
    switch ($verify) {
        case "1":
            $verify = '審核完成';
            break;
        case "2":
            $verify = '審核中';
            break;
        case "3":
            $verify = '待審核';
            break;
        default:
            $verify = '錯誤';
            break;
    };
    echo '<td><p class="verify_status">'.$verify.'</p></td></tr>';
}
?>