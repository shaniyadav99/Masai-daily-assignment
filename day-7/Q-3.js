// - **Question:** Given strings *s* and *t*, find the minimum window in *s* which will contain all characters of *t*. If there is no such window, return an empty string.
    
//     **Input:** s = `"ADOBECODEBANC"`, t = `"ABC"`
    
//     **Expected Output:** `"BANC"`
function minimumW(s,t){
    let temp=[],index=Infinity,ans=[];
    for(let i=0;i<s.length;i++){
        temp.push(t[i]);
        if(temp.includes(t.split('')) && temp.length<index){
            ans=temp;
            index=temp.length;
        }
        while(temp.length>index){
            temp.shift();
            if(temp.includes(t.split('')) && temp.length<index){
                ans=temp;
                index=temp.length;
            }
        }
    }
    console.log(ans)
}
let s="ADOBECODEBANC",t="ABC";
minimumW(s,t)