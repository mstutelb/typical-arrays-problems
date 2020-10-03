exports.min = function min(array) {
    if (!array || !array.length) return 0;

    let result = array[0];

    array.forEach((element) => {
        result = element < result ? element : result;
    });
    return result;
};

exports.max = function max(array) {
    if (!array || !array.length) return 0;

    let result = array[0];

    array.forEach((element) => {
        result = element > result ? element : result;
    });
    return result;
};

exports.avg = function avg(array) {
    if (!array || !array.length) return 0;
    const sum = array.reduce((acc, item) => {
        return acc + item;
    }, 0);


    return sum/array.length;
};
