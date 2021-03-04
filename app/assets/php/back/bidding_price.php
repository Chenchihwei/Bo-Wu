<?php
    include('../Conn.php');

    $work_id = $_POST['work_id'];

    $sql = 'SELECT * FROM bidding_price 
            where work_id = ? 
            order by (bidding_time)DESC';

    $statement = $pdo->prepare($sql);
    $statement -> bindValue(1, $work_id);       
    $statement->execute();  




    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll();
    echo '<tr class="table-dark">
            <th>展品編號</th>
            <th>出價者</th>
            <th>出價金額</th>
            <th>出價時間</th>
        </tr>';

    foreach($data as $index => $row){
        echo '<tr class="table-light"><td>'.$row["work_id"].'</td>';
        echo '<td style="display:none;"><p class="message_id">'.$row["bidding_price_id"].'</p></td>';
        echo '<td>'.$row["member_id"].'</td>';
        echo '<td>'.$row["bidding_price"].'</td>';
        echo '<td>'.$row["bidding_time"].'</td>';
        
    };
?>

