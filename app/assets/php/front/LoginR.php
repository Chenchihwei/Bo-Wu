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
    $member_img="";
    foreach($data as $index => $row){
        $memberID = $row["member_id"];
        $memberName = $row["account"];
        $memberLevel = $row['level'];
        $memberBlacklist = $row['blacklist'];
        $member_img = $row['member_img'];
        $name = $row['name'];
    }

    //判斷是否有會員資料?
    if($memberID != "" && $memberName != "" && $memberBlacklist == "1"){
      include("../Lib/MemberClass.php");
      $Member = new MemberClass();
  
      //將會員資訊寫入session
      $Member->setMemberInfo($memberID, $memberName);

      //導回產品頁        
        echo "<script>let task = {
              'id':".$memberID.",";
        echo "'status': 'normal',
              'sign': 1,
              'pic':'".$member_img."', 
              'name':'".$name."',
              };
              let tasks = JSON.parse(localStorage.getItem('tasks'));
              if(tasks){ // 若存在
              tasks.unshift(task);
              }else{ // 若不存在
                tasks = [task];
              }
              localStorage.setItem('tasks', JSON.stringify(tasks));</script>
          ";



      echo "<script>alert('登入成功!');window.history.back();location.reload();</script>"; 

    }else if($memberBlacklist == "2"){
      echo "<script>alert('此帳號為黑名單!');window.history.back();location.reload();</script>";
    }else{
      //跳出提示停留在登入頁
      echo "<script>alert('帳號或密碼錯誤!');window.history.back();location.reload();</script>"; 
    }

?>