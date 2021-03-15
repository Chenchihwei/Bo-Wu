<?php
    include("../Lib/UtilClass.php");
    $Util = new UtilClass();
    //建立SQL
    $sql = "SELECT * FROM member WHERE Account = ? and password = ?";

    //執行
    $statement = $Util->getPDO()->prepare($sql);

    //給值
    $statement->bindValue(1, $_POST["fbmail"]);
    $statement->bindValue(2, $_POST["fbid"]);
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

    //判斷是否有註冊重複
    if($memberID == "" && $memberName == ""){
        include("../Lib/MemberClass.php");
        $Member = new MemberClass();
    
        //將會員資訊寫入session
        $Member->setMemberInfo($memberID, $memberName);
        //建立SQL
        $sql = "INSERT INTO member (`member_id`, `name`, `en_name`, `account`, `password`, `email`, `level`, `blacklist`, `introduction`, `join_date`, `bidding_giveup`,`member_img`) VALUES (?, ?, ?, ?, ?, ?, '2', '1', '1', now(), '0',?);";
        //執行 
        $statement = $Util->getPDO()->prepare($sql);
        //日期
        $NowTime=date("Y-m-d H:i:s");
        //給值
        $statement->bindValue(1, strtotime("$NowTime,now"));
        $statement->bindValue(2, $_POST["fbname"]);
        $statement->bindValue(3, $_POST["fbname"]);
        $statement->bindValue(4, $_POST["fbmail"]);
        $statement->bindValue(5, $_POST["fbid"]);
        $statement->bindValue(6, $_POST["fbmail"]);
        $statement->bindValue(7, $_POST["fbimg"]);
        $statement->execute();
        // echo "<script>alert('加入成功，已登入!'); location.href = '../../member_pre.html';</script>";
        echo strtotime("$NowTime,now");
    }else{
        include("../Lib/MemberClass.php");
        $Member = new MemberClass();
  
      //將會員資訊寫入session
        $Member->setMemberInfo($memberID, $memberName);

      //導回產品頁        
    //   echo "<script>alert('登入成功!'); location.href = '../../member_pre.html';</script>"; 
        echo $memberID;
    }
?>
    