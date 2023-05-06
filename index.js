
const special = document.querySelectorAll('.special-number')
const buttons = document.querySelectorAll('.number');
const input = document.getElementById('display');
const equal = document.querySelector('.equal');
const percent = document.querySelector('.percent');


for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        if (input.textContent.includes('.') && buttons[i].textContent == '.') {
            return;
        }
        input.textContent += `${this.textContent}`
    })
}

for (let j = 0; j < special.length; j++) {
    special[j].addEventListener('click', function () {
        switch (special[j].textContent) {
            case 'C':
                input.textContent = '';
                break;
            // case '+/-':
            //     input.textContent = Number(input.textContent) * -1;
            //     break;
            case 'x':
                input.textContent += ' * ';
                break;    
            case '-':
                input.textContent += ' - ';
                break;
            case '+':
                input.textContent += ' + ';
                break;
            case '÷':
                input.textContent += ' / ';
                break;
 
        }
    })
}

equal.addEventListener('click', function () {
    let result = eval(`${input.textContent}`);
    if (result.toString().includes('.')) result = result.toFixed(6);
    input.textContent = result;

})

// percent.addEventListener('click', function () {
//     let result = previous.textContent * input.textContent / 100;
//     input.textContent = eval(`${previous.textContent} ${sign.textContent} ${result}`);
//     sign.textContent = '' , previous.textContent = '';
// })




