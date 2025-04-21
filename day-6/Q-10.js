//10. **Question:** Remove all duplicate characters from a string, preserving first occurrences.
    
// **Input:** `"programming"`
    
// **Expected Output:** `"progamin"`
function removeDuplicate(str){
    let set=new Set();
    for(let i=0;i<str.length;i++){
        set.add(str[i]);
    }
    let ans='';
    for(key of set){
        ans+=key;
    }
    console.log(ans)
}
let s="programming";
removeDuplicate(s);