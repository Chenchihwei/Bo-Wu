<?php
//抓出全部且依照順序封裝成一個二維陣列
$data = $statement->fetchAll();
echo "<tr class='table-dark table_title'>
        <th>
            <p class='th_p'>編號</p>
        </th>
        <th>
            <p class='th_p'>姓名</p>
        </th>
        <th>
            <p class='th_p'>帳號</p>
        </th>
        <th>
            <p class='th_p'>密碼</p>
        </th>
        <th>
            <p class='th_p'>等級</p>
        </th>
        <th>
            <p class='th_p'>黑名單</p>
        </th>
        <th>
            <p class='th_p'>自我介紹</p>
        </th>
        <th>
            <p class='th_p'>作品數</p>
        </th>
        <th>
            <p class='th_p'>加入日期</p>
        </th>
        <th></th>
    </tr>";
foreach($data as $index => $row){
    echo "<tr class='table-light'><td><p class='edit_id'>".$row["member_id"]."</p></td>";
    echo "<td><p class='edit_p edit_name'>".$row["name"]."</p><input type='text' style='width:5vw;' name='' class='edit_text none'></td>";
    echo "<td><p class='edit_p edit_account'>".$row["account"]."</p><input type='text' style='width:5vw;' name='' class='edit_text none'></td>";
    echo "<td><p class='edit_p edit_password'>".$row["password"]."</p><input type='text' style='width:5vw;' name='' class='edit_text none'></td>";

    $level = $row["level"];
    switch ($level) {
        case "1":
            $level = '高級會員';
        break;
        case "2":
            $level = '普通會員';
        break;
        default:
            $level = '錯誤';
    };
    echo "<td><p class='select_p edit_level'>".$level."</p><select name='' class='member_level_select edit_select none'><option value='1'>高級會員</option><option value='2'>普通會員</option></select></td>";
    
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
    echo "<td><p class='select_p edit_blacklist'>".$blacklist."</p><select name='' class='member_blacklist_select edit_select none'><option value='1'>白名單</option><option value='2'>黑名單</option></select></td>";

    echo "<td><p class='produce'>".$row["introduction"]."</p><textarea name='' class='edit_textarea none' cols='30' rows='10'></textarea></td>";
    echo "<td>".$row["count(d.work_id)"]."</td>";
    echo "<td>".$row["join_date"]."</td>";
    echo "<td width='40'><a href='###' class='edit'>編輯</a><a href='###' class='save none'>儲存</a></td></tr>";
}
?>