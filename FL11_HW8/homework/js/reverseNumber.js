function reverseNumber(norm) {
    let sign = 1;
    if(norm < 0) {
        sign = -sign;
        norm = -norm;
    }
    let reversed = 0;
    let dec = 10;
    while (norm >= 1) {
        reversed *= dec;
        reversed += Math.floor(norm) % dec;
        norm = norm / dec;
    }
return reversed*sign;
}
reverseNumber(1);