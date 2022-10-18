const arr = [1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3];
const count=(arr) => {
    let count=0;
const arr2 = arr.reduce((total,num) => {
   const count2=arr.filter((item)=> item===num).length; 
   if(count2>=count){
    count=count2;
    return {value:num,count:count2};
    
   } 
   else {
    return total;
   }
},{});
return arr2;
}
console.log(count(arr));