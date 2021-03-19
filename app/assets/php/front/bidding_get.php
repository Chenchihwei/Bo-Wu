<?php
    include('../Conn.php');

    //連線開始


    $sql = "SELECT *
    from bidding_message b
        join team3.member m
        on b.member_id = m.member_id;"; 
    
    $statement = $pdo->prepare($sql);    
    $statement->execute();  
    $data = $statement->fetchAll(PDO::FETCH_ASSOC);


    echo json_encode($data);
?>