<?php
    include('../Conn.php');
    $verify_id = $_POST["verify_id"];
    $verify_status = $_POST["verify_status"];

    if( $verify_status == 1){
        $sql = "UPDATE work SET verify = '1' WHERE work_id = ?";
    }else{
        $sql = "UPDATE work SET verify = '3' WHERE work_id = ?";
    };
    

    $statement = $pdo->prepare($sql);
    $statement -> bindValue(1, $verify_id);    
    $statement->execute();  

?>
