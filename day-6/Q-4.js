// 4. **Question:** Rotate an integer array to the right by *k* positions.
//Input:** Array: `[1, 2, 3, 4, 5]`, k: `2`
//Expected Output:** `[4, 5, 1, 2, 3]`
function rotateZero(nums, k) {
    let ans=[];
    for(let i=nums.length-k;i<nums.length;i++){
        ans.push(nums[i]);
    }
    for(let i=0;i<nums.length-k;i++){
        ans.push(nums[i]);
    }
    for(let i=0;i<nums.length;i++){
        nums[i]=ans[i];
    }
    console.log(ans)
}
let arr = [1, 2, 3, 4, 5],
  k = 2;
rotateZero(arr, k);
