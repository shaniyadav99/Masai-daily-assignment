function fact(n){
    let ans=1;
    for(let i=1;i<=n;i++){
      ans*=i;
    }
    console.log(`Factoral of  ${n} is :  `,ans)
  }
  fact(5);