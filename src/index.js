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
  let arrTotalAmount = [];
  let amount = 0;
  let temp = number;
  let k = 1;

  for(let i = 0; i < arrSimpleDivisors.length; i++){
  	while(temp >= Math.pow(arrSimpleDivisors[i], k)){
  		amount+= Math.floor(temp / Math.pow(arrSimpleDivisors[i], k)) ;
  		k++;
  	}
  	arrTotalAmount[i] = Math.floor(amount/arrPower[i]);
  	amount = 0;
  	k = 1;
  }
 
  let min = arrTotalAmount[0];
  for(let i = 1; i < arrTotalAmount.length; i++){
  		if (arrTotalAmount[i] < min){
  			min = arrTotalAmount[i];
  		}
  }
  return min;
}