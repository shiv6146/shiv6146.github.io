<?php

class MemoryGame{
    
    private function connectDB(){
        $dbh=mysqli_connect("mysql9.000webhost.com","a3337531_gameuse","aezakmia1","a3337531_game");
        if($dbh->connect_errno)
            die("Error Connecting to the Database");
        else
            return $dbh;
    }
    
    private function userAvailable($name){
        $db=self::connectDB();
        $qry="SELECT * FROM gamedata WHERE name='$name'";
        $result=$db->query($qry);
        if($result->num_rows!=0)
            return true;
        else
            return false;
    }
    
    function testInput($data){
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
    
    function putDetails($name,$time){
        $db=self::connectDB();
        if(self::userAvailable($name))
            $qry="UPDATE gamedata SET score=$time WHERE name='$name'";
        else
            $qry="INSERT INTO gamedata VALUES('$name',$time)";
        $db->query($qry);
    }
    
    function getTop10(){
        $db=self::connectDB();
        $qry="SELECT * FROM gamedata ORDER BY score LIMIT 10";
        $res=$db->query($qry);
        if($res)
            return $res;
        else
            echo "Error in getTop10";
    }
    
    function getTotal(){
        $db=self::connectDB();
        $qry="SELECT * FROM gamedata";
        $res=$db->query($qry)->num_rows;
        return $res;
    }
}