// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

arr = [10, -30, 5, 0, 97] 
function bubbleSort(arr) {
  for (let i=0; i<arr.length; i++){
    for (let j=0; j<(arr.length-i-1); j++) {
      if (arr[j] > arr[j+1]) {
        //swap these two
        let lesser = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = lesser
      }
    }
  }
  return arr
}

function selectionSort(arr) {
  
  for (let i=0; i<arr.length; i++){
    let minIndex = i
    // let minEle = arr[i]
    
    // after this for loop, will find new lower value's index
    for(let j = i+1; j<arr.length; j++){
      const curEle = arr[j]
      if (curEle < arr[minIndex]) { // see if there is an ele lowere than minEle
        minIndex = j // if so, assign its index to minIndex
      }
    }

    if (i !== minIndex) { // if cur index not equal to minIndex, swap them
      let lesser = arr[minIndex]
      arr[minIndex] = arr[i]
      arr[i] = lesser
    }
  }

  return arr
}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
