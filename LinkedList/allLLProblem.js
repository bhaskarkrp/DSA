// linked List

const Node = class {
  constructor(nodeData) {
    this.val = nodeData;
    this.next = null;
  }
};

function insertAtHead(val, n1) {
  let node = new Node(val);

  node.next = n1;
}

function insertAtTail(val, n1) {
  let node = new Node(val);

  let l1 = n1;

  while (!l1.next) {
    l1 = l1.next;
  }
  l1.next = node;
}

function insertAtSpecific(val, pos, n1) {
  let node = new Node(val);

  let l1 = n1;
  let pointer = null;
  if (pos === 0) {
    node.next = l1;
    n1 = node;
  } else {
    while (pos > 0) {
      pointer = l1;
      l1 = l1.next;
      pos--;
    }
    node.next = l1;
    pointer.next = node;
  }
}

function mergeList(n1, n2) {
  let l1 = n1;
  let l2 = n2;

  let l3 = new Node(-1);
  let n3 = l3;

  while (true) {
    if (l1 === null) {
      n3.next = l2;
      break;
    }

    if (l2 === null) {
      n3.next = l1;
      break;
    }

    if (l1.val > l2.val) {
      n3.next = l2;
      l2 = l2.next;
      n3 = l2;
    } else {
      n3.next = l1;
      l1 = l1.next;
      n3 = l1;
    }
  }
}

function add1ToLL(head) {
  let reversedHead = reverseLL(head);
  let current = reversedHead;
  let carry = 1;
  let prev = null;
  while (current != null) {
    let sum = current.val + carry;
    carry = sum > 9 ? 1 : 0;

    current.val = sum > 9 ? sum % 10 : sum;

    prev = current;
    current = current.next;
  }

  if (carry) {
    let node = new Node(carry);
    prev.next = node;
  }
  return reversedHead;
}

function reverseLL(head) {
  let current = head;
  let [prev, tail] = [null, null];

  while (current != null) {
    tail = current.next;
    current.next = prev;
    prev = current;
    current = tail;
  }

  head = prev;
  return head;
}

function rotateLL(head, k) {
  let len = 0;
  let current = head;

  while (current != null) {
    len++;
    current = current.next;
  }
  let rotations = k > len ? k - len : k;
}

function nthNodeFromEnd(head, n) {
  let len = 0;
  let current = head;
  while (current != null) {
    len++;
    current = current.next;
  }
  let nodeFormStart = len + 1 - n;

  let counter = 1;
  current = head;
  while (counter < nodeFormStart) {
    counter++;
    current = current.next;
  }
  return current.val;
}

function isCycle(head) {
  let map = new Map();
  let current = head;

  while (current != null) {
    if (!map.has(current)) {
      map.set(current, 1);
    } else {
      return true;
    }
    current = current.next;
  }
  return false;
}

function middleNode(head) {
  let count = 0;
  let current = head;

  while (current != null) {
    current = current.next;
    count++;
  }
  current = head;
  let counter = 0;
  while (counter < Math.floor(count / 2)) {
    current = current.next;
    counter++;
  }

  return current.val;
}
