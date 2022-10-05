// 1. Given an integer array nums of length n and an integer target, find three integers in nums
// such that the sum is closest to the target.[Amazon]
// You need to return the sum of three integers.
// For example:arr = [-1, 2, 1, -4], target = 1
// Output: 2
// Explanation: [-1+2+1] = 2 (The sum that is closest to the target is 2)\\

const array = [-1, 2, 1, -4]
const target = 1

function findTheClosest(arr, target) {
    let closest = Number.MAX_SAFE_INTEGER
    let ans = null
    const sortedArray = arr.sort((a, b) => a - b)
  
    for (let i = 0; i < sortedArray.length; i++) {
        let start = i + 1
        let end = sortedArray.length -1 

        while(start < end) {
            const sum = sortedArray[i] + sortedArray[start] + sortedArray[end]

            if (sum === target) {
                return sum
            }
            
            if (closest > Math.abs(sum - target)) {
                closest = Math.abs(sum - target)
                ans = sum
            }


            if (sum > target) {
                end--
            } else {
                start++
            }

        }

    }

    return ans
}


console.log(findTheClosest(array, target));



// TIME COMPLIXITY:- O(n^2) of sort + aprox O(n^2) of loops = O(n^2) + O(n^2) 
// over all = O(n^2)

// SPACE COMPLIXITY:- O(n) sorted array