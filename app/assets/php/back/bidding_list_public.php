<?php
//抓出全部且依照順序封裝成一個二維陣列
$data = $statement->fetchAll();
echo '<tr class="table-dark">
        <th></th>
        <th>展品編號</th>
        <th>展品圖片</th>
        <th>展品名稱</th>
        <th>作者編號</th>
        <th>起始金額</th>
        <th>目前金額</th>
        <th>競標時間</th>
        <th>目前狀態</th>
        <th>得標編號</th>
        <th></th>
    </tr>';

foreach($data as $index => $row){
    echo '<tr class="table-light"><td><input type="checkbox" class="work_checkbox"></td>';
    echo '<td><p class="work_id">'.$row["work_id"].'</p></td>';
    echo '<td><img src="'.$row["img_path"].'" alt=""></td>';
    echo '<td>'.$row["work_name"].'</td>';
    echo '<td>'.$row["member_id"].'</td>';
    echo '<td>'.$row["start_price"].'</td>';
    echo '<td>'.$row["now_price"].'</td>';
    echo "<td>".$row["bidding_time"]."</td>";

    $bidding_exhibition = $row["bidding_exhibition"];
    switch ($bidding_exhibition) {
        case "1":
            $bidding_exhibition = '上架中';
            break;
        case "2":
            $bidding_exhibition = '下架中';
            break;
        default:
            $bidding_exhibition = '錯誤';
            break;
    };
    echo '<td><p class="exhibition_status">'.$bidding_exhibition.'</p></td>';
    echo '<td>'.$row["member_id_win"].'</td>';
    echo "<td width='40'><a href='###' class='details'>明細</a></td></tr>";
}
?>