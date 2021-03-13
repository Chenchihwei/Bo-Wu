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

    //判斷是否
    if($like_id == ""){
        echo "0"; 
    }else{
        echo "1"; 
    }
?>
    