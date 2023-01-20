class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

function insertNodeAttail(head, data){
    var node = new Node(data);

    var current = head;
    var prev = null;

    if(!current){
        head = node;
    }else{
        while(current != null){
        perv = current;
        current = current.next;
        }
    }
    prev.next = node;

    return head;
}