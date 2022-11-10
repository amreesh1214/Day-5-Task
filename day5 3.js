// Return all the palindromes in an array
var arr = [ "aba" , "abc" , "xyz" , "madam" , "amma" ];

var result = arr. filter ( function ( str ) {

return str == str. split ( "" ). reverse (). join ( "" );

});

console . log (result);

