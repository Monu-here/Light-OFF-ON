function bulbOn(){
    let bulbobj =  document.querySelector(".bilboff");
    bulbobj.setAttribute( "src","img/on.png");
}
// document.write("hello");
function bulbOff(){
    let bulbobj =  document.querySelector(".bilboff");
    bulbobj.setAttribute( "src","img/off.png");
}
// document.write("hello");





//// New operation

function add(){

    num1 = Number(document.getElementById("num1").value);
    num2 = Number(document.getElementById("num2").value);
    sum = num1+num2;
    document.getElementById("add").value = sum.toFixed(3);

}
