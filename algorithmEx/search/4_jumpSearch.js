const array = [3, 5, 6, 9, 11, 18, 20, 21, 24, 30];

function jumpSearch(array, target) {
    let blockSize = Math.floor(Math.sqrt(array.length));
    let start = 0;
    let next = blockSize;

    while (start <= array.length && target > array[next - 1]) {
        start = next;
        next += blockSize;
        if (next > array.length) next = array.length;
    }

    for (let i = start; i < next; i++) {
        if (array[i] === target) return i;
    }

    return -1;
}

console.log(jumpSearch(array, 11))