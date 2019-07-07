let a1 = Number(prompt('Enter X-coordinate of point A:',''));
let a2 = Number(prompt('Enter Y-coordinate of point A:',''));
let b1 = Number(prompt('Enter X-coordinate of point B:',''));
let b2 = Number(prompt('Enter Y-coordinate of point B:',''));
let c1 = Number(prompt('Enter X-coordinate of point C:',''));
let c2 = Number(prompt('Enter Y-coordinate of point C:',''));
const half = 2;
if(isNaN(a1) || isNaN(a2) || isNaN(b1) || isNaN(b2) || isNaN(c1) || isNaN(c2)) {
  alert('Error. Enter number values.');
} else {
  console.log(c1 === (a1+b1)/half && c2 === (a2+b2)/half);
}