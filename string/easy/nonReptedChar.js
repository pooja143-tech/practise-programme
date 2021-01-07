function nonrepeated(str){
    for ( var i=0;i<=str.length;i++){
        var c=str[i];
        if(str.indexOf(c)==i&&str.indexOf(c,i+1)==-1){
            console.log(c) ;
        }
    }
    return null;
}
var x=nonrepeated('pooja')
