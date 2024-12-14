function addition(a,b){
    return (a+b);
}

function subtraction(a,b){
      return (a-b);
}

// module.exports = addition;

// module.exports = {
//     addition,
//     subtraction
// }

exports.addn = (a,b)=> a+b;
exports.subn = (a,b)=> a-b;