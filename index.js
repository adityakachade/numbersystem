const numbers = [
    3, 7, 2, 15, 9, 20, 5, 14, 12, 1, 8, 11, 6, 19, 4, 10, 17, 13, 16, 18,
  ];

  let even =[];
  let odd=[]

  for (i=o;i<=numbers.length;i++){
    if(number[i]%2==0){
        even.push(numbers[i])
    }else if(number[i]%2==1){
        odd.push(numbers[i])
    }
  }
  console.log("Even numbers")
  for(let i = 0; i<=even.lenght;i++){
    console.log(even[i])
  }

  console.log("Odd numbers")
  for(let i = 0; i<=odd.lenght;i++){
    console.log(odd[i])
  }