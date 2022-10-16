/* 
5. Write a code which can give grades to students according to theirs scores:

a. 80-100, A
b. 70-89, B

c. 60-69, C
d. 50-59, D
e. 0-49, F

*/

let math=80;
let physics=90;
let chemistry=78;
let biology=89;
let english=95;

let total=(math+physics+chemistry+biology+english)/5.0;

console.log(`Average of the student is ${total}`)

if(total=>80 && total<=100){
    console.log(' Grad A');
}
else if(total=>70 && total<=89){
    console.log('Grad B');
}
else if(total=>60 && total<=69){
console.log('Grad C');
}
else if(total=>50 && total<=59){
    console.log('Grad D');
}
else if(total=>0 && total<=49){
    console.log('Grad F');
}
else{
    console.log("Invalid........");
}

// ====================================OUTPUT===============================

/* 
Average of the student is 86.4
Grad A

*/