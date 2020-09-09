var i,x,y;
y=100;//if let y=100 is commentable
for(i=0;i<5;i++)
{
  x=10;
  //if we want a block level scope variable use "let" keyword
  //let y=100;//output will be 101 101 101 101 101
  console.log(++y);//101 102 103 104 105
}
console.log(i);//5
console.log(y);//undefined