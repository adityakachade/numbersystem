const primearray = [
    3, 7, 5, 1, 11, 19, 17, 13
  ];

  let min =primearray[0]
  let max=primearray[0]

  for (let i=0;i<=primearray.length;i++){
    if(primearray[i]<min){
        min=primearray[i]
    }
    if(primearray[i]>max){
        max=primearray[i]
    }
  }
  console.log(min,"is the minminum number")
  console.log(max,"is the maximum number")