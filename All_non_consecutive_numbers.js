function allNonConsecutive(arr) {
    let indexArray = [];

    for (let index = 0; index < arr.length - 1; index++) {
        if (arr[index + 1] !== arr[index] + 1) {
            indexArray.push(
                {
                    i: index + 1,
                    n: arr[index + 1]
                }
            )
        }
    }

    return indexArray;
}

console.log(allNonConsecutive([1, 2, 3, 4, 6, 7, 8, 10]));