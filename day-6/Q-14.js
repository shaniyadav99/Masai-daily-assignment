// 14. **Question:** Count the number of vowels in a string.
    
//     **Input:** `"implementation"`
    
//     **Expected Output:** `6`
function countVowels(s){
    let count=0;
    for(let i=0;i<s.length;i++){
        if(s[i]==='a'||s[i]==='e'|| s[i]==='i'||s[i]==='o' || s[i]==='u'){
            count++;
        }
    }
    console.log(count);
}
let str="implementation";
countVowels(str);