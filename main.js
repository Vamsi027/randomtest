let arr=[3,4,5,1,9,8,0]
let maxi=arr[0]
let mini=arr[0]
for(let i=0;i<arr.length;i++)
{
    if(arr[i]<mini)
    mini=arr[i]
    if(arr[i]>maxi)
    maxi=arr[i]
}

console.log(maxi,mini)





//const fruits=['apples','oranges']
//fruits[2]='banana'
//console.log(fruits)
//fruits.unshift('grapes')
//console.log(fruits)
//fruits.push('strawberries')
//console.log(fruits)
//fruits.pop()
//console.log(fruits)
//console.log(Array.isArray(fruits))
//console.log(fruits.indexOf('banana'))



//const name='vamsi'
//const age=22
//const address='hyd'

//const ans=`My name is ${name}, age is ${age}, address is ${address}`
//console.log(`persolnal details = ${ans}`)

//var arr=ans.split(',')
//console.log(arr)

//let a=2
//let b=3

//console.log(`before swapping a=${a},b=${b}`)

//a=a+b
//b=a-b
//a=a-b

//console.log(`after swapping a=${a},b=${b}`)
// let str='abcd'
// let newString=''
// for (var i = str.length - 1; i >= 0; i--) { 
//    newString += str[i];
//}
//console.log(newString);

//if(newString==str)
//    console.log('YES')
//else
//    console.log('NO')