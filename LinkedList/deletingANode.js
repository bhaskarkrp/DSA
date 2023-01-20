// Delete the node at a given position in a linked list and return a reference to the head node. The head is at position 0. The list may be empty after you delete the node. In that case, return a null value.

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;        
    }
}

function deleteANode(head, position) {
    var current = head;

    if(position === 0) {
        head = current.next;
    }else{
        var i = 0;
        var prev = null;
        while(i < position){
            prev = current;
            current = current.next;
            i++;
        }
        var temp = current.next;
        prev.next = temp;

        return head;
    }
}