// 12. **Question:** Implement substring search: return the starting index of the first occurrence of a pattern in a text, or -1 if not found.
    
//     **Input:** Text: `"hello world"`, Pattern: `"world"`
    
//     **Expected Output:** `6`
function findFirstOccur(str,pattern){
    let k=pattern.length,arr=[];
    for(let i=0;i<k;i++){
        arr.push(str[i]);
    }
    if(arr.join("")===pattern){
        return 0;
    }
    let index=0;
    for(let i=k;i<str.length;i++){
        arr.shift();
        arr.push(str[i]);
        index++;
        if(arr.join("")===pattern){
           console.log(index);
           return;
        }
    }
    console.log(-1);
}
let s="hello wo world",p="world";
findFirstOccur(s,p);