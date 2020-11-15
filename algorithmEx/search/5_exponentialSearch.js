const array = [3, 5, 6, 9, 11, 18, 20, 21, 24, 30];

function exponentialSearch(array, target) {
    let bound = 1;
    while (bound < array.length && target > array[bound]) {
        bound *= 2;
    }

    for (let i = Math.floor(bound / 2);
        i <= Math.min(bound, array.length - 1);
        i++) {
        if (array[i] === target) return i;
    }

    return -1;
}

console.log(exponentialSearch(array, 30))