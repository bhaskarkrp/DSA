class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

function insertAtSpecificPos(head, pos, data){
    var node = new Node(data);

    if(pos == 1){
        node.next = head;
        head = node;
    }else{
        var i = 1;
        var prev = null;
        var current = head;
        var next = null;
        while(i < pos){
            next = current.next;
            prev = current;
            current = current.next;
            i++;
        }
        prev.next = node;
        node.next = next;
    }
    return head;
}