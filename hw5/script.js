let checkBox = document.getElementById('accept');
let pElement = document.getElementById('result');
let btn = document.getElementById('btn');

btn.addEventListener('click',function(){
    let value = checkBox.checked;
    if (value === true){
        pElement.textContent = 'You are good human'
    }else{
        pElement.textContent = 'You are bad human'
    }
})