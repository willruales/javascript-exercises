const fibonacci = function (count) {
    if (count <= 0) { return "OOPS" }
    let a = 0
    let b = 1
    for (let i = 1; i < count; i++) {
        const temp = b; //1// 2// 3//
        b = a + b; //1// 2//  3// 5//
        a = temp; //1// 1//   2// 3//
    }
    return b
};
// Do not edit below this line
module.exports = fibonacci;
