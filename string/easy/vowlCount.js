function vowels(str) {
    var vowelsCount = 0;
    var string = str.toString();
    for (var i = 0; i <= string.length - 1; i++) { 
      if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
        vowelsCount += 1;
      }
    }
    return vowelsCount;
  }
  var x=vowels("poojapoojitha");
  console.log(x)