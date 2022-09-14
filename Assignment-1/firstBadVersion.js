// You are a product manager and currently leading a team to develop a new product.
// Unfortunately, the latest version of your product fails the quality check. Since each
// version is developed based on the previous version, all the versions after a bad version
// are also bad. Suppose you have n version and you want to find out the first bad one,
// which causes all the following ones to be bad. Also, talk about the time complexity of
// your code.
// Test Cases:
// Input: [0,0,0,1,1,1,1,1,1]
// Output: 3
// Explanation: 0 indicates a good version


function findFirstBadVersion(arr) {

    let start = 0
    let end = arr.length - 1

    while(start <= end) {
        const mid = start + parseInt((end - start)/2)

        if (arr[mid]=== 1 && arr[mid -1] === 0) {
            return mid
        }

        if (arr[mid] === 1) {
            end = mid - 1
        } else {
            start = mid + 1
        }
    } 

    throw new Error('either all version are good or bad')
}


const input = [0,0,0,0,0,0,0,0,1,1,1,1,1,1,1]

console.log(findFirstBadVersion(input));


//time complexity log2(n)
