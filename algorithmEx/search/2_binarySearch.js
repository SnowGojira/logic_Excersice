
const array = [3, 5, 6, 9, 11, 18, 20, 21, 24, 30];

function binarySearchRec(array, target, left = 0, right = array.length - 1) {
    //退出条件
    if (right < left) return -1;

    let mid = findMiddleIndex(left, right);

    if (array[mid] === target)
        return mid;
    else if (array[mid] < target)
        return binarySearchRec(array, target, mid + 1, right);
    else if (array[mid] > target)
        return binarySearchRec(array, target, left, mid - 1);
}

function findMiddleIndex(l, r) {
    return Math.floor((l + r) / 2);
}

function binarySearchIter(array, target) {
    let left = 0;
    let right = array.length - 1;

    while (right >= left) {
        let mid = findMiddleIndex(left, right);
        if (array[mid] === target) return mid;
        else if (array[mid] < target) left = mid + 1;
        else if (array[mid] > target) right = mid - 1;
    }

    return -1;
}

console.log(binarySearchRec(array, 6));
console.log(binarySearchIter(array, 6));
