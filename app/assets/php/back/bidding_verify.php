<?php
    include('../Conn.php');
    $verify_id = $_POST["verify_id"];
    $verify_status = $_POST["verify_status"];

    $sql = "UPDATE bidding_list SET bidding_verify = ? WHERE work_id = ?";
    
    

    $statement = $pdo->prepare($sql);
    $statement -> bindValue(1, $verify_status);    
    $statement -> bindValue(2, $verify_id);    
    $statement->execute();  

?>