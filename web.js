function update() {
console.log("event is fired");

//i want to create variable
var x=10;
var y=20;
console.log(x*y);
//i want to create variable in js file
function sum(a,b){
    return a+b;
    //if i want to assign function to variable
    var mysum = sum;
    console.log(mysum)
}
}