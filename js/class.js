class Player{
    constructor(name , age , goal){
        this.name=name;
        this.age=age;
        this.location="Bangladesh"
    }
    goal(){
        console.log("score a goal");
    }

}
const  player1= new Player("Sakib",23);
console.log(player1)
const player2= new Player("shanto", 40)
console.log(player2);