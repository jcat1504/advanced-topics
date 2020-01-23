var deleteDuplicates = function(head) 
{
    if(!head)
        return head;
    var current = head;
    while(current.next != null)
    {
        var nextnode = current.next;
        if(current.val == nextnode.val)
        {
             current.next=current.next.next;
        }
        else
        {
            current = current.next;
        } 
    }
    return head;
};