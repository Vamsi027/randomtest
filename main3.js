var ul=document.querySelector('#users')

var l=JSON.parse(localStorage.getItem('userDetails'))
for(let i of l)
{
    var pi=document.createElement('li')
    pi.innerHTML=`<p>${i}</p><button class='btn'>Delete</button><button  class='btn'>Edit</button>`
    ul.appendChild(pi)
}