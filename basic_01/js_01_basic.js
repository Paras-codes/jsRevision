const id=5 ;
let id1;
/*
prefer not to use var due tooo it's conflict 
in functional and block scope
*/
console.table([id,id1]);

let t1=5;
let t2=6;
let t3=7;

t1=t2;
t2=t3;
console.log(t1);
console.log(t2);