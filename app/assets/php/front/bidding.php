<?php
    // include('../Conn.php');

    
    //MySQL相關資訊
    $db_host = "localhost";
    $db_user = "root";
    $db_pass = "pk5233";
    $db_select = "PDO";

    //建立資料庫連線物件
    $dsn = "mysql:host=".$db_host.";dbname=".$db_select;

    //建立PDO物件，並放入指定的相關資料
    $pdo = new PDO($dsn, $db_user, $db_pass);


    //連線開始


    $sql = "SELECT * FROM member where member_id = 1";
    // $sql = "SELECT * FROM member WHERE Name = '".$account."' and PWD = '".$pwd."' ";  //作業
    
    $statement = $pdo->prepare($sql);    
    $statement->execute();  





    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll();

    // echo $data;
    //將二維陣列取出顯示其值
    // foreach($data as $index => $row){
    //     echo $row["ID"];   //欄位名稱
    //     echo " / ";
    //     echo $row["Content"];    //欄位名稱
    //     echo " / ";
    //     echo $row["CreateDate"];    //欄位名稱
    //     echo "<br/>";
    // }
    echo json_encode($data);
?>