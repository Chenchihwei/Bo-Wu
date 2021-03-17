<?php
    include('../Conn.php');
    $sort = $_POST["sort"];

    // echo $sort;
    if($sort == '展品編號'){
        $sql = 'SELECT w.*, m.name
            FROM 
                work w
                join member m
                on w.member_id = m.member_id
            where w.verify = 1 and w.member_id != 0
            order by w.work_id';
            
    }else if($sort == '展品名稱'){
        $sql = 'SELECT w.*, m.name
            FROM 
                work w
                join member m
                on w.member_id = m.member_id
            where w.verify = 1 and w.member_id != 0
            order by w.work_name';
    }else if($sort == '展品作者'){
        $sql = 'SELECT w.*, m.name
            FROM 
                work w
                join member m
                on w.member_id = m.member_id
            where w.verify = 1 and w.member_id != 0
            order by m.name';
    }else if($sort == '上架狀態'){
        $sql = 'SELECT w.*, m.name
            FROM 
                work w
                join member m
                on w.member_id = m.member_id
            where w.verify = 1 and w.member_id != 0
            order by w.exhibition';
    }else if($sort == '按讚數'){
        $sql = 'SELECT w.*, m.name
            FROM 
                work w
                join member m
                on w.member_id = m.member_id
            where w.verify = 1 and w.member_id != 0
            order by (w.like_num)DESC';
    }else if($sort == '瀏覽數'){
        $sql = 'SELECT w.*, m.name
            FROM 
                work w
                join member m
                on w.member_id = m.member_id
            where w.verify = 1 and w.member_id != 0
            order by (w.visitors)DESC';
    };
    


    $statement = $pdo->prepare($sql);    
    $statement->execute();  



    include('./work_list_public.php');
?>
