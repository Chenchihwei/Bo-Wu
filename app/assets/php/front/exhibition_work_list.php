<?php
    include('../Conn.php');

    $sql = 'SELECT * FROM work where member_id != 0 and exhibition = 1';
    $statement = $pdo->prepare($sql);    
    $statement->execute();  



    include('./exhibition_work_list_public.php');
?>
