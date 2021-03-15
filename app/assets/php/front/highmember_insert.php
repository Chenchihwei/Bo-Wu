<?php
include('../Conn.php');

$fileName = $_POST['img_name'];
$sqlfilePath = $_POST['path'];
$member_id = $_POST['member_id'];
$time_id = date('mdHis');

$sql = "INSERT INTO `team3`.`work` (`work_id`, `work_name`, `member_id`, `work_introduce`, `img_path`, `like_num`, `exhibition`, `verify`, `visitors`) VALUES (?, ?, ?, '請輸入簡介', ?, '0', '2', '3', '0');";
$statement = $pdo->prepare($sql);
$statement -> bindValue(1, $time_id);    
$statement -> bindValue(2, $fileName);    
$statement -> bindValue(3, $member_id);    
$statement -> bindValue(4, $sqlfilePath);    
$statement->execute();
echo $time_id;
?>


