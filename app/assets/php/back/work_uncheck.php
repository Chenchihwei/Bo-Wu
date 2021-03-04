<?php
    include('../Conn.php');

    $sql = 'SELECT w.*, m.name
            FROM 
                work w
                join member m
                    on w.member_id = m.member_id
            where w.verify = 3';


    $statement = $pdo->prepare($sql);    
    $statement->execute();  



    include('./work_uncheck_public.php');
?>
