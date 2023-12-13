let numbers = [135, 2, 1, 4, 77, 105, 12, 0, 9, 106];

function findMaxNumber(arr) {
    let i = 0;
    let max = arr[0];

    while (i < arr.length) {
        if (arr[i] > max) {
            max = arr[i];
        }
        i++
    }
    return max;
}

console.log(findMaxNumber(numbers));