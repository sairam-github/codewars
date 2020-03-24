function firstNonConsecutive(arr) {
    // let temp = arr[0];
    // for (let index = 1; index < arr.length; index++) {
    //     if (arr[index] !== temp + 1) {
    //         return arr[index];
    //     }

    //     temp = arr[index];
    // }

    // return null;

    let result = arr.find((val, index) => val !== index + arr[0]);

    return (Number.isInteger(result)) ? result : null;
}


console.log(
    firstNonConsecutive([1, 2, 1])
)