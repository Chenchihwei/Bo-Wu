<?php
    include('../Conn.php');
    $work_id = $_POST["work_id"];
    $exhibition_status = $_POST["exhibition_status"];

    if( $exhibition_status == 1){
        $sql = "UPDATE bidding_list SET bidding_exhibition = '1' WHERE work_id = ?";
    }else{
        $sql = "UPDATE bidding_list SET bidding_exhibition = '2' WHERE work_id = ?";
    };
    


    $statement = $pdo->prepare($sql);
    $statement -> bindValue(1, $work_id);    
    $statement->execute();  

?>