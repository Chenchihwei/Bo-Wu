<?php
//抓出全部且依照順序封裝成一個二維陣列
$data = $statement->fetchAll();
echo '<tr class="table-dark">
        <th></th>
        <th>展品編號</th>
        <th>展品圖片</th>
        <th>展品名稱</th>
        <th>展品簡介</th>
        <th>作者編號</th>
        <th>競標金額</th>
        <th>競標時間</th>
        <th></th>
    </tr>';

foreach($data as $index => $row){
    echo '<tr class="table-light"><td><input type="checkbox" class="uncheck_checkbox"></td>';
    echo '<td><p class="uncheck_work_id">'.$row["work_id"].'</p></td>';
    echo '<td><img src="'.$row["img_path"].'" alt=""></td>';
    echo '<td>'.$row["work_name"].'</td>';
    echo '<td>'.$row["work_introduce"].'</td>';
    echo '<td>'.$row["member_id"].'</td>';
    echo '<td><p class="edit_p">'.$row["start_price"].'</p><input type="text" style="width:5vw;" name="" class="edit_text none"></td>';
    echo "<td><p class='edit_p'>".$row["bidding_time"]."</p><input type='text' style='width:5vw;' name='' class='edit_text none'></td>";
    echo "<td width='40'><a href='###' class='edit'>編輯</a><a href='###' class='save none'>儲存</a></td></tr>";
}
?>