<?php
//抓出全部且依照順序封裝成一個二維陣列
$data = $statement->fetchAll();
echo "<tr class='table-dark table_title'>
        <th>
        <p class='th_p'>展間編號</p>
        </th>
        <th>
            <p class='th_p'>會員編號</p>
        </th>
        <th>
            <p class='th_p'>姓名</p>
        </th>
        <th>
            <p class='th_p'>黑名單</p>
        </th>
        <th>
            展間封面
        </th>
        <th>
            <p class='th_p'>作品數</p>
        </th>
    </tr>";
foreach($data as $index => $row){
    echo '<tr class="table-light">';
    echo '<td>'.$row["advanced_id"].'</td>';
    echo '<td>'.$row["member_id"].'</td>';
    echo '<td>'.$row["name"].'</td>';

    $blacklist = $row["blacklist"];
    switch ($blacklist) {
        case "1":
            $blacklist = '白名單';
        break;
        case "2":
            $blacklist = '黑名單';
        break;
        default:
            $level = '錯誤';
    };
    echo '<td>'.$blacklist.'</td>';
    echo '<td><img style="width:4vw;" src="'.$row['advance_img_path'].'"></td>';
    echo '<td>'.$row["count"].'</td></tr>';

    
}
?>