const name = [1, 5, 8, 4, 1, 4, 5];
var uniqueName = [];

for(var i = 0; i < name.length; i++) {
    var element = name[i];
    var index = uniqueName.indexOf(element);
    if(index == -1){
        uniqueName.push(element);
    }
}
console.log(uniqueName);