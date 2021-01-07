function displayprimenumber(arr){
    for(var index=0;index<=arr.length;index++){
       var val=arr[index];
       if(isprime(val)){
           console.log(val,"is prime number")
        }  
    }
}    
    function isprime(n){
        var count=0;
        for (var i=1;i<=n;i++){     //
            if(n%i==0){
                count++;
            }
        }
        if (count==2){
            return true;
        }
        return false;
    }
    displayprimenumber([1,3,4,7,9]);