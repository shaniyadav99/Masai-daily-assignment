// - **Question:** Search for a target value in a rotated sorted array; return its index or -1 if not found.
    
//     **Input:** Array: `[4, 5, 6, 7, 0, 1, 2]`, Target: `0`
    
//     **Expected Output:** `4`
function binaryS(arr,target){
    let i=0,j=arr.length-1;
    while(i<=j){
        let mid=i+Math.floor((j-i)/2);
        if(arr[mid]===target){
            return mid;
        }
        else if(arr[mid]>target){
            if(arr[i]>target){
                i=mid+1;
            }
            else {
                j=mid-1;
            }
        }
        else {
            if(arr[i]<target){
               i=mid-1;
            }
            else {
                j=mid+1;
            }
        }
    }
    return -1;
}
let arr=[4, 5, 6, 7, 0, 1, 2],target=0;
console.log(binaryS(arr,target));