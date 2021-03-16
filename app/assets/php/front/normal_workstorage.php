<?php
    include('../Conn.php');

    $sql = "SELECT * FROM work where member_id = 8";
    // $sql = "SELECT * FROM member WHERE Name = '".$account."' and PWD = '".$pwd."' ";  //作業
    
    $statement = $pdo->prepare($sql);    
    $statement->execute();  





    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll(PDO::FETCH_ASSOC);
    

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