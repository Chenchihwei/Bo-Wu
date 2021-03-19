<?php
    include('../Conn.php');
    
    // //MySQL相關資訊
    // $db_host = "localhost";
    // $db_user = "root";
    // $db_pass = "pk5233";
    // $db_select = "team3";

    // //建立資料庫連線物件
    // $dsn = "mysql:host=".$db_host.";dbname=".$db_select;

    // //建立PDO物件，並放入指定的相關資料
    // $pdo = new PDO($dsn, $db_user, $db_pass);
    
    /////
    $member_id = 1;//尚未處理會員編號

    $_POST =json_decode(file_get_contents("php://input",true));// axios post做轉換

    $work_id = $_POST->work_id;
    if(isset( $_POST->price)){//要不要insert

    $price = $_POST->price;// 抓POST的DATA物件中的PRICE
    $time = $_POST->time;

    $sql = "INSERT INTO `team3`.`bidding_price` (`work_id`, `member_id`, `bidding_price`,`bidding_time`) VALUES (:work_id, :member_id, :price,:time)";
    $biddlist = $pdo->prepare($sql);
    $biddlist->bindValue(':work_id',$work_id);
    $biddlist->bindValue(':member_id',$member_id);
    $biddlist->bindValue(':price',$price);
    $biddlist->bindValue(':time',$time);
    $biddlist->execute();

    }



    $sql1= "SELECT * FROM team3.bidding_price where work_id = ? order by bidding_price_id desc";

    $biddlistReturn = $pdo->prepare($sql1);
    $biddlistReturn->bindValue(1,$work_id);
    $biddlistReturn->execute();
    $data = $biddlistReturn->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($data);


    // $sql = "SELECT * FROM member  ";  //作業
    
    // $statement = $pdo->prepare($sql);    
    // $statement->execute();  





    // //抓出全部且依照順序封裝成一個二維陣列
    // $data = $statement->fetchAll();

    // echo json_encode($data);
?>