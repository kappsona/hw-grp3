let nameInput = document.getElementById('name-input');
let emailInput = document.getElementById('email-input');

let btn = document.getElementById('btn')

btn.addEventListener('click',function(){
    console.log(nameInput.value,emailInput.value)
})