<?php
    include('../Conn.php');
    
    $search_text = $_POST['search_text'];

    $sql = 'SELECT * 
            FROM work
            where work_name like ? and exhibition = 1';

    $statement = $pdo->prepare($sql);  
    $statement -> bindValue(1, '%'.$search_text.'%');  
    $statement->execute();  


    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll();
    foreach($data as $index => $row){
        if($row['member_id'] == 0){
            echo "<li class='searchBar_item'><a class='collection_search_a' href='#' data-id='".$row['work_id']."'>".$row['work_name']."</a></li>";
        }else{
            echo "<li class='searchBar_item'><a class='work_search_a' href='#' data-id='".$row['work_id']."'>".$row['work_name']."</a></li>";
        };
    }
?>
