// You are given two non-empty linked lists representing two 
// non-negative integers. The digits are stored in reverse order
//  and each of their nodes contain a single digit. Add the two 
//  numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading 
// zero, except the number 0 itself.


/**
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * [@param](https://leetcode.com/rooparam) {ListNode} l1
 * [@param](https://leetcode.com/rooparam) {ListNode} l2
 * @return {ListNode}

 */

var addTwoNumbers = function(l1, l2) {
    if (l1===null) return l2;
    if (l2===null) return l1;

    //new a ListNode here, with head.next as header, pos as a pointer points to current position
    var head = new ListNode(0);
    var pos = head;
    var temp = 0;
    while (l2!==null || l1!==null || temp>0){
        
        //(l2!==null || l1!==null || temp>0) indicates that next digit is not null, so new a Node and move to it
        pos.next = new ListNode(0);
        pos = pos.next;
        
        if (l1!==null){
            temp += l1.val;
            l1 = l1.next;
        }
        if (l2!==null){
            temp += l2.val;
            l2 = l2.next;
        }
        
        pos.val = temp%10;
        temp = parseInt(temp/10);
        //console.log(temp);
    }
    return head.next;
};