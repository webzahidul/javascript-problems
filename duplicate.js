var student = [1, 5, 8, 4, 1, 4, 5];
var uniqueStudent = [];

for(var i = 0; i < student.length; i++) {
    var element = student[i];
    var index = uniqueStudent.indexOf(element);
    if(index == -1){
        uniquestudent.push(element);
    }
}
console.log(uniqueStudent);