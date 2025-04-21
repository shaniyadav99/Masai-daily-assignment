//3. **Question:** Remove all zeros from an integer array, preserving order.
// Input:** `[0, 1, 0, 2, 3, 0, 4]`
//Expected Output:** `[1, 2, 3, 4]`

function removeZero(arr){
    let ans=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==0){
            ans.push(arr[i]);
        }
    }
    console.log(ans)
}
let arr=[0, 1, 0, 2, 3, 0, 4];
removeZero(arr)