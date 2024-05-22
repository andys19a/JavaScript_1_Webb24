// create class

class Plane{

    constructor(nbrSeats,flyesFrom ,flyesTo){
        this.numberOfSeats = nbrSeats
        this.flyesFrom = flyesFrom;
        this.flyesTo = flyesTo;
        this.pilotes = ["John", "Maria", "Henry"];
    }
    addPilot(pilot){
        this.pilotes.push(pilot)
    };
    removePilot(){
        this.pilotes.pop();
    };

    getPilotsCount(){
        return this.pilotes.length;
    };

};


let bigPlane = new Plane(100, "Dubai", "Mexico City");
let smallPlane = new Plane(25, "Malmo", "Landskrona"); 


console.log(bigPlane);
//bigPlane.removeLastPilot();
console.log(bigPlane);




