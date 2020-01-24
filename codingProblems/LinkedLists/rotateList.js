// Given a linked list, rotate the list to the right by k 
// places, where k is non-negative.

// Input: 1->2->3->4->5->NULL, k = 2
// Output: 4->5->1->2->3->NULL
// Explanation:
// rotate 1 steps to the right: 5->1->2->3->4->NULL
// rotate 2 steps to the right: 4->5->1->2->3->NULL

var rotateRight = function(head, k) {
    if(!head || !head.next) return head
    dummy = head;
    depth = 0;
    while(dummy){
        depth += 1
        dummy = dummy.next
    }
    k = k%depth
    while(k > 0){
        node = head;
        while(node.next.next !== null){
            node = node.next
        }
        temp = node.next;
        node.next = null;
        temp.next = head;
        head = temp;
        k -= 1
    }
    return head
};