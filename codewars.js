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

//https://www.codewars.com/kata/sum-without-highest-and-lowest-number/train/javascript
/*Sum all the numbers of the array (in F# and Haskell you get a list) except the highest and the lowest element (the value, not the index!).
(The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!)
Example:

{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6

If array is empty, null or None, or if only 1 Element exists, return 0.
Note:In C++ instead null an empty vector is used. In C there is no null. ;-)


-- There's no null in Haskell, therefore Maybe [Int] is used. Nothing represents null.
Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges.
*/


function sumArray(array) {

    if (array == null || array.length <= 1) {
        return 0
    }

    let max = Math.max(...array);
    let min = Math.min(...array);
    let sum = 0
    for (let i = 0; i < array.length; i++){
        sum += array[i];
    }

    return sum - max - min;
}

console.log(sumArray([ 6, 2, 1, 8, 10]));
console.log(sumArray([ 6, 2, 1, 8, 1, 8]));
