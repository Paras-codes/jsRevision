// their are two types of data types in js 

// they are divided on the basis of their acces method from the memory 

// 1. PRIMITIVE 
//     String,NUMBER,BIGINT,NULL,undefined,SYMBOL(TO DEFINE SOMTHINGS UNIQUE),BOOLEAN 
const n=null;
let undef;

console.log(typeof n);    //object
console.log(typeof undef); //undefined

//2.Non-Primitive 
    // Array,Functions,Object

    const arr=[];//object
    const func=function(){
        console.log("helloworld");
    };//functionobject

    const obj={
        class:10
    }//object

    console.log(typeof arr);  //object
    console.log(typeof func); //function object
    console.log(typeof obj);  //object 

    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                                // MEMORY CONCEPT

                    
                                // PRIMITIVE(STACK TYPE ALLOCATION),NON-PRIMITIVE(HEAPTYPE ALLOCation )

    let stemp1="kabeer"
    let stemp2=stemp1

    stemp1="khabey";
    console.log(stemp1);//kabeer
    console.log(stemp2);//khabey

    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    const obj1={
        name:"paras",   
    }
    const obj2=obj1;

    obj2.name="sakshi";

    // in this case obj2 is getting the reference of the object that is defined in the heap therefore,if we change something in the reference it will reflect the same 
    console.log(obj1.name);
    console.log(obj2.name);