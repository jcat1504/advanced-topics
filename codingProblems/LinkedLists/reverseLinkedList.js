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

//solution 2
var reverseList = function reverseList(head) {
     if (!head){
         return head;
     }
    
     let current = head.next;
    
     let node = head;
     node.next = null;
    
     while(current){
         let temp = current;
         current = current.next
         temp.next = node;
         node = temp;
     }
    
     return node;
};