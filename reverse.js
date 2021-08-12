function reverseString(str){
    var reverse = "";
    for(i = 0; i <str.length; i++){
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}
var statement = "Hello Alien bhai brother";
var forAlien = reverseString(statement);
console.log(forAlien);
var foodVlog = reverseString("Ki Khao jay, amar khida lagse");
console.log(foodVlog);