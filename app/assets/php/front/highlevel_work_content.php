<?php
    include('../Conn.php');

    $work_id = $_POST['work_id'];


    $sql = 'SELECT w.*, count(wm.work_id)  
            from work w
                left join work_message wm
                on w.work_id = wm.work_id
            where w.work_id = ?
            group by w.work_id';
    
    
    
    
    $statement = $pdo->prepare($sql);    
    $statement->bindValue(1, $work_id);      
    $statement->execute();  

    $data = $statement->fetchAll();
    foreach($data as $index => $row){
        echo $row['work_name'].'//'.$row['work_introduce'].'//'.$row['like_num'].'//'.$row['visitors'].'//'.$row['count(wm.work_id)'].'//<img class="art" data-id="'.$row['work_id'].'" src="'.$row['img_path'].'">';
    };

?>