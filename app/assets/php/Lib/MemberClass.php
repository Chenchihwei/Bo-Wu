<?php
    class MemberClass {   
        
        //清除Session
        function clearSession(){
            if(!isset($_SESSION)){
                session_start(); 
            }
            session_unset();
            session_destroy();
        }

        //--------------------------------------以下為後台使用--------------------------------------

        //取得Session(後台專用)
        function getSessionB(){
            if(!isset($_SESSION)){
                session_start(); 
            }
            return isset($_SESSION["BackendUserID"]) ? $_SESSION["BackendUserID"] : "";             
        }

        //寫入Session(後台專用)
        function setSessionB($UserID){
            if(!isset($_SESSION)){
                session_start(); 
            }
            $_SESSION["BackendUserID"] = $UserID;
        }

        //--------------------------------------以下為前台使用--------------------------------------

        //取得會員ID(前台專用)
        function getMemberID(){
            if(!isset($_SESSION)){
                session_start(); 
            }
            return isset($_SESSION["MemberID"]) ? $_SESSION["MemberID"] : ""; 
        }

        //取得會員帳號(前台專用)
        function getMemberName(){
            if(!isset($_SESSION)){
                session_start(); 
            }
            return isset($_SESSION["MemberName"]) ? $_SESSION["MemberName"] : ""; 
        }

        //寫入Session(前台專用)
        function setMemberInfo($MemberID, $MemberName){
            if(!isset($_SESSION)){
                session_start(); 
            }
            $_SESSION["MemberID"] = $MemberID; //Table 'ec_member'裡的ID欄位值
            $_SESSION["MemberName"] = $MemberName; //Table 'ec_member'裡的Account欄位值
        }
        
    }
?>