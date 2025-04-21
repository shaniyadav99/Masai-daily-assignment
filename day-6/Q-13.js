// 13. **Question:** Check if a string is a palindrome (ignore case and non-alphanumeric characters).
    
//     **Input:** `"A man, a plan, a canal: Panama"`
    
//     **Expected Output:** `true`
function palindrome(str){
    let ans='';
    for(let i=0;i<str.length;i++){
        if(str.charCodeAt(i)>=97 &&str.charCodeAt(i)<=122 || str.charCodeAt(i)>=65 &&str.charCodeAt(i)<=91){
            ans+=str[i].toLowerCase();
        }
    }
    // console.log(ans);
    let i=0,j=ans.length-1;
    while(i<=j){
        if(ans[i]!==ans[j]){
            return false;
        }
        i++;
        j--;
    }
    return true;
}
const s="A man, a plan, a canal: Panama";
console.log(palindrome(s))
// palindrome(s)