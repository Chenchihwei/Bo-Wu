<?php
include('../Conn.php');

$imgId = $_POST['imgId'];

$sql = "DELETE FROM `team3`.`work` WHERE (`work_id` = ?)";
$statement = $pdo->prepare($sql);
$statement -> bindValue(1, $imgId);    
  
$statement->execute();

?>

