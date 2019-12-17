//https://www.codewars.com/kata/area-of-a-square/train/javascript
/*Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input.
Return the result rounded to two decimals.
Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)*/

function squareArea(A){
    // find the Length of circle
    let C = A * 4;
    //find radius
    let r = C / (2 * Math.PI);
    //find the Square
    let a = r ** 2;
    //round to two decimals
    let b = a.toFixed(2)
    return +b;
}

console.log(squareArea(2));

