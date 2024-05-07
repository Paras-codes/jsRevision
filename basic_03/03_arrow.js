const obj={
      username:"Paras",
      age:18,

      welcomeuser:function(){
        console.log(this.username)
        console.log(this);//consist the reference of the object in which it is called
      }
}

// obj.welcomeuser();

// console.log(this);//it rturns a global object   {}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++interesting++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
console.log(this);
in console= return window object;
in node =return {};
*/


function chai(){
    let username="Paras";
    console.log(this.username);//undefined 
    console.log(this);//return whole global object with many keys 
}
// chai()

//this is only for object context cant be used in functions


const chai2=()=>{
    let username="Paras";
    console.log(this.username);//undefined 
    console.log(this)//{} as global object 
}
// chai2();


//interview question
//difference in function and arrow function
// we can't use this in any function and if used for acessing variable it will give undefine as answer and on logging this it will return global objects 


// explicit return 

const addtwo=(num1,num2)=>{
    return num1+num2;
}

// implicit return
const add3=(num1,num2)=> num1+num2;///without return not for object

const add4=(num1,num2)=>(num1+num2)
const add5=()=>({username:Paras,
age:18})
console.log(add5());
//for object one liner without return 
