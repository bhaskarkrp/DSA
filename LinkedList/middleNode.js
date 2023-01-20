// Given a non-empty, singly linked list with the head nodehead, return a middle node of the linked list.
// If there are two middle nodes, return the second middle node.


class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

function middleNode(head){
    var current = head;

    var size = 0;
    while(current != null){
        size++;
        current = current.next;
    }

    var current = head;
    var i = 0;
    while(i < Math.floor(size / 2)){
        current = current.next;
        i++;
    }
    return current.data;
}