<?php
    include('../Conn.php');

    $work_id = $_POST['work_id'];

    $sql = 'SELECT * FROM bidding_message 
            where work_id = ? 
            order by (message_time)DESC';

    $statement = $pdo->prepare($sql);
    $statement -> bindValue(1, $work_id);       
    $statement->execute();  




    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll();
    echo '<tr class="table-dark">
            <th>展品編號</th>
            <th>留言者</th>
            <th>留言內容</th>
            <th>留言時間</th>
            <th>狀態</th>
        </tr>';

    foreach($data as $index => $row){
        echo '<tr class="table-light"><td>'.$row["work_id"].'</td>';
        echo '<td style="display:none;"><p class="message_id">'.$row["bidding_message_id"].'</p></td>';
        echo '<td>'.$row["member_id"].'</td>';
        echo '<td>'.$row["bidding_messages"].'</td>';
        echo '<td>'.$row["message_time"].'</td>';

        $show = $row["message_show"];
        switch ($show) {
            case "1":
                $show = '封鎖';
                break;
            case "2":
                $show = '取消封鎖';
                break;
            default:
                $show = '錯誤';
                break;
        };
        echo '<td><a href="###" class="message_show">'.$show.'</a></td>';
        
    };
?>

