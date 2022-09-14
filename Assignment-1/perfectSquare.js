// Given a positive integer num, write a program that returns True if num is a perfect
// square else return False. Do not use built-in functions like sqrt. Also, talk about the time
// complexity of your code.
// Test Cases:
// Input: 16
// Output: True
// Input: 14
// Output: False

function isPerfactSqureroot(number) {

    if (number < 1) {
        return false
    }

    let start = 0
    let end = number
    let mid = 0
    let squareRoot = 0

    while(end => start) {
        mid= start + parseInt((end - start)/2)
        squareRoot = mid * mid
        let prev = (Math.floor(mid) - 1) 
        squareRoot1 = prev * prev

        if (squareRoot === number) {
            return true
        }

        if (squareRoot1 < number && squareRoot > number) {
            return false
        }

        else if (squareRoot > number) {
            
            end = mid - 1
        }
        else {
            start= mid + 1
        }
    }
        
} 

const perfactSqureRoots = []

for (let i = 0; i <= 100; i++) {
   if (isPerfactSqureroot(i)) {
    perfactSqureRoots.push(i)
   }
}

console.log(perfactSqureRoots);
//time complexity log2(n)


