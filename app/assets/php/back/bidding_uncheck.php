<?php
    include('../Conn.php');

    $sql = 'SELECT b.*, w.*
            FROM 
                bidding_list b 
                join work w
                on b.work_id = w.work_id
            where bidding_verify = 3';

        
    $statement = $pdo->prepare($sql);    
    $statement->execute();  



    include('./bidding_uncheck_public.php');
?>
