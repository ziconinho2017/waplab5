const arr = [10,20,30,9,21,23,8,7,5,15,2,8,6,31];
function sumOfElementGreaterThan20(){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] > 20){
            sum += arr[i];
        }
    }
    return sum;
}
let sum = sumOfElementGreaterThan20();
console.log(sum);
const getNewArr = function(arr){
    let arrNew = [];
    for(let i = 0;i <arr.length;i++){
        if(arr[i].length > 5 && arr[i].indexOf('a') != -1){
            arrNew.push(arr[i]);
        }
    }
    return arrNew;
}
console.log(getNewArr(['Rahmat','Yugal','Elias','Jaikishan']));