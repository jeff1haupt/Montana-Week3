function tooManyReturns(num) {
    if ( num < 5 ) {
        return num * 5;
    } else if (num > 5 && num < 10) {
        return num * 10;
    } else {
        return num * 20;
    }
}

console.log(tooManyReturns(50));