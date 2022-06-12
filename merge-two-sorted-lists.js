/**You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list. */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    let node;
    let head;
    if (list1 === null){
        return list2
    }else if (list2 === null) return list1
    if (list1.val > list2.val){
        node = list2
        list2 = list2.next
        head = node
    }else {
        node = list1 
        list1 = list1.next
        head = node
    }
    while (list1 != null && list2 != null){
        if (list1.val <= list2.val){
            node.next = list1
            list1 = list1.next
            node = node.next
        } else if (list1.val > list2.val){
            node.next = list2
            list2 = list2.next
            node = node.next
        }
    }
    if (list1 === null){
        node.next = list2
    }else if (list2 === null) {
        node.next = list1
    }
        return head
    };