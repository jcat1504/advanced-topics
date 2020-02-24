var removeElements = function(head, val) {
    if (!head) return head;

    while (head) {
        if (head.val === val) {
            head = head.next;
        } else {
            break;
        }
    }

    let current = head;
    while (current && current.next) {
        if (current.next.val === val)
            current.next = current.next.next;
        else current = current.next;
    }
    return head;
}