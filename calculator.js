var oneBtn =document.getElementById('calc-one')
var twoBtn =document.getElementById('calc-two')
var threeBtn =document.getElementById('calc-three')
var fourBtn =document.getElementById('calc-four')
var fiveBtn =document.getElementById('calc-five')
var sixBtn =document.getElementById('calc-six')
var sevenBtn =document.getElementById('calc-seven')
var eightBtn =document.getElementById('calc-eight')
var nineBtn =document.getElementById('calc-nine')
var zeroBtn =document.getElementById('calc-zero')
var decimalBtn = document.getElementById('calc-decimal')
var clearBtn = document.getElementById('calc-clear')
var displayVal = document.getElementById('calc-display')
var backBtn = document.getElementById('calc-back')
var calcNumBtns = document.getElementsByClassName('calc-btn-num')
var calcOperatorBtns = document.getElementsByClassName('calc-btn-operator')

var displayValEl = '0'
var paddinVal;
var evalStringArr = [];

var updateDisplay = (clickObj) => {
    var btnText = clickObj.target.innerText;
    if(displayValEl === '0'){
        displayValEl = ''
    }
    displayValEl += btnText;
    displayVal.innerText = displayValEl; 
}

var performOperator = (clickObj) => {
    var operator = clickObj.target.innerText;
    switch(operator){
        case '+':
            if(displayValEl < Number.MAX_SAFE_INTEGER){
                paddinVal = displayValEl;
                displayValEl = '0';
                displayVal.innerText = displayValEl;
                evalStringArr.push(paddinVal);
                evalStringArr.push('+')
            }
            break;
        case '-':
            if(displayValEl < Number.MAX_SAFE_INTEGER){
                paddinVal = displayValEl;
                displayValEl = '0';
                displayVal.innerText = displayValEl;
                evalStringArr.push(paddinVal);
                evalStringArr.push('-')
            }
            break;
        case '*':
            if(displayValEl < Number.MAX_SAFE_INTEGER){
                paddinVal = displayValEl;
                displayValEl = '0';
                displayVal.innerText = displayValEl;
                evalStringArr.push(paddinVal);
                evalStringArr.push('*')
            }
            break;
        case '/':
            if(displayValEl < Number.MAX_SAFE_INTEGER){
                paddinVal = displayValEl;
                displayValEl = '0';
                displayVal.innerText = displayValEl;
                evalStringArr.push(paddinVal);
                evalStringArr.push('/')
            }
            break;
        case '=':
            evalStringArr.push(displayValEl);
            var evelu = eval(evalStringArr.join(' '));
            displayValEl = evelu + '';
            displayVal.innerText = displayValEl;
            evalStringArr = [];
        default:
            break;
    }
}


for(let i = 0; i < calcNumBtns.length; i++){
    calcNumBtns[i].addEventListener('click', updateDisplay, false)
}

for(let i = 0; i < calcOperatorBtns.length; i++){
    calcOperatorBtns[i].addEventListener('click', performOperator, false)
}


clearBtn.onclick = () =>{
    displayValEl = '0';
    paddinVal = undefined;
    evalStringArr = [];
    displayVal.innerHTML = displayValEl;
}

backBtn.onclick = () =>{
    let lenghtOfDisplayVal = displayValEl.length;
    displayValEl = displayValEl.slice(0, lenghtOfDisplayVal - 1)
    displayVal.innerText = displayValEl; 
}

decimalBtn.onclick = () =>{
    if(!displayValEl.includes('.')){
        displayValEl += '.'; 
    }
    displayVal.innerText = displayValEl; 
}

