function func(str) { 
  
    
    var str = 'It is a great day.'; 
    var reverseSubStr = str.substr(5,6).split('').reverse().join(''); 
    return(reverseSubStr); 
} 
  
var x=func('My name is roja');
console.log(x);