let side_a = Number(prompt('Enter length of side a: ', ''));
let side_b = Number(prompt('Enter length of side b: ', ''));
let side_c = Number(prompt('Enter length of side c: ', ''));
if(isNaN(side_a) || isNaN(side_b) || isNaN(side_c) ||side_a <= 0 || side_b <=0 || side_c <=0) {
  console.log('Error! Wrong value of length.')
} else if (side_a+side_b<=side_c || side_a+side_c<=side_b || side_c+side_b<=side_a) {
    console.log('Triangle doesn’t exist');
} else if (side_a === side_b && side_a === side_c) {
      console.log('Eequivalent triangle');
} else if (side_a === side_b || side_b === side_c || side_a === side_c) {
       console.log('Isosceles triangle');
} else {
       console.log('Normal triangle');
}