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


/*moveElementToEnd Time: O(n) Space:O(1) */
function moveElementToEnd(array, toMove) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === toMove) {
      let j = i + 1

      while (j < array.length) {
        if (array[j] !== toMove) {
          let temp = array[i]
          array[i] = array[j]
          array[j] = temp
          break
        } else {
          j++
        }
      }
    }
  }
  return array
}

/*isMonotonic Space: O(n) Time: O(1)*/
function isMonotonic(array) {
  let dec = false
  let inc = false
  let compare = array[0]

  for (let i = 1; i < array.length; i++) {
    let curr = array[i]
    if (compare < curr) {
      dec = true
      compare = array[i]
    } else if (compare > curr) {
      inc = true
      compare = array[i]
    } else {
      compare = array[i]
    }
  }

  if (dec && inc) {
    return false
  } else {
    return true
  }
}

/*spiralTraverse Space: O(n) Time: O(n) where n is the number of elems */
function spiralTraverse(array) {
  let result = []
  let startRow = 0
  let startCol = 0
  let endRow = array.length - 1
  let endCol = array[0].length - 1

  while (startRow <= endRow && startCol <= endCol) {
    for (let col = startCol; col <= endCol; col++) {
      result.push(array[startRow][col])
    }

    for (let row = startRow + 1; row <= endRow; row++) {
      result.push(array[row][endCol])
    }

    for (let col = endCol - 1; col >= startCol; col--) {
      if (startRow === endRow) break;
      result.push(array[endRow][col])
    }

    for (let row = endRow - 1; row > startRow; row--) {
      if (startCol === endCol) break;
      result.push(array[row][startCol])
    }

    startRow++
    startCol++
    endRow--
    endCol--
  }

  return result
}

/*minimumWaitingTime Time: O(n) Space: O(n) where n is the # of queries */
function minimumWaitingTime(queries) {
  queries = queries.sort((a, b) => a - b)
  let minWaitTime = 0
  let currTime = 0
  let waitTime = []

  for (let i = 0; i < queries.length - 1; i++) {
    currTime += queries[i]
    waitTime.push(currTime)
  }

  waitTime.forEach((elem) => {
    minWaitTime += elem
  })

  return minWaitTime;
}

/*caesarCipherEncryptor Time: O(n) Space: O(n) */
function caesarCipherEncryptor(string, key) {
  const alpha = 'abcdefghijklmnopqrstuvwxyz'

  let str = ''

  for (let i = 0; i < string.length; i++) {
    let count = 0
    let currIdx = alpha.indexOf(string[i])
    while (count != key) {
      currIdx++
      if (currIdx > 25) {
        currIdx = 0
      }
      count++
    }
    str += alpha[currIdx]
  }
  return str
}

/* removeDuplicatesFromLinkedList Time O(n) Space: O(1) */
function removeDuplicatesFromLinkedList(linkedList) {
  let currNode = linkedList

  while (currNode) {
    while (currNode.next && currNode.value === currNode.next.value) {
      currNode.next = (currNode.next.next ? currNode.next.next : null)
    }
    currNode = currNode.next
  }
  return linkedList;
}

/*insertionSort Time: O(n^2) Space: O(1) */
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i
    while (j > 0 && array[j] < array[j - 1]) {
      let temp = array[j]
      array[j] = array[j - 1]
      array[j - 1] = temp
      j--
    }
  }
  return array
}

/*selectionSort Time:O(n^2) Space: O(1) */
function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let idx = i
    let smallest = array[i]
    for (let j = i + 1; j < array.length; j++) {
      let compare = array[j]
      if (smallest > compare) {
        smallest = compare
        idx = j
      }
    }
    let temp = array[i]
    array[i] = array[idx]
    array[idx] = temp

  }
  return array
}

/*firstDuplicateValue Time: O(n) Space: O(n) */
function firstDuplicateValue(array) {
  let obj = {}
  for (let i = 0; i < array.length; i++) {
    if (!obj[array[i]]) {
      obj[array[i]] = 1
    } else {
      return array[i]
    }
  }
  return -1;
}

/*firstDuplicateValue Time: O(n) Space: O(1) MORE OPTIMAL */
function firstDuplicateValue(array) {
  for (const value of array) {
    const absVal = Math.abs(value)
    if (array[absVal - 1] < 0) {
      return absVal
    }
    array[absVal - 1] *= -1
  }
  return -1;
}

/*runLengthEncoding Time: O(n) Space: O(n) */
function runLengthEncoding(string) {
  let result = ''
  let count = 1
  for (let i = 0; i < string.length; i++) {
    let j = i + 1
    while (string[i] === string[j]) {
      if (count === 9) {
        result += count + string[i]
        count = 0
      }
      count++
      j++
    }
    result += count + string[i]
    count = 1
    i = j - 1
  }
  return result
}

/*numberOfWaysToMakeChange Space: O(nd) Time: O(n) where n is the target and d is the denoms */
function numberOfWaysToMakeChange(n, denoms) {
  const result = new Array(n + 1).fill(0)
  result[0] = 1

  for (let i = 0; i < denoms.length; i++) {
    for (let j = 1; j < result.length; j++) {
      if (denoms[i] <= j) {
        result[j] += result[j - denoms[i]]
      }
    }
  }
  return result[n]
}

/*threeNumberSort Time: O(n) Space: O(1) */
function threeNumberSort(array, order) {
  let firstCount = 0;
  let secondCount = 0;
  let thirdCount = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === order[0]) {
      firstCount++
    } else if (array[i] === order[1]) {
      secondCount++
    } else if (array[i] === order[2]) {
      thirdCount++
    }
  }

  for (let j = 0; j < array.length; j++) {
    if (firstCount > 0) {
      array[j] = order[0]
      firstCount--
    } else if (secondCount > 0) {
      array[j] = order[1]
      secondCount--
    } else {
      array[j] = order[2]
      thirdCount--
    }
  }
  return array
}

/*construct BST with insert, contain and remove methods */
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value)
      } else {
        this.left.insert(value)
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value)
      } else {
        this.right.insert(value)
      }
    }
    return this;
  }

  contains(value) {
    if (value < this.value) {
      if (this.left === null) {
        return false
      } else {
        return this.left.contains(value)
      }
    } else if (value > this.value) {
      if (this.right === null) {
        return false
      } else {
        return this.right.contains(value)
      }
    } else {
      return true
    }
  }

  remove(value, parent = null) {
    if (value < this.value) {
      if (this.left !== null) {
        this.left.remove(value, this)
      }
    } else if (value > this.value) {
      if (this.right !== null) {
        this.right.remove(value, this)
      }
    } else {
      if (this.left !== null && this.right !== null) {
        this.value = this.right.getMinValue()
        this.right.remove(this.value, this)
      } else if (parent === null) {
        if (this.left !== null) {
          this.value = this.left.value
          this.right = this.left.right
          this.left = this.left.left
        } else if (this.right !== null) {
          this.value = this.right.value
          this.left = this.right.left
          this.right = this.right.right
        } else {

        }
      } else if (parent.left === this) {
        parent.left = this.left !== null ? this.left : this.right
      } else if (parent.right === this) {
        parent.right = this.left !== null ? this.left : this.right
      }
    }
    return this;
  }

  getMinValue() {
    if (this.left === null) {
      return this.value
    } else {
      return this.left.getMinValue()
    }
  }
}

/*reverseLinkedList Time: O(n) Space: O(1) */
function reverseLinkedList(head) {
  let prevNode = null
  while (head !== null) {
    let nextNode = head.next
    head.next = prevNode
    prevNode = head
    head = nextNode
  }
  return prevNode
}