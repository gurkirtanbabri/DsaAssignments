// 4. An almost sorted array is given to us and the task is to sort that array completely. Then,
// which sorting algorithm would you prefer and why?[Salesforce]

// i will go with selectionSort because it can give 
// O(n) in best case i. if array is almost sorted

const array = [1,2,3,4,5,9,6,8]

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let max = 0
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[max]){
                max = j 
            }
        }
        
        const lastIndex = (arr.length - 1 - i)
        const temp = arr[lastIndex]
        arr[lastIndex] = arr[max]
        arr[max] = temp
    }

    return arr
}


console.log(selectionSort(array));
