<?php
    include('../Conn.php');
    $select = $_POST["select"];
    $textbox = $_POST["textbox"];

    // echo $select.' : '.$textbox;

    if( $select == 'id'){
        if( $textbox =="" ){
            // $sql = 'SELECT e.member_id, e.name , e.blacklist ,count(d.work_id)
            //         FROM 
            //             member e
            //             left join work d
            //                 on e.member_id = d.member_id
            //         group by e.member_id';
            $sql = 'SELECT a.advanced_id, e.member_id, e.name , e.blacklist , a.advance_img_path, w.count
                    FROM 
                        member e
                        join advanced a
                            on e.member_id = a.member_id
                        join (SELECT e.member_id, count(d.work_id) as count
                                FROM 
                                member e
                                left join work d
                                on e.member_id = d.member_id
                            where e.level = 1
                            group by e.member_id) w
                        on e.member_id = w.member_id';
        }else{
            // $sql = 'SELECT e.member_id, e.name , e.blacklist ,count(d.work_id)
            //         FROM 
            //             member e
            //             left join work d
            //                 on e.member_id = d.member_id
            //         where e.member_id like ?
            //         group by e.member_id';

            $sql = 'SELECT a.advanced_id, e.member_id, e.name , e.blacklist , a.advance_img_path, w.count
                    FROM 
                        member e
                        join advanced a
                            on e.member_id = a.member_id
                        join (SELECT e.member_id, count(d.work_id) as count
                                FROM 
                                member e
                                left join work d
                                on e.member_id = d.member_id
                            where e.level = 1
                            group by e.member_id) w
                        on e.member_id = w.member_id
                    where e.member_id like ?';
        }
    }else { 
        if( $textbox =="" ){
            // $sql = 'SELECT e.member_id, e.name , e.blacklist ,count(d.work_id)
            //         FROM 
            //             member e
            //             left join work d
            //                 on e.member_id = d.member_id
            //         group by e.member_id';
            $sql = 'SELECT a.advanced_id, e.member_id, e.name , e.blacklist , a.advance_img_path, w.count
            FROM 
                member e
                join advanced a
                    on e.member_id = a.member_id
                join (SELECT e.member_id, count(d.work_id) as count
                        FROM 
                        member e
                        left join work d
                        on e.member_id = d.member_id
                    where e.level = 1
                    group by e.member_id) w
                on e.member_id = w.member_id';
        }else{
            // $sql = 'SELECT e.member_id, e.name , e.blacklist ,count(d.work_id)
            //         FROM 
            //             member e
            //             left join work d
            //                 on e.member_id = d.member_id
            //         where e.name like ?
            //         group by e.member_id';
            $sql = 'SELECT a.advanced_id, e.member_id, e.name , e.blacklist , a.advance_img_path, w.count
                    FROM 
                        member e
                        join advanced a
                            on e.member_id = a.member_id
                        join (SELECT e.member_id, count(d.work_id) as count
                                FROM 
                                member e
                                left join work d
                                on e.member_id = d.member_id
                            where e.level = 1
                            group by e.member_id) w
                        on e.member_id = w.member_id
                        where e.name like ?';
        }
    };

    $statement = $pdo->prepare($sql);
    $statement -> bindValue(1, '%'.$textbox.'%');    
    $statement->execute();  




    include('./exhibition_public.php');

?>
