// Wrong
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    
    const stack = []
    let current = head
    
    let result = new ListNode()
    const resultHead = result
    
    while(current.next){
        stack.push(current.val)
        current = current.next
    }
    
    while(stack){
        const val = stack.pop()
        result.next = new ListNode(val)
        result = result.next
    }
    
    return resultHead.next
};


// CORRECT: Iterative way
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    let prev = null
    let current = head
    let next = head?.next
    
    while(current){
        current.next = prev;
        prev = current;
        current = next
        
        next = current?.next
    }
    
     return prev
 };

 // Correct: recursive way

 /**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let result = null
        function reverse(prev, current, next){
            if(current){
                current.next = prev;
                reverse(current, next, next?.next)
            } else {
                result = prev
            }
        }
        
        reverse(null, head, head?.next)
        
        return result
    };