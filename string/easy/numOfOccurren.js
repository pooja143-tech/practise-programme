function occurrences(str) {
    let val = {}
    str.split('').sort().forEach( e => {
      val[e] = (val[e] ?val[e]+1 : 1);
      });
    return val;
     }
  var x=occurrences("Ramu is clever boy and he is very honest but sometimes ramu behaves like stupid")

console.log(x)