//Triangle
var number = "#";
for(var number = "#"; number < "#######"; number += "#")
console.log(number)
// FizzBuzz
for(var i=1; i<100; i++){
  if(i%3===0)
  console.log("Fizz");
  else if(i%5==0)
  console.log("Buzz");
  else {
    console.log(i)
  }
}

for(var i = 1; i <100; i++){
  if((i%3) === 0 && (i%5)===0){
    console.log("FizzBuzz");
  } else if((1%3) === 0){
    console.log("Fizz");

  } else if((i%5)=== 0){
    console.log("Buzz");
  } else {
    console.log(i);
  }
};
//Chess Board= Code 1
var string ="";
for(var i = 0; i < 8; i++){
  for(var j = 0; j<8; j++){
    if((i+j)%2 == 0) string += "";
    else string += "#";

  }
  console.log(string);
  string="";
}

//Chess Board= Code 2
for (var i = 0; i < n; i++){
  for(var j = 0; j<n; j++){
    if((i+j)%2==0){
      console.log("#");
    } else{
      console.log("");
    }
  console.log("\n")
}
};
