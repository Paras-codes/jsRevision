//iffe to avoid pollution through global socpe declared variables
//two ifffe in the file 
//unnamed iffe 
((name)=>{
    console.log(`DB connected ${name}`);
})("Paras");//without ; it cant figure out the context to stop 

//named iffe
(function chai(){
    console.log(`DB connected`);
})();