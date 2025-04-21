function findDup(arr,k){
    let count=0;
    for(let i=0;i<arr.length;i++){
      if(arr[i]===k){
        count++;
      }
    }
    console.log(`count occurance of value  ${k} is: `, count);
  }
  let nums=[2, 3, 2, 4, 2],val=2;
  findDup(nums,val);
