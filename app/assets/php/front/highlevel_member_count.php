<?php
    include('../Conn.php');

    $member_id = $_POST['member_id'];


    $sql = 'SELECT w.*, count(wm.work_id), m.*  
    from work w
        left join work_message wm
        on w.work_id = wm.work_id
        join member m
        on w.member_id = m.member_id
      where m.member_id = ?
      group by w.work_id';
    
    
    
    
    $statement = $pdo->prepare($sql);    
    $statement->bindValue(1, $member_id);      
    $statement->execute();  

    $goodTotal = '';
    $peopleTotal='';
    $commentTotal='';

    $data = $statement->fetchAll();
    foreach($data as $index => $row){
      $goodTotal +=  $row['like_num'];
      $peopleTotal +=  $row['visitors'];
      $commentTotal +=  $row['count(wm.work_id)'];
    };
    echo $goodTotal.'|'.$peopleTotal.'|'.$commentTotal;
?>