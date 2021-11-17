// failing if we have multiple nodes with same value
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    const map = {}
    let result = false
    let current = head
    
    while(current){
        if(map[current.val] != undefined){
            result = true;
            break
        } else {
            map[current.val] = current.val
        }
        current = current?.next
    }
    return result
};

//My approach
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    const map = {}
    let result = false
    let current = head
    
    while(current){
        if(current.val == 'Sreeketh'){
            result = true
            break;
        }
       current.val = 'Sreeketh'
        
       current= current.next
        
    }
    return result
};

//Floyd's Algorithm
/**
 * Keep two pointers, one is for fast moving and another one is for slow moving
 * if the list has cycle, fast will meet slow at some point. complexity is O(n)
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    const map = {}
    let result = false
    let slowPointer = head
    let fastPointer = head
    
    while(slowPointer && fastPointer){
    slowPointer = slowPointer?.next
    fastPointer = fastPointer?.next?.next

    if(slowPointer === fastPointer){
        result = true;
        break
    }
        
    }
    return result
};