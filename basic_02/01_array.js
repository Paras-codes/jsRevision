//forms shallow copy i.e it shares the reference when copied
//type=object 

let arr=[1,3,4,5]

/*
.push(val)
.pop() //if you want it returns the poped value and pop the value from array
.unshift (val )// add val from start
.shift()//pop val from front 
*/

// interview question

// console.log(arr.includes(4));//search the element in array and returns boolean result
// console.log(arr.indexOf(9));//gives index if not present than gives -1

const arr1=arr.slice(0,2)//does'nt include end point and returns the copy of expected portion of orignal array
// console.log(arr1);//copy of expected result splice operations does'nt affect the orignal array
// console.log(arr);

const arr2=arr.splice(0,2)//same as slice his action reflect in orignal array
console.log(arr2);
console.log(arr);


