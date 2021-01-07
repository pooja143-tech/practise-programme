
function dublicateCount(str){
 var count = {};
 Count=str.forEach(function(i) {count[i] = (count[i]||0) + 1;});
return count;
}
var x= dublicateCount(["a","b","c","d","d","e","a","b","c","f","g","h","h","h","e","a"])
 console.log(x)
