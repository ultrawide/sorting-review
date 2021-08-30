// The merge sort algorithm operates by dividing the array into two equal chunks.
// Each chunk is further split into two more halves until it reaches the base case - there are no elements to split up.
// In such an event, we will sort the elements
function mergeSort(array) {
    if (array.length <= 1)
        return array;

    let midIndex = Math.floor(array.length / 2);

    let leftArray = array.slice(0, midIndex);
    let rightArray = array.slice(midIndex);

    return sort(mergeSort(leftArray), mergeSort(rightArray));
}

function quickSort(array) {
    if (array.length <= 1)
        return array;

    let pivot = Math.floor(array.length / 2);

    smallerThan = [];
    for (let i = 0; i < array.length; i++) {
        // skip the pivot
        if (i === pivot)
            continue;

        if (array[i] <= array[pivot])
            smallerThan.push(array[i]);
    }

    let greaterThan = [];
    for (let i = 0; i < array.length; i++) {
        // skip the pivot
        if (i === pivot)
            continue;

        if (array[i] > array[pivot])
            greaterThan.push(array[i]);
    }

    return [...quickSort(smallerThan), array[pivot], ...quickSort(greaterThan)];
}

function sort(leftArray, rightArray) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
        if (leftArray[leftIndex] < rightArray[rightIndex])
            result.push(leftArray[leftIndex++]);
        else
            result.push(rightArray[rightIndex++]);
    }

    return result.concat(leftArray.slice(leftIndex), rightArray.slice(rightIndex));
}

console.log(mergeSort([9, 2, 32, 8, -1, -4, 0, 3, 5, 6]));
console.log(quickSort([9, 2, 32, 8, -1, -4, 0, 3, 5, 6]));
