const array = [3, 5, 6, 9, 11, 18, 20, 21, 24, 30];

function ternarySearch(array, target,
    left = 0,
    right = array.length - 1) {
    //退出条件
    if (right < left) return -1;

    let oneThirdStep = Math.floor((right - left) / 3);
    let mid1 = left + oneThirdStep;
    let mid2 = right - oneThirdStep;

    if (array[mid1] === target)
        return mid1;
    else if (array[mid2] === target)
        return mid2;
    else if (target > array[mid2])
        return ternarySearch(array, target, mid2 + 1, right);
    else if (target > array[mid1] && target < array[mid2])
        return ternarySearch(array, target, mid1 + 1, mid2 - 1);
    else if (target < array[mid1])
        return ternarySearch(array, target, left, mid1 - 1);
}

console.log(ternarySearch(array, 9));