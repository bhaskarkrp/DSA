const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// function LinkedListNode(nodeData) {
//     this.data = nodeData;
//     this.next = null;
// }

var addOneToLinkedList = function(head) {
    var head2 = reverse(head);
    // console.log(head2);
    var current = head2;
    var carry = 1;
    var sum = 0;
    var temp = null;
    while (current !== null) {
        // console.log(current.data);
        sum = current.data + carry;

        carry = (sum > 9) ? 1 : 0;

        current.data = sum % 10;

        temp = current;

        current = current.next;

    }

    if (carry > 0) {
        var node = new LinkedListNode(carry);
        temp.next = node;
    }

    // head2 = temp;
    // return head2;

    return reverse(head2);
};

var reverse = function(head) {
    var current = head;
    var prev = null;
    var next = null;

    while (current != null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    head = prev;
    // console.log(head)
    return head;
}