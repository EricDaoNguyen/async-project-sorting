// mergeSort function
// Returns an array of animations
export function mergeSortAnimation(array) {
  const animation = []

  if(array.length <= 1) { return array }

  const arrayAssistant = array.slice()

  mergeSortAssistant(array, 0, array.length - 1, arrayAssistant, animation)

  return animation
}

function mergeSortAssistant(array, startIndex, endIndex, arrayAssistant, animation) {
  if(startIndex === endIndex) { return }

  const middleIndex = Math.floor((startIndex + endIndex) / 2)

  mergeSortAssistant(arrayAssistant, startIndex, middleIndex, array, animation)
  mergeSortAssistant(arrayAssistant, middleIndex + 1, endIndex, array, animation)
  merge(array, startIndex, middleIndex, endIndex, arrayAssistant, animation)
}

// merge function
// Adds to animation array after comparing and overwriting indexes
function merge(array, startIndex, middleIndex, endIndex, arrayAssistant, animation) {
  let k = startIndex
  let i = startIndex
  let j = middleIndex + 1

  while(i <= middleIndex && j <= endIndex) {
    animation.push([i, j])
    animation.push([i, j])
    if(arrayAssistant[i] <= arrayAssistant[j]) {
      animation.push([k, arrayAssistant[i]])
      array[k++] = arrayAssistant[i++]
    } else {
      animation.push([k, arrayAssistant[j]])
      array[k++] = arrayAssistant[j++]
    }
  }

  while (i <= middleIndex) {
    animation.push([i, i])
    animation.push([i, i])
    animation.push([k, arrayAssistant[i]])
    array[k++] = arrayAssistant[i++]
  }

  while (j <= endIndex) {
    animation.push([j, j])
    animation.push([j, j])
    animation.push([k, arrayAssistant[j]])
    array[k++] = arrayAssistant[j++]
  }

}

// export const mergeSort = (array) => {
//   if(array.length === 1) { return array }
//   const middleIndex = Math.floor(array.length / 2)
//   const firstHalf = mergeSort(array.slice(0, middleIndex))
//   const secondHalf = mergeSort(array.slice(middleIndex))
//   const sortedArray = []
//   let i = 0
//   let j = 0

//   while(i < firstHalf.length && j < secondHalf.length) {
//     if(firstHalf[i] < secondHalf[j]) { sortedArray.push(firstHalf[i++]) }
//     else { sortedArray.push(secondHalf[j++]) }
//   }
//   while(i < firstHalf.length) { sortedArray.push(firstHalf[i++]) }
//   while(j < secondHalf.length) { sortedArray.push(secondHalf[j++]) }

//   return sortedArray
// }
