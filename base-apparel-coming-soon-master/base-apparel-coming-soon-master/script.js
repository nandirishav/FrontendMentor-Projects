const inputvalidation = document.getElementById('small')
const input = document.getElementById('email').value
const btn = document.getElementById('btn')

const form = document.getElementById('form')
const email = document.getElementById('email')

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(!e.target.value){
        inputvalidation.style.display = "visible"
    }
})
