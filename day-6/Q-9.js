//Question:** Check if two strings are anagrams of each other.
//Input:** `"listen"` and `"silent"`
//Expected Output:** `true`
function anagrams(str1,str2) {
    let ans1=[],ans2=[];
    if(str1.length!==str2.length){
        return false;
    }
    for(let i=0;i<str1.length;i++){
        ans1.push(str1[i])
        ans2.push(str2[i]);
    }
    ans1=ans1.sort().join("")
    ans2=ans2.sort().join("")
   return  ans1===ans2;
}
let s1="listen",s2="silent";
console.log(anagrams(s1,s2));
// anagrams(s1,s2)