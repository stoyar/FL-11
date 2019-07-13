function addOne(x) {
    return x + 1;
}
function pipe(a) {
    let i;
    let result=a;
    for(i=1; i<arguments.length; i++) {
        result = arguments[i](result);
    }
    return result;
}
pipe(1, addOne, addOne);