// //  - **Question:** Evaluate the value of an arithmetic expression in Reverse Polish Notation.
    
// **Input:** `["2","1","+","3","*"]`
    
// **Expected Output:** `9`  (because (2 + 1) * 3 = 9)
function arithmeticEvl(arr){
    let ans=0,index=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]==="+"){
            for(let j=i-1;j>=index;j--){
                ans+=Number(arr[j])
            }
            index=i+1;
        }
        else if( arr[i]==="-"){
            for(let j=i-1;j>=index;j--){
                ans-=Number(arr[j])
            }
            index=i;
        }
        else if( arr[i]==="*"){
            for(let j=i-1;j>=index;j--){
                ans*=Number(arr[j])
            }
            index=i;
        }
        else if( arr[i]==="/"){
            for(let j=i-1;j>=index;j--){
                ans=Math.floor(ans/Number(arr[j]))
            }
            index=i;
        }
    }
    console.log(ans);
}
let arr=["2","1","+","3","*"];
arithmeticEvl(arr)