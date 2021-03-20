<?php 

echo "<h1> hello world </h1>"; 

class Fruit {
    public $name; 
    public $color; 

    function __construct($name, $color){
        $this->name = $name; 
        $this->color = $color; 
    }

    function get_name(){
        return $this->name; 
    }
    function get_color(){
        return $this->color; 
    }
}

$apple = new Fruit("apple", "red"); 
// echo $apple->get_name()
echo "apple name:".$apple->get_name()." apple color:".$apple->get_color();

require("footer.php")
?>