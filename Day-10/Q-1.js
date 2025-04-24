// 1. **Question:** For each day’s temperature in an array, determine how many days you’d have to wait until a warmer day. If no warmer day comes, use 0.
    
//     **What’s happening?**
    
//     - You look forward from each index to find the next higher value.
//     - Count how many steps until that warmer temperature.
//     - If none exists, it stays 0.
        
//         **Input:**
        
    
//     ```
//     T = [73, 74, 75, 71, 69, 72, 76, 73]
    
//     ```
    
//     **Expected Output:**
    
//     ```
//     [1, 1, 4, 2, 1, 1, 0, 0]
    
//     ```
    
//     *(E.g. from 75 (index 2), the next warmer day is 76 at index 6, which is 4 days ahead.)*

function findTemp(arr){
    let ans=[];
    for(let i=0;i<arr.length-1;i++){
        let count=1,j=i+1;
        while(arr[i]>arr[j]){
            count++;
            j++;
        }
        ans.push(count);
    }
    ans.push(1)
    console.log(ans);
}
let temp=[73, 74, 75, 71, 69, 72, 76, 73];
findTemp(temp)