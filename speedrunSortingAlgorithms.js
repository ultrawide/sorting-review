// The merge sort algorithm operates by dividing the array into two chunks of ~equivalent length.
// Each chunk is further split into two more halves until it reaches the base case - there are no elements to split up.
// When the base case is reached, the array is in its smallest size and are combined together again in an ascending order.
function mergeSort(array) {
    if (array.length <= 1)
        return array;

    let midIndex = Math.floor(array.length / 2);

    let leftArray = array.slice(0, midIndex);
    let rightArray = array.slice(midIndex);

    return sort(mergeSort(leftArray), mergeSort(rightArray));
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

// The quicksort operates in similar fashion to the merge sort, but is easier to implement. 
// It behaves similar to the merge sort where it continuously divides the array into smaller elements.
function quickSort(array) {
    if (array.length <= 1)
        return array;

    let pivot = Math.floor(array.length / 2);

    // Can optimize further. In some cases, in certain application specific context, we can optimize the quick sort to exit early.
    // Say we want to look for the smallest two values in the sorted array, we can exit early. We know that methods are evaluated left to right.
    // Because of this, we know that the '...quickSort(smallerThan)' the initial call in the call stack will contain the smallest values.
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

console.log(mergeSort([9, 2, 32, 8, -1, -4, 0, 3, 5, 6]));
console.log(quickSort([9, 2, 32, 8, -1, -4, 0, 3, 5, 6]));
