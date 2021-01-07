
 function average(arr){
     
    sum=arr.reduce((a,b)=>a+b,0)
    console.log(sum+" "+"is sum")
         total=arr.length;
         return average=(sum/total);
     }
 
 var x= average([1,2,3,7,9,10])
 console.log(x+" "+"is average")

