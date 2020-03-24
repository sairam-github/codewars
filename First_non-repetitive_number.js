// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/train/javascript

function firstNonRepetitive(arr) {
    let myMap = new Map();
    arr.forEach(c => {
        if (typeof myMap.get(c) === "undefined") {
            myMap.set(c, 1);
        } else {
            myMap.set(c, myMap.get(c) + 1);
        }
    })

    let result = -1;

    for (let key of myMap.keys()) {
        if (myMap.get(key) < 2) {
            result = key;
            break;
        }
    }

    return (result === -1) ? null : result;
}

console.log(firstNonConsecutive([3, 1, 3, 1, 6, 8, 8, 6]));