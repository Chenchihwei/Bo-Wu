<?php
    include('../Conn.php');

    $edit_id = $_POST["edit_id"];
    $edit_name = $_POST["edit_name"];
    $edit_account = $_POST["edit_account"];
    $edit_password = $_POST["edit_password"];
    // $edit_email = $_POST["edit_email"];
    $edit_level = $_POST["edit_level"];
    $edit_blacklist = $_POST["edit_blacklist"];
    $edit_produce = $_POST["edit_produce"];

    // echo $edit_name;
    // echo $edit_account;
    // echo $edit_password;
    // echo $edit_email;
    // echo $edit_level;
    // echo $edit_blacklist;
    // echo $edit_produce;
    switch ($edit_level) {
        case "高級會員":
            $edit_level = '1';
        break;
        case "普通會員":
            $edit_level = '2';
        break;
        default:
            $edit_level = '錯誤';
    };

    switch ($edit_blacklist) {
        case "黑名單":
            $edit_blacklist = '2';
        break;
        case "白名單":
            $edit_blacklist = '1';
        break;
        default:
            $edit_blacklist = '錯誤';
    };


    $sql = "UPDATE member SET name = ?, account = ?, password = ?, email = ?, level = ?, blacklist = ?, introduction = ? WHERE member_id = ?";


    $statement = $pdo->prepare($sql);
    $statement->bindValue(1 , $edit_name);     
    $statement->bindValue(2 , $edit_account);
    $statement->bindValue(3 , $edit_password);
    $statement->bindValue(4 , $edit_account);
    $statement->bindValue(5 , $edit_level);
    $statement->bindValue(6 , $edit_blacklist);    
    $statement->bindValue(7 , $edit_produce);    
    $statement->bindValue(8 , $edit_id);    
    $statement->execute();  
?>
