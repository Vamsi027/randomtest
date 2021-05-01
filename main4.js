const formElement=document.querySelector('#form-element');
formElement.addEventListener('submit',onSubmit);

function onSubmit(e)
{
    e.preventDefault();
    let nm=document.querySelector('#name');
    let em=document.querySelector('#email');
    let ph=document.querySelector('#phoneNo')    
    
    axios({
        method:'post',
        url:'https://crudcrud.com/api/8bad69f475834e5fbc80c7de2635c5f4/unicorns', 
        data:{
            name: nm.value,
            email:em.value,
            phone:ph.value
        }
        })
        .then(res => showOutput(res))
        .catch(err => console.error(err));
}

function showOutput(res) {
    document.querySelector('#studentDetails').innerHTML =
    `<pre>${JSON.stringify(res.data, null, 2)}</pre>`;  
}