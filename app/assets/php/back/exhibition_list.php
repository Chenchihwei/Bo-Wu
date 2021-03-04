<?php
    include('../Conn.php');
    $sql = 'SELECT e.member_id, e.name , e.blacklist ,count(d.work_id)
            FROM 
                member e
                left join work d
                    on e.member_id = d.member_id
            group by e.member_id';

    $statement = $pdo->prepare($sql);    
    $statement->execute();  



    include('./exhibition_public.php');
?>