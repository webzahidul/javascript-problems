var marks = [45, 22, 55, 88, 98, 77, 66];
var max = marks[0];

for(i = 0; i < marks.length; i++) {
    var element = marks[i];
    if(element > max){
        max = element;
    }
}
console.log("Highest marks is = ", max);