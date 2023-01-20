// You are given a pointer/ reference to the node which is to be deleted from the linked list of n nodes. The task is to delete the node. Pointer/ reference to the head node is not given.

class Node{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
};

function deleteNodeWithoutHead(node) {
    node.data = node.next.data;
    node.next = node.next.next;
}