<?php
    include("../Lib/UtilClass.php");
    $Util = new UtilClass();

    //建立SQL
    $sql = "SELECT * FROM team3.like_list where work_id = ? and member_id = ? ";

    //執行
    $statement = $Util->getPDO()->prepare($sql);

    //給值
    $statement->bindValue(1, $_POST["work_id"]);
    $statement->bindValue(2, $_POST["member_id"]);
    $statement->execute();
    $data = $statement->fetchAll();

    $like_id = "";
    foreach($data as $index => $row){
        $like_id = $row["like_id"];
    }

    if($like_id == ""){
      //建立SQL
      $sql = "INSERT INTO `team3`.`like_list` (`like_id`, `work_id`, `member_id`, `like`) VALUES (?, ?, ?, ?)";
  
      //執行
      $statement = $Util->getPDO()->prepare($sql);
      // //時間
      $NowTime=date("Y-m-d H:i:s");
      //給值
      $statement->bindValue(1, strtotime("$NowTime,now"));
      $statement->bindValue(2, $_POST["work_id"]);
      $statement->bindValue(3, $_POST["member_id"]);
      $statement->bindValue(4, $_POST["like"]);
      $statement->execute();

    }else{
      $sql = "UPDATE `team3`.`like_list` SET `like` = ? WHERE (`like_id` = $like_id)";
  
      //執行
      $statement = $Util->getPDO()->prepare($sql);
      //給值
      $statement->bindValue(1, $_POST["like"]);
      $statement->execute();

    }

?>
