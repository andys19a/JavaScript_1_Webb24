// array [1,2,"3"] - 2 nr och en string

// objekt{"firstAb" = 1,
//nexttext = 2}


let myArray = [1,2,3,4,5,6,7,8,9];
console.log(myArray);
console.log("MyArray length is:" + myArray.length);

let lengd = myArray.length;
console.log("myArray length is:" + lengd)

let valueOnIndexZero = myArray[0];
console.log("value on index zero: " + valueOnIndexZero);


//get last index value
let valueOnLastIndex = myArray[lengd-1];
console.log("value on last index: " + valueOnLastIndex);

//adding element at the end of the list
myArray.push ("10");
console.log(myArray);
console.log("myArray length is:" + lengd);

//update lengd var
lengd = myArray.length;
console.log("length var efter updated value, after push" + lengd);


//remove last element of the list
let deletedLastIndex = myArray.pop();
console.log("last element deleted " + myArray);
console.log("last index value that was deleted was " + deletedLastIndex);


let anotherdeletedLastIndex = myArray.pop();
console.log("last element deleted " + myArray);
console.log("Another index value that was deleted was " + anotherdeletedLastIndex);

let newValue = 100;
myArray.push(newValue);
console.log(myArray);

//for loop with push and pop
for(let i = 0; i <= myArray.length-1; i++){
console.log ("we are on index" + i)
console.log(myArray[i]);

}

//for loop that print out values from the end

for(let i = myArray.length-1; i >= 0; i--){
    console.log ("we are on index" + i);
    console.log(myArray[i]);
    
    }

//matrix for double for loop
function changeMatrixSize(){


let rows = document.getElementById("slider").getAttribute("value");
let cols = document.getElementById("slider").getAttribute("value");
console.log(slider.value);

let matrix = [];

for(let i = 0; i < rows; i++){
    // create empty inner list
    let row = [];
    for(let j = 0; j < cols; j++){
        //push values to inner list
        row.push(j);

    }
    //push inner list to outer list
    matrix.push(row);

}

console.log(matrix);
}


console.log("array beofre splicing" + myArray);
//delete index values in interval 2-5
// end index is not included in the operation
//only index 2,3,4 is going to be deleted

let deletedArrayItems = myArray.splice(2,5);
console.log("this is the deleted part : " + deletedArrayItems)
console.log("This is what's left in "  + myArray);

//replace elements in interval 0-2

console.log("replace elements in interval 0-2");
myArray.splice(0,2,0,0);
console.log("my array after replacing interval with zero" + myArray)

// slice values in interval in index interval 0-3

let slicedArrayItems = myArray.slice(0,3);
console.log("my array after slicing interval 0-3" + myArray);
console.log("sliced items in index interval 0-3" + slicedArrayItems);



// delete the middle index in the array

//let listMiddleIndex = (myArray.length-1)/2;

//myArray.splice(listMiddleIndex, listMiddleIndex+1);

//console.log(myArray);

// for loop vs while loop

for (let i = 0; i < 10; i++ ){
    console.log(i);
}

let m = 0;

while(m < 10){
    console.log(m);

    m++;
}


//while loop with event

let isRunning = true;
let counter = 0;
let increment = 1;



while(isRunning){
    counter = counter + increment

    console.log(counter);

}




function backwards (){
    increment = -1;
}

function forward(){
    increment = +1;
}

function stop(){
    isRunning = false;
}

