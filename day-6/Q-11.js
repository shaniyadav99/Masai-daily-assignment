// 11. **Question:** Find the longest common prefix among an array of strings.
    
//     **Input:** `["flower", "flow", "flight"]`
    
//     **Expected Output:** `"fl"`
function longestCommon(arr){
    for (let i = 0; i < arr.length; i++) {
        let str=arr[i].split('');
        console.log(str)
    }
}
let nums=["flower", "flow", "flight"];
longestCommon(nums);
