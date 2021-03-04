<?php
    include('../Conn.php');
    $select = $_POST["select"];
    $textbox = $_POST["textbox"];
    $status = $_POST["status"];
    

    if( $select == 'work_id'){
        if($status == 1){
            if( $textbox =="" ){
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
                WHERE w.exhibition = 1 and c.collection_subject = 3 and w.work_id like ?';
            };
        }else{
            if( $textbox =="" ){
                $sql = 'SELECT w.*, c.collection_id, c.collection_subject
                FROM 
                    work w
                    join collection c
                        on w.work_id = c.work_id
                WHERE w.exhibition = 2 and c.collection_subject = 3';
            }else{
                $sql = 'SELECT w.*, c.collection_id, c.collection_subject
                FROM 
                    work w
                    join collection c
                        on w.work_id = c.work_id
                WHERE w.exhibition = 2 and c.collection_subject = 3 and w.work_id like ?';
            };
        };
    }else if($select == 'work_name'){ 
        if($status == 1){
            if( $textbox =="" ){
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
                WHERE w.exhibition = 1 and c.collection_subject = 3 and w.work_name like ?';
            };
        }else{
            if( $textbox =="" ){
                $sql = 'SELECT w.*, c.collection_id, c.collection_subject
                FROM 
                    work w
                    join collection c
                        on w.work_id = c.work_id
                WHERE w.exhibition = 2 and c.collection_subject = 3';
            }else{
                $sql = 'SELECT w.*, c.collection_id, c.collection_subject
                FROM 
                    work w
                    join collection c
                        on w.work_id = c.work_id
                WHERE w.exhibition = 2 and c.collection_subject = 3 and w.work_name like ?';
            };
        };
    };

    $statement = $pdo->prepare($sql);
    $statement -> bindValue(1, '%'.$textbox.'%');    
    $statement->execute();  




    include('./collection_public.php');

?>
