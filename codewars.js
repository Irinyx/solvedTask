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

//https://www.codewars.com/kata/sum-of-odd-cubed-numbers/train/javascript
/*Find the sum of the odd numbers within an array, after cubing the initial integers.
The function should return undefined if any of the values aren't numbers.*/

function cubeOdd(arr) {

    let sum = 0;
    let str = undefined;

    for(let i = 0; i < arr.length; i++){

        if(arr[i] % 2 !== 0){
            sum += Math.pow(arr[i], 3)
        }
        if(typeof arr[i] !== "number"){
            return str;
            break;
        }
    }

    return sum;
}

console.log(cubeOdd([1, 2, 3, 4]));
console.log(cubeOdd([-3,-2,2,3]));
console.log(cubeOdd(["a",12,9,"z",42]));




