var counter=1000;
function mycount()
{
    //Re-declaring
    var counter=34;//34
    counter++;//35
    console.log(counter);//35
}
counter++;//1001
mycount();//35
console.log(counter);//1001