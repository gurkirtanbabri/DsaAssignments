// Compute and return the square root of x, where x is guaranteed to be a non-negative
// integer. And since the return type is an integer, the decimal digits are truncated and only
// the integer part of the result is returned. Also, talk about the time complexity of your
// code.
// Test Cases:
// Input: 4
// Output: 2


function isPerfactSqureroot(number) {

    if (number <= 2) {
        return 1
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
            return mid
        }

        if (squareRoot1 < number && squareRoot > number) {
            return prev
        }

        else if (squareRoot > number) {
            
            end = mid - 1
        }
        else {
            start= mid + 1
        }
    }
        
} 

for (let i = 0; i <= 100; i++) {
    console.log(`squreroot of ${i} is ${isPerfactSqureroot(i)}`);
}

//time complexity log2(n)


