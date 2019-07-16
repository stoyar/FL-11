//task 0
function getNumbers(string_num) {
   return string_num.match(/\d/g);
}
getNumbers('n1um3ber95');

//task 1 
function findTypes(...d_input) {
    let d_types = {};
    for(let i = 0; i < d_input.length; i++) {
        let d_type = typeof d_input[i];
        if (d_types.hasOwnProperty(d_type)) {
            d_types[d_type] += 1;
        } else {
            Object.defineProperty(d_types, d_type, {
                writable: true,
                value: 1
            });
        }
    }
    return d_types;
}
findTypes(true, true, 'parampampam', 'ert', 1, 0, 1,0,0,1);

//task 2
function func(el) {
    console.log(el);
}
function executeforEach(input_array, callback) {
    for (let i = 0; i < input_array.length; i++) {
        callback(input_array[i]);
    }
}
executeforEach([1,0,1,0,1], func);

//task 3
function increaser(x) {
    let three = 3;
    return x + three;
}
function mapArray(inp_array) {
    executeforEach(inp_array, increaser);
    return inp_array;
}
mapArray([0, 1, 0]);