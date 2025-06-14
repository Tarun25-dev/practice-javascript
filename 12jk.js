//using arruw function
//syntax - const variablename = (para1,para2,..)=>{return statements};
const arrowfun = (n1,n2)=>{return n1*n2};
console.log(arrowfun(7,10)); // 70

// finding number of positive numbers in array
let count=0;
function fun(arr){
     arr.forEach(s=>{
        if(s>0){
            count++
        }   
     }
     );
     console.log(count); //3
};
fun([1,2,3,-1,-2,-3]);
