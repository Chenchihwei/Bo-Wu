<?php
    include('../Conn.php');
    $select = $_POST["select"];
    $textbox = $_POST["textbox"];


    if( $select == 'work_id'){
        if( $textbox =="" ){
            $sql = 'SELECT w.*, m.name
            FROM 
                work w
                join member m
                on w.member_id = m.member_id
            where w.verify = 1 and w.member_id != 0';
        }else{
            $sql = 'SELECT w.*, m.name
            FROM 
                work w
                join member m
                on w.member_id = m.member_id
            where w.verify = 1 and w.work_id like ? and w.member_id != 0';
        }
    }else if($select == 'work_name'){ 
        if( $textbox =="" ){
            $sql = 'SELECT w.*, m.name
            FROM 
                work w
                join member m
                on w.member_id = m.member_id
            where w.verify = 1 and w.member_id != 0';
        }else{
            $sql = 'SELECT w.*, m.name
            FROM 
                work w
                join member m
                on w.member_id = m.member_id
            where w.verify = 1 and w.work_name like ? and w.member_id != 0';
        }
    }else{
        if( $textbox =="" ){
            $sql = 'SELECT w.*, m.name
            FROM 
                work w
                join member m
                on w.member_id = m.member_id
            where w.verify = 1 and w.member_id != 0';
        }else{
            $sql = 'SELECT w.*, m.name
            FROM 
                work w
                join member m
                on w.member_id = m.member_id
            where w.verify = 1 and m.name like ? and w.member_id != 0';
        }
    };

    $statement = $pdo->prepare($sql);
    $statement -> bindValue(1, '%'.$textbox.'%');    
    $statement->execute();  




    include('./work_list_public.php');

?>
