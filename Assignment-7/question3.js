// 3. An e-commerce site tracks the purchases made each day. The product that is purchased
// the most one day is the featured product for the following day. If there is a tie for the product
// purchased most frequently, those product names are ordered alphabetically ascending and
// the last name in the list is chosen.[Amazon]


const array = [
  "yellowShirt",
  "redHat",
  "blackShirt",
  "bluePants",
  "bluePants",
  "bluePants",
  "redHat",
  "pinkHat",
  "blackShirt",
  "yellowShirt",
  "yellowShirt",
  "greenPants",
  "greenPants",
  "greenPants",
];

// for array swap
// not returning because am using same array refrence
function swap(array, index1, index2) {
    const temp = array[index1]
    array[index1] = array[index2]
    array[index2] = temp
}

// max heap
function heapyFy(arr, i, lastIndex) {
    const leftElement = Math.floor(((2 * i) + 1))
    const rightElement = Math.floor(((2 * i) + 2))

    if (leftElement > lastIndex && rightElement > lastIndex) {
        return
    }

    if (arr[leftElement] > arr[i]) {
        swap(arr, leftElement, i)
        heapyFy(arr, leftElement, lastIndex)
    }

    if (arr[rightElement] > arr[i]) {
        swap(arr, rightElement, i)
        heapyFy(arr, rightElement, lastIndex)
    }
}


function getMostFrequentProduct(arr) {
    let maxFreq = 0

    const freqMap = new Map()

    for (let i = 0; i < arr.length; i++) {
        const frequancyOfElement = (freqMap.get(arr[i]) || 0) + 1
        
        maxFreq = Math.max(frequancyOfElement, maxFreq)
        freqMap.set(arr[i], frequancyOfElement)
    }

    const mostFrequentProducts = []
    freqMap.forEach((value, key) =>{
        if (value === maxFreq) {
            mostFrequentProducts.push(key)
        }
    })

    if (mostFrequentProducts.length === 1) {
        return mostFrequentProducts[0]
    }

    // now we have more than one product with same frequency we need to use max heap to get result alphabaticaly desc order
    // this method heapyFy same array no extra space usage
    for(let i = mostFrequentProducts.length -1; i >= 0; i--) {
        const parent = Math.floor((i/2))
        heapyFy(mostFrequentProducts, parent, mostFrequentProducts.length)
    }

    // return the root of max heap
    return mostFrequentProducts[0]
}

console.log(getMostFrequentProduct(array));


// Time complexity:

// for makeing freqMap O(n)
// for making mostFrequentProducts o(n) if every product have same frequency

// total O(n + n ) = O(n) 


// Space complexity:

// if we do not modify input array
//O(n) 
