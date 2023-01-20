// Leet Code Link - https://leetcode.com/problems/next-greater-element-i/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var nextGreaterElement = function(nums1, nums2) {
    var stack = [];
    
    var res = [];
    
    for(var i = 0; i < nums2.length; i++){
        if(stack.length == 0){
            stack.push(i);
        }else{
            if(nums2[stack[stack.length-1]] > nums2[i]){
                stack.push(i);
            }else{
                while(nums2[stack[stack.length-1]] < nums2[i]){
                    res[stack[stack.length-1]] = nums2[i];
                    stack.pop();
                }
                stack.push(i);
            }
        }
        
    }
    // console.log(stack);
    while(stack.length > 0){
        res[stack[stack.length-1]] = -1;
        stack.pop();
    }
    // console.log(res);
    var res2 = [];
    for(i = 0; i < nums1.length; i++){
        for(var j = 0; j < nums2.length; j++){
            if(nums1[i] == nums2[j]){
                res2.push(res[j]);
            }
        }
    }
    return res2;
};

console.log(nextGreaterElement([1,3,5,2,4], [5,4,3,2,1]));