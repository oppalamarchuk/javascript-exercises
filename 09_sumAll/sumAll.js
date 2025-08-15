const sumAll = function(a,b) {
    if( !Number.isInteger(a) || !Number.isInteger(b) ||a<0 || b<0)
        return "ERROR"
    // swap a and b
    if(a>b) {
        let temp = a;
        a=b;
        b=temp;
    }
    let sum = 0
    for (let i = a; i < b+1; ++i) {
        sum +=i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
