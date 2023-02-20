//ex 1
 var arr =['a','b','c','d','e']
for (var i in arr)
  console.log(arr[i]) 
//ex 2
var display = '';
for(var i = 1; i<= 100; i++)
{
	if(i === 52 || i === 100 || i === 72)
  	display += ` |${i}| `
  else
  	display += `${i} `
	if(i % 10 === 0)
  {
  console.log(display)
  display = ""
  }
  
}
//ex 3
var answer = prompt('please type a number')
console.log(answer) 
//ex 4
 var stop = false
while(!stop)
{
  var answer = prompt('write stop')
  if(answer === 'stop')
    stop = true
} 
//ex 5
var answer;
while(isNaN(answer))
{
  var answer = prompt('please type a number');
}
  var arr= []
  for(var i =0; i<= answer; i++)
    arr.push(i)
  console.log(arr) 
//ex 6
 var arr =['a','b','c','d','e'];
 var answer = prompt('ask for someone')
 var found = false
 for( i in arr)
 {
     if(arr[i] === answer)
      found = true;
 }
 console.log(found) 
 //ex 7
     var answer = 5;
     var row ='';
     for (var i = 0; i< answer; i++)
       row+='*'
     for (var i = 0; i< answer; i++)
        console.log(row)  
    //ex 8
  var answer = prompt('please type a number');
  var row ='';
  for (var i = 0; i< answer; i++)
    row+='*'
  for (var i = 0; i< answer; i++)
    console.log(row) 
    //ex 9
    var draw = '*';
    for( var i= 1; i<8; i++)
    {
      console.log(draw)
      draw= i<4 ? draw+='*' : draw.substring(0, draw.length-1);
    } 