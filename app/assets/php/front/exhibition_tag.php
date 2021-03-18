<?php
    include('../Conn.php');
    $tag = $_POST["tag"];

    // print_r($tag);
    $tag_length = count($tag);  
    // echo $tag_length;
    // for($i = 0; $i<count($tag); $i++){
    //     echo $tag[$i];
    // };
    // echo $tag[0];


    switch($tag_length){
        case 1:
            // echo '1';
            $sql = 'SELECT * FROM work where member_id != 0 and exhibition = 1 and work_introduce like?';
            $statement = $pdo->prepare($sql);
            // $statement->bindValue(1,'%'.$tag[0].'%');
            $statement->bindValue(1,'%'.$tag[0].'%');
            $statement->execute(); 
            break;
        case 2:
            // echo '2';
            $sql = 'SELECT * FROM work where member_id != 0 and exhibition = 1 
                    and (work_introduce like ? or work_introduce like ?)';
            $statement = $pdo->prepare($sql);
            $statement->bindValue(1,'%'.$tag[0].'%');
            $statement->bindValue(2,'%'.$tag[1].'%');
            $statement->execute(); 
            break;    
        case 3:
            // echo '3';
            $sql = 'SELECT * FROM work where member_id != 0 and exhibition = 1 
                    and (work_introduce like ? or work_introduce like ? 
                    or work_introduce like ?)';
            $statement = $pdo->prepare($sql);
            $statement->bindValue(1,'%'.$tag[0].'%');
            $statement->bindValue(2,'%'.$tag[1].'%');
            $statement->bindValue(3,'%'.$tag[2].'%');
            $statement->execute(); 
            break;   
        case 4:
            // echo '4';
            $sql = 'SELECT * FROM work where member_id != 0 and exhibition = 1 
                    and (work_introduce like ? or work_introduce like ? 
                    or work_introduce like ? or work_introduce like ?)';
            $statement = $pdo->prepare($sql);
            $statement->bindValue(1,'%'.$tag[0].'%');
            $statement->bindValue(2,'%'.$tag[1].'%');
            $statement->bindValue(3,'%'.$tag[2].'%');
            $statement->bindValue(4,'%'.$tag[3].'%');
            $statement->execute(); 
            break;   
        case 5:
            // echo '5';
            $sql = 'SELECT * FROM work where member_id != 0 and exhibition = 1 
                    and (work_introduce like ? or work_introduce like ? 
                    or work_introduce like ? or work_introduce like ?
                    or work_introduce like ?)';
            $statement = $pdo->prepare($sql);
            $statement->bindValue(1,'%'.$tag[0].'%');
            $statement->bindValue(2,'%'.$tag[1].'%');
            $statement->bindValue(3,'%'.$tag[2].'%');
            $statement->bindValue(4,'%'.$tag[3].'%');
            $statement->bindValue(5,'%'.$tag[4].'%');
            $statement->execute(); 
            break;   
        case 6:
            // echo '6';
            $sql = 'SELECT * FROM work where member_id != 0 and exhibition = 1
                    and (work_introduce like ? or work_introduce like ? 
                    or work_introduce like ? or work_introduce like ?
                    or work_introduce like ? or work_introduce like ?)';
            $statement = $pdo->prepare($sql);
            $statement->bindValue(1,'%'.$tag[0].'%');
            $statement->bindValue(2,'%'.$tag[1].'%');
            $statement->bindValue(3,'%'.$tag[2].'%');
            $statement->bindValue(4,'%'.$tag[3].'%');
            $statement->bindValue(5,'%'.$tag[4].'%');
            $statement->bindValue(6,'%'.$tag[5].'%');
            $statement->execute(); 
            break;   
        case 7:
            // echo '7';
            $sql = 'SELECT * FROM work where member_id != 0 and exhibition = 1
                    and (work_introduce like ? or work_introduce like ?
                    or work_introduce like ? or work_introduce like ?
                    or work_introduce like ? or work_introduce like ?
                    or work_introduce like ?)';
            $statement = $pdo->prepare($sql);
            $statement->bindValue(1,'%'.$tag[0].'%');
            $statement->bindValue(2,'%'.$tag[1].'%');
            $statement->bindValue(3,'%'.$tag[2].'%');
            $statement->bindValue(4,'%'.$tag[3].'%');
            $statement->bindValue(5,'%'.$tag[4].'%');
            $statement->bindValue(6,'%'.$tag[5].'%');
            $statement->bindValue(7,'%'.$tag[6].'%');
            $statement->execute(); 
            break;   
        case 8:
            // echo '8';
            $sql = 'SELECT * FROM work where member_id != 0 and exhibition = 1
                    and (work_introduce like ? or work_introduce like ?
                    or work_introduce like ? or work_introduce like ?
                    or work_introduce like ? or work_introduce like ?
                    or work_introduce like ? or work_introduce like ?)';
            $statement = $pdo->prepare($sql);
            $statement->bindValue(1,'%'.$tag[0].'%');
            $statement->bindValue(2,'%'.$tag[1].'%');
            $statement->bindValue(3,'%'.$tag[2].'%');
            $statement->bindValue(4,'%'.$tag[3].'%');
            $statement->bindValue(5,'%'.$tag[4].'%');
            $statement->bindValue(6,'%'.$tag[5].'%');
            $statement->bindValue(7,'%'.$tag[6].'%');
            $statement->bindValue(8,'%'.$tag[7].'%');
            $statement->execute(); 
            break;
        case 9:
            // echo '9';
            $sql = 'SELECT * FROM work where member_id != 0 and exhibition = 1
                    and (work_introduce like ? or work_introduce like ?
                    or work_introduce like ? or work_introduce like ?
                    or work_introduce like ? or work_introduce like ?
                     or work_introduce like ? or work_introduce like ?
                     or work_introduce like ?)';
            $statement = $pdo->prepare($sql);
            $statement->bindValue(1,'%'.$tag[0].'%');
            $statement->bindValue(2,'%'.$tag[1].'%');
            $statement->bindValue(3,'%'.$tag[2].'%');
            $statement->bindValue(4,'%'.$tag[3].'%');
            $statement->bindValue(5,'%'.$tag[4].'%');
            $statement->bindValue(6,'%'.$tag[5].'%');
            $statement->bindValue(7,'%'.$tag[6].'%');
            $statement->bindValue(8,'%'.$tag[7].'%');
            $statement->bindValue(9,'%'.$tag[8].'%');
            $statement->execute(); 
            break; 
        case 10:
        // echo '10';
            $sql = 'SELECT * FROM work where member_id != 0 and exhibition = 1
                    and (work_introduce like ? or work_introduce like ?
                    or work_introduce like ? or work_introduce like ?
                    or work_introduce like ? or work_introduce like ?
                    or work_introduce like ? or work_introduce like ?
                    or work_introduce like ? or work_introduce like ?)';
            $statement = $pdo->prepare($sql);  
            $statement->bindValue(1,'%'.$tag[0].'%');
            $statement->bindValue(2,'%'.$tag[1].'%');
            $statement->bindValue(3,'%'.$tag[2].'%');
            $statement->bindValue(4,'%'.$tag[3].'%');
            $statement->bindValue(5,'%'.$tag[4].'%');
            $statement->bindValue(6,'%'.$tag[5].'%');
            $statement->bindValue(7,'%'.$tag[6].'%');
            $statement->bindValue(8,'%'.$tag[7].'%');
            $statement->bindValue(9,'%'.$tag[8].'%');  
            $statement->bindValue(10,'%'.$tag[9].'%');  
            $statement->execute();
            break; 

        default:
        // echo '0';
            $sql = 'SELECT * FROM work where member_id != 0 and exhibition = 1';
            $statement = $pdo->prepare($sql);    
            $statement->execute();
            break;  

        };

    include('./exhibition_work_list_public.php');

?>
