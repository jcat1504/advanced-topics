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
    let head, c= head,  one = l1, two = l2, carry = 0;
  

    while(one || two) {
        let x = 0, y = 0, sum = carry, next, tmpNode;
        if(one.val){
            x = one.val;
        }
        if(two.val){
            y = two.val;
        }
        sum += x + y;
        carry = Math.floor(sum / 10);
        next = sum % 10;
        tmpNode = new ListNode(next);
        if(head == null){
            head =  new ListNode(next);
            c = head;
        }else{
            c.next = tmpNode;
            c = c.next;
        }
      if(one.next != null){
        one = one.next;
      }else{
        one = false
      }
      if(two.next != null){
        two = two.next;
      }else{
        two = false
      }
    }
    if(carry > 0){
        let tmpNode= new ListNode(carry);
        c.next = tmpNode;
    }
    return head;
};