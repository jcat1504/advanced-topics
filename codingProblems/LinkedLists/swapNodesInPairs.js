//given a linked list, swap every two adjacent nodes and return its head
//input     head = [1, 2, 3, 4 ]    output = [2, 1, 4, 3]
//test cases:
//if no value return head or empty array
//if one value, return head anyway

//SOLUTION 1//
var swapPairs = function(head) {
    //store head to return list, only instance of new data so space 0(1)
    let dummy = new ListNode(-1)
    dummy.next = head;
    let prev = dummy;

    //traverse list
    while (head && head.next) {
        let n1 = head;
        let n2 = head.next;

        //swap
        prev.next = n2
        n1.next = n2.next
        n2.next = n1

        //asign
        prev = n1
        head = n1.next 
    }
    return dummy.next 
}