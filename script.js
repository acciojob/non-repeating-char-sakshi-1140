function firstNonRepeatedChar(str) {
 // Write your code here
	for(let i=0;i<str.length;i++)
 {
   let temp=str[i]
   if(str.indexOf(temp)==str.lastIndexOf(temp))
   return temp
 }
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
