<?php 

include('../Conn.php');

//   $db_host = "127.0.0.1";
// 	$db_user = "root";
// $db_pass = "";
//  $db_select = "team3";

 // $db_host = "10.2.0.115";
 // $db_user = "test";
 // $db_pass = "password";
 // $db_select = "pdo";
 //建立資料庫連線物件
//  $dsn = "mysql:host=".$db_host.";dbname=".$db_select;

//  //建立PDO物件，並放入指定的相關資料
//  $pdo = new PDO($dsn, $db_user, $db_pass);    

  $sql = 'SELECT w.*, c.collection_id, c.collection_subject
        FROM 
            work w
            join collection c
                on w.work_id = c.work_id
        WHERE w.exhibition = 1 and c.collection_subject = 1';

 $statement = $pdo->prepare($sql);    
 $statement->execute();  


 
 //抓出全部且依照順序封裝成一個二維陣列
 $data = $statement->fetchAll();
 
 foreach($data as $index => $row){
     echo '<img class="collection_img" src="'.$row['img_path'].'" alt="" data-id ='.$row['work_id'].'>';
 };





?>