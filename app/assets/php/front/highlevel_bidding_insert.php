<?php
    include('../Conn.php');

    $time_id = date('mdHis');
    $work_id = $_POST['work_id'];
    $member_id = $_POST['member_id'];
    $time = $_POST['time'];
    $money = $_POST['money'];


    $sql = 'INSERT INTO bidding_list (`bidding_id`, `work_id`, `member_id`, `bidding_time`, `start_price`, `now_price`, `bidding_verify`, `bidding_exhibition`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    
    
    
    
    
    $statement = $pdo->prepare($sql);    
    $statement->bindValue(1, $time_id);    
    $statement->bindValue(2, $work_id);
    $statement->bindValue(3, $member_id);    
    $statement->bindValue(4, $time); 
    $statement->bindValue(5, $money);    
    $statement->bindValue(6, $money);     
    $statement->bindValue(7, 3);     
    $statement->bindValue(8, 2);     
    $statement->execute();  

?>