// 8. **Question:** Find the maximum sum of any contiguous subarray (Kadane’s algorithm).
//Input:** `[-2, 1, -3, 4, -1, 2, 1, -5, 4]`
//Expected Output:** `6`  *(subarray `[4, -1, 2, 1]`)
function kadane(){
    let ans=0,max=-Infinity;
    for(let i=0;i<arr.length;i++){
        max=Math.max(max,ans);
        if(ans<0){
            ans=0;
        }
        ans+=arr[i];
    }
    console.log(max);
}
let arr=[-2, 1, -3, 4, -1, 2, 1, -5, 4];
kadane(arr);
