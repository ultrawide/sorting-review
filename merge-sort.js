const merge = (leftArr, rightArr) => {
    const output = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArr.length || rightIndex < rightArr.length) {
        if (leftArr[leftIndex] <= rightArr[rightIndex]) {
            output.push(leftArr[leftIndex]);
            leftIndex++;
        } else {
            output.push(rightArr[rightIndex]);
            rightIndex++;
        }
    }

    return [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)];
};

function mergeSort(array) {
    // change code below this line
    if (array.length <= 1) {
        return array;
    }

    const middleIndex = Math.floor(array.length / 2);
    const leftArray = array.slice(0, middleIndex);
    const rightArray = array.slice(middleIndex);

    return merge(
        mergeSort(leftArray),
        mergeSort(rightArray)
    );
}

console.log(mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5463, 63, 123, 43, 2, 55, 1, 234, 92]));
