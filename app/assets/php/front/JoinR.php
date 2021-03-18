<?php
    include("../Lib/UtilClass.php");
    $Util = new UtilClass();
    //建立SQL
    $sql = "SELECT * FROM member WHERE Account = ?";

    //執行
    $statement = $Util->getPDO()->prepare($sql);

    //給值
    $statement->bindValue(1, $_POST["mail"]);
    $statement->execute();
    $data = $statement->fetchAll();

    $memberID = "";
    $memberName = "";
    foreach($data as $index => $row){
        $memberID = $row["member_id"];
        $memberName = $row["account"];
    }

    //判斷是否有註冊重複
    if($memberID == "" && $memberName == ""){
        include("../Lib/MemberClass.php");
        $Member = new MemberClass();
    
        //將會員資訊寫入session
        $Member->setMemberInfo($memberID, $memberName);
        //建立SQL
        $sql = "INSERT INTO member (`member_id`, `name`, `en_name`, `account`, `password`, `email`, `level`, `blacklist`, `introduction`, `join_date`, `bidding_giveup`, `member_img`) VALUES (?, ?, ?, ?, ?, ?, '2', '1', '1', now(), '0','./assets/img/men/men1.jpg');";
        //執行
        $statement = $Util->getPDO()->prepare($sql);
        //日期
        $NowTime=date("Y-m-d H:i:s");
        //給值
        $statement->bindValue(1, strtotime("$NowTime,now"));
        $statement->bindValue(2, $_POST["name"]);
        $statement->bindValue(3, $_POST["name"]);
        $statement->bindValue(4, $_POST["mail"]);
        $statement->bindValue(5, $_POST["password"]);
        $statement->bindValue(6, $_POST["mail"]);
        $statement->execute();
       
        
        echo "<script>alert('加入成功，請重新登入!');window.history.back();location.reload();</script>";
        
    }else{
        echo "<script>alert('帳號已申請過!');window.history.back();location.reload();</script>"; 
    }
?>
    

    