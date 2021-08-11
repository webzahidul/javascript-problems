function getArraySum(numbers) {
    var sum = 0;
    for (i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
var numbers = [45, 55, 66, 87, 90, 54];
var result = getArraySum(numbers);
console.log("Sum of the number is: ", result);

var total = getArraySum([33, 45, 66, 87, 98]);
console.log("Sum of the number is: ", total);