// Givenhead, the head of a linked list, determine if the linked list has a cycle in it.

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

function isCycle(head){
    var current = head;

    var map = new Map();

    while(current != null){
        if(!map.has(current)){
            map.set(current, 1);
        }else{
            return true;
        }
        current = current.next;
    }
    return false;
}