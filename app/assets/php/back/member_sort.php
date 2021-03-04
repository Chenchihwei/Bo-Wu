<?php
    include('../Conn.php');
    $sort = $_POST["sort"];
    if($sort == '姓名'){
        $sql = 'SELECT e.*, count(d.work_id)
            FROM 
                member e
                left join work d
                    on e.member_id = d.member_id
            group by member_id
            order by e.name';
    }else if($sort == '編號'){
        $sql = 'SELECT e.*, count(d.work_id)
            FROM 
                member e
                left join work d
                    on e.member_id = d.member_id
            group by member_id
            order by e.member_id';
    }else if($sort == '等級'){
        $sql = 'SELECT e.*, count(d.work_id)
            FROM 
                member e
                left join work d
                    on e.member_id = d.member_id
            group by member_id
            order by e.level';
    }else if($sort == '黑名單'){
        $sql = 'SELECT e.*, count(d.work_id)
            FROM 
                member e
                left join work d
                    on e.member_id = d.member_id
            group by member_id
            order by e.blacklist';
    }else if($sort == '作品數'){
        $sql = 'SELECT e.*, count(d.work_id)
            FROM 
                member e
                left join work d
                    on e.member_id = d.member_id
            group by member_id
            order by count(d.work_id)DESC';
    }else if($sort == '加入日期'){
        $sql = 'SELECT e.*, count(d.work_id)
            FROM 
                member e
                left join work d
                    on e.member_id = d.member_id
            group by member_id
            order by e.join_date';
    }else{
        $sql = 'SELECT e.*, count(d.work_id)
            FROM 
                member e
                left join work d
                    on e.member_id = d.member_id
            group by member_id';
    };
    


    $statement = $pdo->prepare($sql);    
    $statement->execute();  



    include('./member_public.php');
?>
