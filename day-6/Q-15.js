// 15. **Question:** Calculate the sum of digits of a non-negative integer.
    
//     **Input:** `8472`
    
//     **Expected Output:** `21`
function digitSum(n){
    let ans=0;
    while(n>0){
        let rem=n%10;
        ans+=rem;
        n=Math.floor(n/10);
    }
    console.log(ans);
}
let digit=8472;
digitSum(digit);