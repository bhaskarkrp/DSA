
const ListNode = class {
    constructor(nodeData) {
        this.val = nodeData;
        this.next = null;
    }
};

// Complete the function below

var mergeTwoLists = function(l1, l2) {
    var n1 = l1;
    var n2 = l2;
    // 
    var node = new ListNode(0);
    var l3 = node;
    // console.log(n1, n2, l3)
    while(true){
        if(n1 == null){
            l3.next = n2;
            break;
        }else if(n2 == null){
            l3.next = n1;
            break;
        }

        if(n1.val <= n2.val){
            l3.next = n1;
            l3 = n1;
            n1 = n1.next;
        }else{
            l3.next = n2;
            l3 = n2;
            n2 = n2.next;
        }
    }
    return node.next;
    
    
};

