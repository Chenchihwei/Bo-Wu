<?php
include('../Conn.php');

$fileName = $_POST['img_name'];
$sqlfilePath = $_POST['path'];
$subject = $_POST['subject'];
$time_id = date('mdHis');

$sql = "INSERT INTO postcard(postcard_id, postcard_name, postcard_img_path, postcard_exhibition,postcard_category) VALUES (?, ?, ?, ?, ?)";
$statement = $pdo->prepare($sql);
$statement -> bindValue(1, $time_id);    
$statement -> bindValue(2, $fileName);    
$statement -> bindValue(3, $sqlfilePath);    
$statement -> bindValue(4, 2);    
$statement -> bindValue(5, 1);
$statement->execute();



    echo '<tr class="table-light"><td><input type="checkbox" class="work_checkbox"></td>';
    echo '<td><p class="work_id">'.$time_id.'</p></td>';
    echo '<td><img src="'.$sqlfilePath.'" alt=""></td>';
    echo '<td><p class="edit_p none"></p><input type="text" style="width:5vw;" value="'.$fileName.'" class="edit_text"></td>';
    echo '<td><p class="select_p none"></p><select class="edit_select"><option value="1">背景</option><option value="2">圖樣</option></select></td>';
    echo '<td><p class="exhibition_status">下架中</p></td>';
    echo "<td width='40'><a href='###' class='edit none'>編輯</a><a href='###' class='save'>儲存</a></td></tr>";
?>


