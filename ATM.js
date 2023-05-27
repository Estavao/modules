let pin =1234;
let attempt =3 

while(attempt >0){
var inputnum = console.log("Get Number");


if(inputnum===pin){
console.log("Access granted");
break;
}else{ 
    attempt--;
    console.log("Access Denied, you have got " + attempt);
 }
}

if(attempt===0){
console.log("You have 0 attempts remaing");
}