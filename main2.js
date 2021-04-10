/*
const ul=document.querySelector('.items')

ul.firstElementChild.textContent='Hello'
ul.children[1].innerText='Brad'
ul.lastElementChild.innerHTML='<h1>Hello</h1>'
ul.firstElementChild.style.background='blue'
ul.children[1].style.background='yellow'

const btn=document.querySelector('.btn')

btn.addEventListener('click',(e)=>
{
    e.preventDefault();
    document.querySelector('body').style.background='black';
})
btn.addEventListener('mouseout',(e)=>
{
    document.querySelector('body').style.background='yellow';
})
btn.addEventListener('mouseover',(e)=>
{
    document.querySelector('body').style.background='green';
})
*/
const myform=document.querySelector('#my-form')
const nameInput=document.querySelector('#name')
const emailInput=document.querySelector('#email')
const message=document.querySelector('.msg')
const users=document.querySelector('#users')


myform.addEventListener('submit',onSubmit);
function onSubmit(e)
{
    e.preventDefault();
    if(nameInput.value===''||emailInput.value==='')
    {
        message.classList.add('error')
        message.innerHTML='Please enter all the fields';
        setTimeout(()=>message.remove(),3000)
    }
    else
    {
        localStorage.setItem('name',nameInput.value)
        localStorage.setItem('email',emailInput.value)
        console.log(nameInput.value);
        console.log(emailInput.value);
    }
}

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    var name=window.localStorage.getItem('name')
    var email=window.localStorage.getItem('email')
    message.innerHTML=`<h1 color='green'>${name} and ${email} name and email from local storage</h1>`;
    
});