<?php
    include("../Lib/UtilClass.php");
    $Util = new UtilClass();

    //建立SQL
    $sql = "SELECT * FROM member WHERE Account = ? and password = ?";

    //執行
    $statement = $Util->getPDO()->prepare($sql);

    //給值
    $statement->bindValue(1, $_POST["mail"]);
    $statement->bindValue(2, $_POST["password"]);
    $statement->execute();
    $data = $statement->fetchAll();

    $memberID = "";
    $memberName = "";
    $memberLevel = "";
    $memberBlacklist = "";
    foreach($data as $index => $row){
        $memberID = $row["member_id"];
        $memberName = $row["account"];
        $memberLevel = $row['level'];
        $memberBlacklist = $row['blacklist'];
    }

    //判斷是否有會員資料?
    if($memberID != "" && $memberName != ""){
      include("../Lib/MemberClass.php");
      $Member = new MemberClass();
  
      //將會員資訊寫入session
      $Member->setMemberInfo($memberID, $memberName);

      //導回產品頁        
      echo "<script>alert('登入成功!'); location.href = '../../member_pre.html';</script>"; 
    }else{
      //跳出提示停留在登入頁
      echo "<script>alert('帳號或密碼錯誤!'); location.href = '../../member_pre.html';</script>"; 
    }

?>
    

    