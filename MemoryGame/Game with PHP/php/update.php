<?php

require "class.php";

$game=new MemoryGame();

$name=$_POST['name'];
$score=$_POST['score'];

$name=$game->testInput($name);

if(is_numeric($score))
    $score=intval($score);
else 
    die("Score is not a number");

$game->putDetails($name,$score);

echo "done here";
