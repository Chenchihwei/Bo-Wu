<?php
    include('../Conn.php');
    
    $search_text = $_POST['search_text'];

    $sql = 'SELECT * 
            FROM advanced a
                join member m
                on a.member_id = m.member_id
            where m.name like ?';

    $statement = $pdo->prepare($sql);  
    $statement -> bindValue(1, '%'.$search_text.'%'); 
    $statement->execute();    


    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll();
    foreach($data as $index => $row){
        echo '<li class="searchBar_item"><div class="personalRoom"></div>';
        echo "<a class='personal_search_a' href='#' data-id=".$row['member_id'].">".$row['name']."'s personal exhibits</a></li>";
    }
?>
