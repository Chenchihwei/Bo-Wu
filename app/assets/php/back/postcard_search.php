<?php
    include('../Conn.php');
    $select = $_POST["select"];
    $textbox = $_POST["textbox"];
    $status = $_POST["status"];



    if($textbox !=''){
        if( $select == 'work_id'){
            $sql = 'SELECT * FROM postcard where postcard_exhibition =? and postcard_id like ?';
            $statement = $pdo->prepare($sql);
            $statement -> bindValue(1, $status);    
            $statement -> bindValue(2, '%'.$textbox.'%');    
            $statement->execute();  
        }else if($select == 'work_name'){ 
            $sql = 'SELECT * FROM postcard where postcard_exhibition =? and postcard_name like ?';
            $statement = $pdo->prepare($sql);
            $statement -> bindValue(1, $status);    
            $statement -> bindValue(2, '%'.$textbox.'%');    
            $statement->execute();  
        }else{
            if($textbox == '背景'||$textbox == '景'||$textbox == '背'){
                $textbox = 1;
            }else if($textbox =='圖樣'||$textbox =='圖'||$textbox =='樣'){
                $textbox = 2;
            };
            $sql = 'SELECT * FROM postcard where postcard_exhibition =? and postcard_category like ?';
            $statement = $pdo->prepare($sql);
            $statement -> bindValue(1, $status);    
            $statement -> bindValue(2, '%'.$textbox.'%');    
            $statement->execute();  
        }; 
    }else{
        $sql = 'SELECT * FROM postcard where postcard_exhibition =?';
        $statement = $pdo->prepare($sql);
        $statement -> bindValue(1, $status);       
        $statement->execute(); 
    };
   
    include('./postcard_public.php');

?>
