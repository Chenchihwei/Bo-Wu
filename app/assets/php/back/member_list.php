<?php
    include('../Conn.php');

    // $sql = "SELECT * FROM member";
    // $sql = "SELECT * FROM member WHERE Name = '".$account."' and PWD = '".$pwd."' ";  //作業
    

    // $sql = 'SELECT e.member_id, e.name, e.account, e.password, e.email, e.level, e.blacklist, e.introduction, count(d.work_id),e.join_date
    //         FROM 
    //             member e
    //             join work d
    //                 on e.member_id = d.member_id
    //         group by member_id';

    $sql = 'SELECT e.*, count(d.work_id)
            FROM 
                member e
                left join work d
                    on e.member_id = d.member_id
            group by member_id';

        


        

    $statement = $pdo->prepare($sql);    
    $statement->execute();  



    include('./member_public.php');
?>
