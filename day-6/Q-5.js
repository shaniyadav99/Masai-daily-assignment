// 5. **Question:** Merge two sorted integer arrays into one sorted array.
//**Input:** `[1, 3, 5]` and `[2, 4, 6]
//**Expected Output:** `[1, 2, 3, 4, 5, 6]

function mergeArr(arr1,arr2){
    let ans=[];
    let i=0,j=0;
    while(i<arr1.length || j<arr2.length){
        if(arr1[i]<arr2[j]){
            ans.push(arr1[i]);
            i++;
        }
        else {
            ans.push(arr2[j]);
            j++;
        }
    }
    console.log(ans);
}
let nums1=[1, 3, 5],nums2=[2, 4, 6];
mergeArr(nums1,nums2);