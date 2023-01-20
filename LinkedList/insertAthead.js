class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
};

function insertAthead(head, data){
    var node = new Node(head);

    // var current = head;
    if(!head){
        head = node;
    }else{
        node.next = head;
        head = node;
    }

    return head;
}