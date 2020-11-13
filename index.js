/*Two Sum Time: O (nlog(n)) Space: O(1) */
function twoNumberSum(array, targetSum) {
  array.sort((a, b) => a - b)

  let left = 0
  let right = array.length - 1

  while (left !== right) {
    let currSum = array[left] + array[right]
    if (currSum === targetSum) {
      return [array[left], array[right]]
    } else if (currSum < targetSum) {
      left++
    } else {
      right--
    }
  }
  return []
}

/*Validate Subsequence Time: O(n) Space: O(1)*/
function isValidSubsequence(array, sequence) {
  let j = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] === sequence[j]) {
      j++
    }
  }
  return j === sequence.length
}
