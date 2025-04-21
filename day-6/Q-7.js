//7. **Question:** Implement binary search on a sorted integer array; return the index of the target or -1 if not found.
//Input:** Array: `[1, 3, 5, 7, 9]`, Target: `7`
function binarySearch(arr,k){
    let i=0,j=arr.length-1;
    while(i<=j){
        let mid=i+(Math.floor((j-i)/2));
        if(arr[mid]===k){
            return mid;
        }
        else if(arr[mid]>k){
            j=mid-1;
        }
        else {
            i=mid+1;
        }
    }
    return -1;
}
let nums=[1, 3, 5, 7, 9],target=7;
let ans=binarySearch(nums,target);
console.log(ans)