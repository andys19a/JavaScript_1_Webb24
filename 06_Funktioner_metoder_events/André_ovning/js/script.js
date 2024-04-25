runALL();

function runALL(){
myName(); //function executes
sayName("Bob Zob Rob");
sayNames("Lukas");
writeName();
area();

let message = "functions are exciting"
let modifiedMessage = saySomething(message);
console.log(modifiedMessage);


function writeName(){
    let name = "André";
    console.log(name);
}

function myName(){
    let name = "Lukas";
    console.log(name);
}

function sayName(name){
    console.log(name);
}

function sayNames(Fname, lname="no Lname"){
    console.log(Fname + " - " +lname);
}

function saySomething(txt){
    let newTxt = "User said that:" + txt
    return newTxt;

}

function area (width, height){
    let rectangle = parseInt(height) * parseInt(width);

}

    
//scope

let var1 = "variable in outer scipt";
let var4;
let var5;

function func(){
    let var2 = "variable in function scope"

    if (true){
    let var3 = "variable in if statement scope";
     var4 = "variable initialised if statement scope";
     var5 = "variable is initialised ONLY if fuc is executed";
    console.log(var1);

    }

}

console.log(var5);
func();
console.log(var4);

}


// Scope example




let count = 0;

function add(){
    count = count + 1;
    let h1 = document.createElement("h1");
    h1.innerText = count;
    document.body.appendChild(h1);
    console.log(count);
}



