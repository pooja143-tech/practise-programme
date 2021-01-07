//function displayprimenumber(x){
for(var i=1;i<=20;i++){
    if (isprime(i)) {
        console.log(i,"is prime number")
    }
    }    
   // }
function isprime(i){
         var count = 0;
         for (var j = 1; j <=i; j++) {
            if (i % j == 0) {
                 count ++;
             }if(count>2){
                 break;
             }
         }
         if ( count == 2) {
             return true;
         }
         return false;
     }
 
