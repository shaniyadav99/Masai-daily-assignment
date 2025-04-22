// - **Question:** Given strings *s* and *t*, find the minimum window in *s* which will contain all characters of *t*. If there is no such window, return an empty string.
    
//     **Input:** s = `"ADOBECODEBANC"`, t = `"ABC"`
    
//     **Expected Output:** `"BANC"`
function minimumW(s,t){
    t=t.split('');
    let ans="",minLength=Infinity;
    for(let i=0;i<s.length;i++){
        let temp=[];
        for(let j=i;j<s.length;j++){
            temp.push(s[j]);
            console.log(temp)
            if(temp.includes(t) && temp.length<minLength){
                ans=temp;
                minLength=temp.length;
            }
        }
    }
    console.log(ans)
}
let s="ADOBECODEBANC",t="ABC";
minimumW(s,t)