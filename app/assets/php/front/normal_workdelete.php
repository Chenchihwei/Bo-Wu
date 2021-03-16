<?php

// try {



//     include('../Conn.php');
// $sql="DELETE  FROM `team3`.`work` WHERE `work_id` = ?";

$work_id = $_POST('ID');

// $work_id = $_POST->work_id;


// $statement = $pdo->prepare($sql);    
// $statement->bindValue(1, $work_id);
// $statement->execute();  

// echo 'success';

echo $work_id;

// } catch (\Throwable $th) {
//     echo $th;
// }
?>