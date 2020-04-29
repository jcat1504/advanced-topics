//return kth to last--find kth to last element of singly linked list

var returnElement = function(head, n) {
    var nullHead = new ListNode(null);
    nullHead.next = head;
    var p1 = nullHead;
    var p2 = null;
    for (var i = 0; i < n + 1; i++) {
        p1 = p1.next;
        while (p1 != null) {
            p2 = p2.next
            p1 = p1.next;
            return nullHead.next;
        }
    }
}