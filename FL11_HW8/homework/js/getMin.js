function getMin() {
    let minimal = arguments[0];
    let i;
    for(i=1; i<=arguments.length; i++) {
        if (minimal > arguments[i]) {
        minimal = arguments[i];
        }
    }
    return minimal;
}
getMin(0,1);