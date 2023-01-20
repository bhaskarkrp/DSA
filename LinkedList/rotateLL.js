
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var rotateRight = function(head, k) {
    var current = head;
    var size;
    while(current != null){
        size++; 
        current = current.next;
    }

    if(k == 0){
        return head;
    }else{
        var i = 0;
        var prev = null;
        while(i < size-k){
            prev = current;
            current = current.next;
            i++;
        }
        prev.next = null;
        var head2 = current;
        while(current.next != null){
            current = current.next;
        }
        current.next = head;
        return head2;
    }
};



////////////////////////////////////////////////////////////////

var current = head;
    var prev = null;
    var i = 1;
    if(k == 1){
        return head;
    }else{
        while(i < k && current != null){
            prev = current;
            current = current.next;
            i++;
        }
        prev.next = null;
        var head2 = current;
        var prev2 = null;
        while(current != null){
            prev2 = current;
            current = current.next;
        }
        prev2.next = head;
        // console.log(prev2.next, head2)
        return head2;
    }