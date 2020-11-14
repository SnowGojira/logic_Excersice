function linearSearch(array, target) {
    for (el of array) {
        if (el === target) return true;
    }

    return -1;
}

console.log(linearSearch([6, 2, 5, 4, 3, 7], 1));