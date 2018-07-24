//Sorting array with numbers without sort() method
function mySort(array) {
    var done = false;
    while (!done) {
        done = true;
        for (var i = 1; i < array.length; i += 1) {
            if (array[i - 1] > array[i]) {
                done = false;
                var tmp = array[i - 1];
                array[i - 1] = array[i];
                array[i] = tmp;
            }
        }
    }

    return array;
}

var numbers = [8, 10, 6, 2, 1, 3, 4, 7, 5, 9];
var letters = ['a', 'c', 'b', 'z', 'f', 'e', 'u'];

mySort(numbers);
mySort(letters);

console.log(numbers);
console.log(letters);