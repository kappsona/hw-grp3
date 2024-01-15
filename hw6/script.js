let balanceHtml = document.getElementById('balance');
let userInput = document.getElementById('user-input');
let depositeBtn = document.getElementById('deposite-btn');
let withdrawBtn = document.getElementById('withdraw-btn');

let balance = 0

depositeBtn.addEventListener('click',function(){
    let value = Number(userInput.value);

    balance = balance + value;  

    balanceHtml.textContent = 'Balance' + balance;
})

withdrawBtn.addEventListener('click',function(){
    let value = Number(userInput.value);

    if(balance > value){
        balance = balance -value
    }else{
        alert('Not enought money')
    } 

    balanceHtml.textContent = 'Balance' + balance;
})