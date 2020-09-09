setTimeout(function a(){
    console.log("hello");
    setTimeout(function c(){
        console.log("last one");
    },6000);
},4000);
setTimeout(function b(){
    console.log("hii");
},5000);
function add()
{
    console.log(10+20);
}
add();
//30
//hello
//hi
//last one
//based on millisecond timeout
