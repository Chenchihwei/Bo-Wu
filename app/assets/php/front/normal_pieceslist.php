<?php
    include('../Conn.php');


    $member_id =date('mdHis');
    // 

    $_POST=json_decode(file_get_contents('php://input'));
    $work_name = $_POST->work_name;
    $work_introduction=$_POST->work_introduction;
    $img_path=$_POST->img_path;

    $work_id = date('mdHis');
    // date('mdHis')
 
    // var_dump($img_path);

    // print_r($_POST);

    try {
        //code...

    $sql="INSERT INTO `work`(`work_id`, `work_name`, `member_id`, `work_introduce`, `img_path`, `exhibition`, `verify`) VALUES (:work_id,:work_name,:member_id,:work_introduction,:img_path,:exhibition,:verify);";

    $statement = $pdo->prepare($sql);
    // $statement->bindValue(':work_id', $work_id);       
    // $statement->bindValue(':work_name', $work_name);       
    // $statement->bindValue(':member_id', $member_id);       
    // $statement->bindValue(':work_introduction', $work_introduction);    
    // $statement->bindValue(':img_path', $img_path);  
    // $statement->bindValue(':exhibition', 2);  
    // $statement->bindValue(':verify', 3);  
    
    $input = array(
       ':work_id'=> $work_id,       
       ':work_name'=> $work_name,       
       ':member_id'=> 8,       
       ':work_introduction'=> $work_introduction,    
       ':img_path'=> $img_path,
       ':exhibition'=> 2,
       ':verify'=> 3,
    );
    
    // $statement -> bindValue(':work_id', 1);       
    // $statement -> bindValue(':work_name', '444');       
    // $statement -> bindValue(':member_id', 1);       
    // $statement -> bindValue(':work_introduction', '333');    
    // $statement -> bindValue(':img_path', '3333');  

    // print_r($statement);
    $statement->execute($input);
    echo 'success';
    die();

    } catch (\Throwable $th) {
        echo $th;
    }




    // echo 'yes';

    // $data = $statement->fetchAll();
    
    // foreach(){
    
    // }
    
?>
