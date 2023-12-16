function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/*
* list1 = 1->3->4
* list2 = 1->2->5->6 
* Check the first node of two linked list
* the next node will be the list which has bigger val
*/
const mergeTwoLists = (list1, list2) => {
    if (list1 == null) {
        return list2;
    }
    if (list2 == null) {
        return list1;
    }

    if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
}

var list1node3 = new ListNode(4, null);
var list1node2 = new ListNode(3, list1node3);
var list1 = new ListNode(1, list1node2);

var list2node4 = new ListNode(6, null);
var list2node3 = new ListNode(5, list2node4);
var list2node2 = new ListNode(2, list2node3);
var list2 = new ListNode(1, list2node2);

console.log(mergeTwoLists(list1, list2))