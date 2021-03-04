<?php
    include('../Conn.php');
    $select = $_POST["select"];
    $textbox = $_POST["textbox"];

    // echo $select.' : '.$textbox;

    if( $select == 'id'){
        if( $textbox =="" ){
            $sql = 'SELECT e.member_id, e.name , e.blacklist ,count(d.work_id)
                    FROM 
                        member e
                        left join work d
                            on e.member_id = d.member_id
                    group by e.member_id';
        }else{
            $sql = 'SELECT e.member_id, e.name , e.blacklist ,count(d.work_id)
                    FROM 
                        member e
                        left join work d
                            on e.member_id = d.member_id
                    where e.member_id like ?
                    group by e.member_id';
        }
    }else { 
        if( $textbox =="" ){
            $sql = 'SELECT e.member_id, e.name , e.blacklist ,count(d.work_id)
                    FROM 
                        member e
                        left join work d
                            on e.member_id = d.member_id
                    group by e.member_id';
        }else{
            $sql = 'SELECT e.member_id, e.name , e.blacklist ,count(d.work_id)
                    FROM 
                        member e
                        left join work d
                            on e.member_id = d.member_id
                    where e.name like ?
                    group by e.member_id';
        }
    };

    $statement = $pdo->prepare($sql);
    $statement -> bindValue(1, '%'.$textbox.'%');    
    $statement->execute();  




    include('./exhibition_public.php');

?>
