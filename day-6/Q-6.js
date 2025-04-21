//6. **Question:** Find the second largest element in an integer array.
//**Input:** `[7, 2, 9, 4, 9, 5]`
//**Expected Output:** `7`
function findSecondLargest(arr){
    let max=-1,s_max=-1;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]>max){
            max=arr[i];
        }
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i]>s_max && arr[i]!==max){
            s_max=arr[i];
        }
    }
    console.log(s_max)
}
let arr=[7, 2, 9, 4, 9, 5];
findSecondLargest(arr);