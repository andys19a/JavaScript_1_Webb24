let array = [5,5,5];

let sum = 0

for (let i = 0; i < array.length; i++){
    sum += array [i]
}

console.log(sum)

let myName = "Andre";
let age = 27;
console.log (myName + age )

console.log (`${myName} ${age}`);

class student{
    constructor(namn, ålder, kurser) {
        this.namn = namn;
        this.ålder = ålder;
        this.kurser = kurser;
    }

}

let person1=new student("Ola", 25, ["Svenska", "matte", "psykologi"]);
let person2=new student("Conny",35, "Engelska");
let person3=new student("Lova",45, "Spanska");

console.log(person1);
console.log(person2);
console.log(person3);

let studentNy = ["Lisa", "Jonas"]

person1.push(studentNy);