// Given a linked list consisting of nodesand given a number N. The task is to find the nth nodefrom the end of the linked list.

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
};

function nthNodeFromEnd(head, N){
    var current = head;
    var size = 0;

    while(current != null){
        size++;
        current = current.next;
    }
    
    var pos = size-N+1;
    var current = head;
    var i = 1;
    while(i < pos){
        current = current.next;
        i++;
    }
    return current.data;
}