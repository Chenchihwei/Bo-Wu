<?php 

include('../Conn.php');
//   $db_host = "127.0.0.1";
// 	$db_user = "root";
//   $db_pass = "";
//   $db_select = "team3";

//  // $db_host = "10.2.0.115";
//  // $db_user = "test";
//  // $db_pass = "password";
//  // $db_select = "pdo";
//  //建立資料庫連線物件
//   $dsn = "mysql:host=".$db_host.";dbname=".$db_select;

//  //建立PDO物件，並放入指定的相關資料
//   $pdo = new PDO($dsn, $db_user, $db_pass);    
  $like_num = $_POST['like_num'];
  $work_id = $_POST['ID'];


  echo $like_num;
  echo $work_id;
  $sql = "UPDATE work set like_num = ? where work_id = ?";

  


  $statement = $pdo->prepare($sql);    
 $statement->bindValue(1,$like_num);
 $statement->bindValue(2,$work_id);
  $statement->execute();  

  



?>