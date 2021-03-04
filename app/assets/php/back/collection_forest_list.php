<?php
    include('../Conn.php');
    
    $exhibition_status = $_POST['exhibition_status'];

    if($exhibition_status == 1){
        $sql = 'SELECT w.*, c.collection_id, c.collection_subject
                FROM 
                    work w
                    join collection c
                        on w.work_id = c.work_id
                WHERE w.exhibition = 1 and c.collection_subject = 3';
    }else{
        $sql = 'SELECT w.*, c.collection_id, c.collection_subject
                FROM 
                    work w
                    join collection c
                        on w.work_id = c.work_id
                WHERE w.exhibition = 2 and c.collection_subject = 3';
    };   
    $statement = $pdo->prepare($sql);    
    $statement->execute();  



    include('./collection_public.php');
?>