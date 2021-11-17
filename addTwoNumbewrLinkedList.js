/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    // const res = new ListNode()
    let result = new ListNode()
    let carry = 0;
    let l1Copy = l1;
    let l2Copy= l2;
    const ref = result
    
    while(l1Copy?.val != undefined || l2Copy?.val != undefined || carry){
        const sum =  (l1Copy?.val||0) + (l2Copy?.val||0) + carry
        carry = Math.floor(sum / 10)
        
        result.next = new ListNode(sum%10)
        result = result.next
        l1Copy = l1Copy?.next
        l2Copy = l2Copy?.next
    }
    
    return ref.next
};