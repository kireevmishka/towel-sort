// You should implement your task here.

module.exports = function towelSort(matrix) {
    let res = [];
    if (!Array.isArray(matrix) || matrix.length == 0) {
        return res;
    }
    for (let i = 0; i < matrix.length; i++) {
        i & 1 ? matrix[i].reverse() : {};
        matrix[i].forEach((elem) => {
            res.push(elem);
        });
    }
    return res;
};
