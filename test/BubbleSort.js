// function bubbleSort(array) {
//     let swapCounter = 0
//     for(let i = 0; i < array.length; i++){
//       for(let j = 0; j < array.length; j++){
//         let swapHappened = false
//         if(array[j] > array[j + 1]){
//           let tmp = array[j]
//           swapHappened = true
//           swapCounter++
//           array[j] = array[j + 1]
//           array[j + 1] = tmp
//           console.log(swapCounter)
//         }
//       }
//     }
//       return array
// }
//
// //module.exports = bubbleSort;
const myArray = [77,66,55,44,33,22,11]
const  bubbleSort = function(array){
  for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array.length; j++){
      if(array[j] > array[j + 1]){
        let tmp = array[j]//the larger of the two numbers stored here
        array[j] = array[j + 1]
        array[j + 1] = tmp
      }
    }
  }
  return array
}

console.log("log " + bubbleSort(myArray))

const newArray = [55,44,66,22,88,11,1]
const insertionSort = function(array){
  for(let i = 1; i < array.length; i++){
    for(let j = i; j > 0; j--){
      if(array[j - 1] > array[j]){//if the one before is larger than the one after then...
        let tmp = array[j] //storing the lower value
        array[j] = array[j - 1]
        array[j - 1] = tmp
      } else {
        break
      }
    }
  }
  return array
}
console.log("insertion sort: " + insertionSort(newArray))
