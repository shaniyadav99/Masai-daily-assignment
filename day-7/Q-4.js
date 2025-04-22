// - **Question:** Return the *k* most frequent elements from an integer array.
    
//     **Input:** Array: `[1, 1, 1, 2, 2, 3]`, k = `2`
    
//     **Expected Output:** `[1, 2]`
function mostFreq(arr,k){
    let ans=[],count=1;
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]==arr[i+1]){
            count++;
        }
        else {
            if(count>=k){
                ans.push(arr[i]);
                count=1;
            }
        }
    }
    if(count>=k){
        ans.push(arr[arr.length-1]);
        count=1;
    }
    console.log(ans)
}
let nums=[1, 1, 1, 2, 2, 3,3],k=2
mostFreq(nums,k)