class Car{
    constructor(name, year){
        this.name = name; 
        this.year = year; 
    }
    tostring(){
        return this.name + " " + this.year; 
    }
}

car1 = new Car("honda", 2020); 
console.log(car1.tostring()); 