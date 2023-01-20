var merge = function(nums1, m, nums2, n) {
    var arr = [];
    var l = 0;
    var r = 0;
    
    while(true){
        if(l == m){
            for(var i = r; i < n; i++){
                arr.push(nums2[i]);
            }    
            break;
        }else if(r == n){
            for(i = l; i < m; i++){
                arr.push(nums1[i]);
            }
            break;
        }        
        
        if(nums1[l] >= nums2[r]){
            arr.push(nums2[r]);
            r++;
        }else{
            arr.push(nums1[l]);
            l++;
        }
    }
    return arr;
    // console.log(arr);
};

var nums1 = [1,2,3,0,0,0];
// var nums1 = [1];
var m = 3;
var nums2 = [4,5,6];
// var nums2 = [];
var n = 3;
console.log(merge(nums1, m, nums2, n));