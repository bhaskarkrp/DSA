class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
};

function reverseLinkList(head){
    var current = head;
    var prev = null;
    var next = null;

    while(current != null){
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    head = prev;

    return head;
}