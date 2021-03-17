<?php
    include('../Conn.php');

    $sql = 'SELECT w.*, m.name
            FROM 
                work w
                join member m
                on w.member_id = m.member_id
            where w.verify = 1 and w.member_id != 0';

        
    $statement = $pdo->prepare($sql);    
    $statement->execute();  



    include('./work_list_public.php');
?>
