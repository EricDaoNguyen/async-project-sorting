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
