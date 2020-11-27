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


/*Node Depth (itirative) Time: O(n) where n is the number of nodes. Space: o(h) where h is the height of the tree  */
function nodeDepths(root) {
  let resultSum = 0

  let stack = [{ node: root, depth: 0 }]

  while (stack.length > 0) {
    let { node, depth } = stack.pop()
    if (node === null) continue
    resultSum += depth
    stack.push({ node: node.left, depth: depth + 1 })
    stack.push({ node: node.right, depth: depth + 1 })

  }
  return resultSum
}

/*Node Depth (recursion) Time: O(n) where n is the number of nodes. Space: o(h) where h is the height of the tree  */
function nodeDepths(root, depth = 0) {
  if (root === null) return 0;
  return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1)
}

/*Depth First Search (write a method) Time: O(v + e). Space: O(e) where v is the number of vertices and e is the number of edges */
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    array.push(this.name)
    if (this.children) {
      for (let i = 0; i < this.children.length; i++) {
        this.children[i].depthFirstSearch(array)
      }
    }

    return array
  }
}

/*getNthFib Time: O(n) Space: O(n) */
function getNthFib(n) {
  let memo = { 1: 0, 2: 1 }
  if (n in memo) {
    return memo[n]
  } else {
    memo[n] = getNthFib(n - 1, memo) + getNthFib(n - 2, memo)
    return memo[n]
  }
}

/*productSum  Time: O(n) Space: O(d) where n is the num of elems in the array, d is the num or nested arrays*/
function productSum(array, depth = 1) {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      sum += productSum(array[i], depth + 1)
    } else {
      sum += array[i]
    }
  }
  return sum * depth
}

/* findThreeLarestNumbers Time: O(n) Space O(1)*/
function findThreeLargestNumbers(array) {
  let res = []
  let max = -Infinity
  let idx = 0
  let smallest = Infinity

  while (res.length < 3) {
    for (let i = 0; i < array.length; i++) {
      let curr = array[i]
      if (max < curr) {
        max = curr
        idx = i
      }
      if (smallest > curr) {
        smallest = curr
      }
    }
    array[idx] = -Infinity
    idx = 0
    res.push(max)
    max = smallest
  }


  return res.sort((a, b) => a - b)
}

/*bubbleSort Time: O(n^2) Space: O(1) */
function bubbleSort(array) {

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let curr = array[i]
      let next = array[j]
      if (curr > next) {
        array[i] = next
        array[j] = curr
      }
    }
  }
  return array
}

/*isPalindrome Time: O(n) Space: O(1) */
function isPalindrome(string) {
  let left = 0
  let right = string.length - 1

  while (left !== right && left < right) {
    if (string[left] !== string[right]) {
      return false
    }
    left++
    right--
  }
  return true
}

/*binarySearch Time: O(log(n)) Space: O(1) */
function binarySearch(array, target) {
  return search(array, target, 0, array.length - 1)
}

function search(array, target, left, right) {
  while (left <= right) {
    const pivot = Math.floor((left + right) / 2)
    if (array[pivot] === target) {
      return pivot
    } else if (target < array[pivot]) {
      right = pivot - 1
    } else {
      left = pivot + 1
    }
  }
  return - 1
}

/*threeNumberSum Time:O(n^2) Space: O(n) where n is the number of elems */
function threeNumberSum(array, targetSum) {
  array = array.sort((a, b) => a - b)

  let res = []

  for (let i = 0; i < array.length; i++) {
    let curr = array[i]
    let left = i + 1
    let right = array.length - 1

    while (left < right) {
      if ((curr + array[left] + array[right]) === targetSum) {
        res.push([curr, array[left], array[right]])
        left++
        right--
      } else if ((curr + array[left] + array[right]) < targetSum) {
        left++
      } else {
        right--
      }
    }
  }
  return res
}

/*smallestDifference Time:O(nlong(n)) + O(mlog(m)) Space:O(1) where n is the # elems in arrayOne and m is the # elems in arrayTwo */
function smallestDifference(arrayOne, arrayTwo) {
  arrayOne = arrayOne.sort((a, b) => a - b)
  arrayTwo = arrayTwo.sort((a, b) => a - b)

  let p1 = 0
  let p2 = 0
  let smallestDiff = Infinity
  let smallestPair = []
  let diff

  while (p1 < arrayOne.length && p2 < arrayTwo.length) {
    let firstNum = arrayOne[p1]
    let secondNum = arrayTwo[p2]
    if (firstNum < secondNum) {
      diff = secondNum - firstNum
      p1++
    } else if (secondNum < firstNum) {
      diff = firstNum - secondNum
      p2++
    } else {
      return [firstNum, secondNum]
    }
    if (smallestDiff > diff) {
      smallestDiff = diff
      smallestPair = [firstNum, secondNum]
    }

  }
  return smallestPair
}