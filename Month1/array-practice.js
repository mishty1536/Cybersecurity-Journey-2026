// //Array methods
// //Program 1 (toString)
// let num = [1,2,34,4]
// let b = num.toString()
// console.log(b, typeof b);
// //Program 2 (join)
// let c = num.join("-")
// console.log(c, typeof c);
// //Program 3 (pop)
// let d = num.pop()
// console.log(d, num);
// //Program 4 (push)
// let e = num.push(45)
// console.log(e, num);
// //Program 5 (shift)
// let f = num.shift()
// console.log(f, num);
// //Program 6 (unshift)
// let g = num.unshift(0)
// console.log(g, num);
// //Program 7 (delete)
// console.log(num.length);
// delete num[0]
// console.log(num);
// console.log(num.length);
// //Program 8 (concat)
// let num1 = [1,2,3]
// let num2 = [5,7,10]
// let num3 = num1.concat(num2)
// console.log(num3);
// console.log(num1, num2);
// //Program 9 (sort)
// let num4 = [5,2,9,1,5,6]
// num4.sort()
// console.log(num4);
// //Program 10 (reverse)
// num1.reverse()
// console.log(num1);
// //Program 11 (splice)
// let num5 = [1,2,3,4,5]
// let deletedValues = num5.splice(2, 3, 101, 102, 103, 104)
// console.log(num5);
// console.log(deletedValues);
// //Program 12 (slice)
// let num6 = [1,2,3,4,5]
// let newNum = num6.slice(1,4)
// console.log(newNum);
//Program 13 (Array loop)
//for each
// let num = [3,5,1,2,4]
// num.forEach((element) => {
//     console.log(element * element)
// })
// //Array.from
// let name = "Mishty"
// let arr = Array.from(name)
// console.log(arr)
// // for of
// for(let i of num){
//     console.log(i)
// }
// //for in
// for(let i in num){
//     console.log(i)
// }
//map
// let arr = [45,23,21]
// let a = arr.map((value, index, array) => {
//     console.log(value, index, array)
//     return value + index
// })
// console.log(a)
// //filter
// let arr2 = [45, 23, 21, 0, 3, 5]
// let a2 = arr2.filter((a) => {
//     return a<10
// })
// console.log(a2)
//reduce
// let arr3 = [1, 2, 3, 5, 2, 1]
// let sum =arr3.reduce((h1, h2) => {
//     return h1+h2
// })
// console.log(sum) // 1+2 = 3 => 3+3 = 6 => 6+5 = 11 => 11+2 = 13 => 13+1 = 14

//Practice problem 1 (create an array of numbers and take input from the user to add numbers to this array)
/*let arr = [1, 2, 3, 4, 5, 6, 83]
const prompt = require('prompt-sync')();
let num = prompt("Enter number to be added: ");
num = Number.parseInt(num)
arr.push(num)
console.log(arr)
*/

//Practice problem 2 (keep adding numbers to the array in question 1 until 0 is added to the array)
/*let arr = [1, 2, 3, 4, 5, 6, 83]
let num
do{
    const prompt = require('prompt-sync')();
    num = prompt("Enter number to be added: ");
    num = Number.parseInt(num)
    arr.push(num)
    console.log(arr)
}while(num != 0)
*/

//Practice problem 3 (filter for numbers divisible by 10 from a given array)
/*let arr = [1, 24, 40, 60, 78, 99, 120]
let newArr = arr.filter((a) => {
    return a%10 == 0
}) 
console.log(newArr)
*/

//Practice problem 4 (create an array of square of given numbers)
/*let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let newArr = arr.map((x) => {
    return x*x
})
console.log(newArr)
*/

//Practice problem 5 (use reduce to calculate factorial of a given number from an array of first n natural numbers(n being thr number whose factorial needs to be calculated))
/*let arr = [1,2,3,4,5]
let factorial = arr.reduce((a1, a2) => {
    return a1*a2
}) 
console.log(factorial)
*/

//Practice problem 6 (find largest number in an array)
/*let arr = [1, 24, 40, 100, 78, 99, 12]
let max = arr[0]
for(let i=1; i<arr.length; i++){
    if(arr[i]>max){
        max = arr[i]
    }
}
console.log(max)
*/

//Practice problem 7 (find sum of all array elements)
/*let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sum = arr.reduce((a1, a2) =>{
    return a1+a2
})
console.log(sum)
*/

//Practice problem 8 (remove duplicates)
/*let arr = [1,2,2,3,4,4]
let unique = []
for (let i = 0; i<arr.length; i++){
    if(!unique.includes(arr[i])){
        unique.push(arr[i])
    }
}
console.log(unique)
*/
//Practice problem 9 (use filter to return only even numbers)
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let newArr = arr.filter((x) => {
    return x%2 == 0
})
console.log(newArr)