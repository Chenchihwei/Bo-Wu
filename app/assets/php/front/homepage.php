<?php
    //MySQL相關資訊
    $db_host = "127.0.0.1";
    $db_user = "root";
    $db_pass = "password";
    $db_select = "PDO";

    //建立資料庫連線物件
    $dsn = "mysql:host=".$db_host.";dbname=".$db_select;

    //建立PDO物件，並放入指定的相關資料
    $pdo = new PDO($dsn, $db_user, $db_pass);  


    $sql = "SELECT * FROM team3.background where bg_category = '1' && bg_show = '1'";
     //執行

    $statement = $pdo->prepare($sql);

    $statement -> execute();
    $data = $statement -> fetchAll();

    echo json_encode($data);

?>