// LeetCode Link - https://leetcode.com/problems/valid-palindrome-ii/

function validPalindrome(s){
    var l = 0;
    var r = s.length-1;
    while (l < r) {
        if(s[l] != s[r]){
            return palindrome(s, l+1, r) || palindrome(s, l, r-1);
        }
        l++;
        r--;
    }
    return true;
}

function palindrome(s, left, right){
    while(left < right){
        if(s[left] != s[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}

var s = "cbbcc";
console.log(validPalindrome(s));



// <---------------------------Approach 2-------------------------------------
var left = 0;
    var right = s.length-1;
    
    // console.log(left, right);
    var countL = 0;
    var countR = 0;
    var isPalin = true;
    while(left < right && countL <= 1 && countR <= 1){
        if(s[left] == s[right]){
            left++;
            right--;
        }else{
            var l1 = left+1;
            var r1 = right;
            while(l1 < r1){
                if(s[l1] != s[r1]){
                    isPalin = false;
                    break;
                }
                l1++;
                r1--;
            }
            if(isPalin == true){
                return true;
            }
            // console.log(left, right);
            var l2 = left;
            var r2 = right-1;
            // console.log(l2, r2);
            while(l2 < r2){
                if(s[l2] != s[r2]){
                    isPalin = false;
                    break;
                }
                l2++;
                r2--;
                isPalin = true;
                }
            if(isPalin == true){
                return true;
            }else{
                return false;
            }
        }
    }
    return true;