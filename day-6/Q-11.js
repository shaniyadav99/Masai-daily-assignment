// 11. **Question:** Find the longest common prefix among an array of strings.
    
//     **Input:** `["flower", "flow", "flight"]`
    
//     **Expected Output:** `"fl"`
function longestCommon(arr){
    let ans='',str='';
    for (let i = 0; i < arr[0].length; i++) {
         str+=arr[0][i];
         for(let j=0;j<arr.length;j++){
            if(!arr[j].includes(str)){
                console.log(ans);
                return;
            }
         }
         ans+=arr[0][i];
    }
    console.log(ans);
}
let nums=["flower", "flow", "flight"];
longestCommon(nums);
