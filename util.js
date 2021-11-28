const arr = [10,20,30,9,21,23,8,7,5,15,2,8,6,31];
function sumOfElementGreaterThan20(total, num){
    if(num > 20){
        total = total + num;
    }
    return total;
}
console.log(arr.reduce(sumOfElementGreaterThan20,0));
const getNewArr = function(arr){
   return arr.filter(s => s.length > 5 && s.indexOf('a') != -1);
}
console.log(getNewArr(['Rahmat','Yugal','Elias','Jaikishan']));