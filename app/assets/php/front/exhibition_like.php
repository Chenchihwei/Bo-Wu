<?php
    include('../Conn.php');
    $time_id = date('mdHis');
    $work_id = $_POST['work_id'];   //被按讚作品ID
    $member_id = $_POST['member_id'];   //按讚者ID
    $status =  $_POST['status'];    //按讚狀態  1:按讚,2:收回


    //按讚資料表
    $sql = 'SELECT * FROM like_list where member_id = ? and work_id = ?';
    $statement = $pdo->prepare($sql);   
    $statement-> bindValue(1, $member_id);    
    $statement-> bindValue(2, $work_id);    
    $statement->execute();  
    $data_like = $statement->fetchAll();
    
    //work資料表
    $sql_work = 'SELECT * FROM work where work_id = ?';
    $statement = $pdo->prepare($sql_work);
    $statement-> bindValue(1, $work_id);    
    $statement->execute();  
    $data_work = $statement->fetchAll();
    foreach($data_work as $index => $row){
        $like_num =  $row['like_num'];      
    };

    if($status == 1){
        $like_num += 1;
    }else{
        $like_num -= 1;
    };

    //更新work資料表
    function update_work($like_num,$work_id){
        include('../Conn.php');
        $sql_update_work = 'UPDATE work SET like_num = ? WHERE work_id = ?';
        $statement = $pdo->prepare($sql_update_work);
        $statement-> bindValue(1, $like_num);    
        $statement-> bindValue(2, $work_id);    
        $statement->execute();
    };

    //如果like_list裡面沒資料
    if(count($data_like) == 0){  
        $sql_insert = 'INSERT INTO `team3`.`like_list` (`like_id`, `work_id`, `member_id`, `like`) VALUES (?, ?, ?, ?)';
        $statement = $pdo->prepare($sql_insert);
        $statement -> bindValue(1, $time_id);    
        $statement -> bindValue(2, $work_id);    
        $statement -> bindValue(3, $member_id);       
        $statement -> bindValue(4, $status);       
        $statement->execute();
        update_work($like_num,$work_id);

    }else{
        //更新like資料表
        $sql_update_like = 'UPDATE like_list SET `like` = ? WHERE work_id = ? and member_id = ?';
        $statement = $pdo->prepare($sql_update_like);
        $statement-> bindValue(1, $status);    
        $statement-> bindValue(2, $work_id);        
        $statement-> bindValue(3, $member_id);        
        $statement->execute();
        update_work($like_num,$work_id);
    }
    
?>
