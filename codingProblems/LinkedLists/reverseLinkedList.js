//reverse a singly linked list

//recursion
var reverseList = function reverseList(head, prev = null) {
    if (!head){
        return head;
    }
    
    const next = head.next;
    head.next = prev;
    
    return next ? reverseList(next, head) : head;
};

