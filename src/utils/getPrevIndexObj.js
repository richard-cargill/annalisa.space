export default function getPrevIndexObj(pagesArray, index) {
  const length = pagesArray.length
  const prevIndex = index - 1
  if (prevIndex < 0) {
    return pagesArray[length - 1]
  } else {
    return pagesArray[prevIndex]
  }
}
