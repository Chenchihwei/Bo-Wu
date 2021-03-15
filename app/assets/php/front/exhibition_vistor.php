<?php
    include('../Conn.php');
    $work_id = $_POST['work_id'];   //被按讚作品ID
    //按讚資料表
    $sql = 'SELECT * FROM work where work_id = ?';
    $statement = $pdo->prepare($sql);   
    $statement-> bindValue(1, $work_id);      
    $statement->execute();  
    $data = $statement->fetchAll();
    // print_r($data);
    foreach($data as $index => $row){
        $visitors = $row['visitors'];  
        // echo $visitors;
    }
    
    $visitors += 1;

    // echo $visitors;


    $sql_visitors = 'UPDATE work SET visitors = ? WHERE work_id = ?';
    $statement = $pdo->prepare($sql_visitors);
    $statement-> bindValue(1, $visitors);    
    $statement-> bindValue(2, $work_id);              
    $statement->execute();

?>