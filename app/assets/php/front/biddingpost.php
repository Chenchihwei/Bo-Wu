<?php
    include('../Conn.php');
    
    // $member_id = 1;//尚未處理會員編號

    $_POST =json_decode(file_get_contents("php://input",true));// axios post做轉換

    $work_id = 1;
    if(isset( $_POST->price)){//要不要insert
    $member_id = $_POST->member_id;
    $price = $_POST->price;// 抓POST的DATA物件中的PRICE
    $time = $_POST->time;

    $sql = "INSERT INTO `team3`.`bidding_price` (`work_id`,`member_id`,`bidding_price`,`bidding_time`) VALUES (:work_id,:member_id,:price,:time)";
    $biddlist = $pdo->prepare($sql);
    $biddlist->bindValue(':work_id',$work_id);
    $biddlist->bindValue(':member_id',$member_id);
    $biddlist->bindValue(':price',$price);
    $biddlist->bindValue(':time',$time);
    $biddlist->execute();
    }


    //連線開始


    

    $sql1= "SELECT * 
    FROM team3.bidding_price p
    join team3.member m
    on p.member_id = m.member_id
    where work_id = ? 
    order by bidding_price desc";

    $biddlistReturn = $pdo->prepare($sql1);
    $biddlistReturn->bindValue(1,$work_id);
    $biddlistReturn->execute();
    $data = $biddlistReturn->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($data);
    
    // $statement = $pdo->prepare($sql);    
    // $statement->execute();  





    // //抓出全部且依照順序封裝成一個二維陣列
    // $data = $statement->fetchAll();

    // echo json_encode($data);
?>