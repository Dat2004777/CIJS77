let arr = [1,2,3,3,5,6,7,6,3,2,2,1];
const Nodup=(arr) => {
   const arr2 =  arr.reduce((total,num) => {
          if(!total.includes(num)) {
               return [...total,num];
          }
          else {
               return total;
          }
     },[]);
     return arr2;
}
console.log(Nodup(arr));