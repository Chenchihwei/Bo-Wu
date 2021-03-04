<?php
    include('../Conn.php');
    $select = $_POST["select"];
    $textbox = $_POST["textbox"];


    if($textbox !=''){
        if( $select == 'work_id'){
            $sql = 'SELECT b.*, w.*
                    FROM 
                        bidding_list b 
                        join work w
                        on b.work_id = w.work_id
                    where bidding_verify = 1 and b.work_id = ?
                    order by (bidding_time)DESC';
        }else if($select == 'work_name'){ 
            $sql = 'SELECT b.*, w.*
                    FROM 
                        bidding_list b 
                        join work w
                        on b.work_id = w.work_id
                    where bidding_verify = 1 and w.work_name = ?
                    order by (bidding_time)DESC';
        }else{
            $sql = 'SELECT b.*, w.*
            FROM 
                bidding_list b 
                join work w
                on b.work_id = w.work_id
            where bidding_verify = 1 and w.member_id = ?
            order by (bidding_time)DESC';
        }; 
    }else{
        $sql = 'SELECT b.*, w.*
            FROM 
                bidding_list b 
                join work w
                on b.work_id = w.work_id
            where bidding_verify = 1
            order by (bidding_time)DESC';
    };
   
    $statement = $pdo->prepare($sql);
    $statement -> bindValue(1, $textbox);       
    $statement->execute(); 

    include('./bidding_list_public.php');

?>
