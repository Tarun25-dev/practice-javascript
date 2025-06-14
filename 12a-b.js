// assignins afunction to a variable and add is a variable and add() is funtion calling
const add=function()
{
    console.log(2+3);
}
add();
add();

function runTwice(fun){
    fun();
    fun();
}
runTwice(function(){
    console.log('12b');
});
runTwice(add);
