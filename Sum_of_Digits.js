// https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript

function digital_root(n) {
    return digital_sum(n);
}

function digital_sum(n) {
    if (n < 10) return n;

    let numSum = n.toString().split('').reduce(
        function (a, c) {
            return (+a) + (+c);
        }
    );

    return digital_sum(numSum);
}


console.log(digital_root(25));