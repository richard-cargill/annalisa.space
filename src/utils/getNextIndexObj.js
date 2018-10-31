export default function getNextIndexObj(pagesArray, index) {
  const length = pagesArray.length - 1
  const nextIndex = index + 1
  if (nextIndex > length) {
    return pagesArray[0]
  } else {
    return pagesArray[nextIndex]
  }
}
