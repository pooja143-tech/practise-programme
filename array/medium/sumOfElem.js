function sumElements(arr){
         sum=arr.reduce((a,b)=>a+b,0)
         return sum; 
 }
 var x=sumElements([1,2,3,4]);
 console.log("sum of elemts are "+" "+sum)