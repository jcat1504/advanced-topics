//return kth to last--find kth to last element of singly linked list
//recursive--dont return the element

int printKthToLast(LinkedListNode head, int k) {
    if (head = null) {
        return 0;
    }
    int index = printKthToLast(head.next, k) + 1;
    if (index == k) {
        System.out.println(k + "th to last node is " + head.value)
    }
    return index;
}