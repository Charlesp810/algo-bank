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

/*Find closest Value in BST Time: O(n) Space: O(n) */
function findClosestValueInBst(tree, target) {
  let memo = {}

  let queue = [tree]

  while (queue.length > 0) {
    let currNode = queue.shift()
    let diff = Math.abs(currNode.value - target)
    if (!memo[currNode.value]) {
      memo[currNode.value] = diff
    }
    if (currNode.left) {
      queue.push(currNode.left)
    }
    if (currNode.right) {
      queue.push(currNode.right)
    }
  }
  let checker = Infinity
  let closest = 0

  for (let key in memo) {
    if (memo[key] < checker) {
      checker = memo[key]
      closest = key
    }
  }
  return +closest
}

/*Find closest Value in BST Time: O(log(n)) Space: O(1) */
function findClosestValueInBst(tree, target) {
  let closest = tree.value
  let currNode = tree
  while (currNode != null) {
    if (Math.abs(target - closest) > Math.abs(target - currNode.value)) {
      closest = currNode.value
    }
    if (target < currNode.value) {
      currNode = currNode.left
    } else if (target > currNode.value) {
      currNode = currNode.right
    } else {
      break
    }
  }
  return closest
}

/*Branch Sums Time: O(n) Space: O(n) where n is the number of nodes */
function branchSums(root) {
  let res = []

  function traverse(node, sum) {
    sum += node.value
    if (!node.left && !node.right) {
      res.push(sum)
    }
    if (node.left) {
      traverse(node.left, sum)
    }

    if (node.right) {
      traverse(node.right, sum)
    }

  }

  traverse(root, 0)

  return res
}