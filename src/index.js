module.exports = function getZerosCount(number, base) {
  let arrSimpleDivisors = [];
  let arrPower = [];
  let index = 0;
  let count = 0;

  for (let i = 2; i <=base; i++)
  {
  	while(base >1 && base >= i && base%i === 0){
  		base /= i;
  		count++;
  		arrSimpleDivisors[index] = i;
  		arrPower[index] = count;
  		if(base > 1 && base >= i && base%i!==0){
  			index++;
  			count = 0;
  		}
  	}
  }
  
  if(arrSimpleDivisors.length > 2 && arrSimpleDivisors[0] === 2){
  	arrSimpleDivisors.shift();
  	arrPower.shift();	
  }

  let arrPowerNumber = [];
  for(let i = 0; i <arrSimpleDivisors.length; i++){
  	arrPowerNumber[i] = 0;
  }
  let buffer;
  count = 0;

  for(let i = arrSimpleDivisors[0]; i <= number; i++){
  	buffer = i;
  	for(let j = 0; j< arrSimpleDivisors.length; j++){
  		while(buffer > 1 && buffer >= arrSimpleDivisors[j] && buffer%arrSimpleDivisors[j] === 0){
  			buffer /=arrSimpleDivisors[j];
  			arrPowerNumber[j] ++;
  		}
  	}
  }
  
  let pow;
  let min = Math.floor(arrPowerNumber[0] / arrPower[0]);
  for (let i = 1; i < arrPowerNumber.length; i++){
     pow = Math.floor(arrPowerNumber[i] / arrPower[i]);
     if (pow < min){
     	min = pow;
     } 
  }
 return min;

}