const calcButton = document.querySelector('button'); 
const resArea = document.querySelector('.res-box p');
const resTitle = document.querySelector('h3');
const inputs = document.querySelectorAll('input');

calcButton.addEventListener('click', (event)=>{
    const weight = document.getElementById('w').value;
    const height = document.getElementById('h').value / 100;
    const age = document.getElementById('a').value;
    const BMI = weight / (height*height);
    resTitle.innerText = "Your BMI is";
    resArea.innerText = Math.round((BMI + Number.EPSILON) * 100) / 100;
    for(let i=0; i<inputs.length; i++){
        inputs[i].value= '';
    }
    console.log(BMI);
})