
const special = document.querySelectorAll('.special-number')
const buttons = document.querySelectorAll('.number');
const input = document.getElementById('display');
const sign = document.querySelector('.sign');
const previous = document.querySelector('.previous')
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
            case 'AC':
                input.textContent = '';
                sign.textContent = '';
                previous.textContent = '';
                break;
            case '+/-':
                input.textContent = Number(input.textContent) * -1;
                break;
            case 'x':
                previous.textContent = `${input.textContent}`;
                sign.textContent = '*';
                input.textContent = '';
                break;    
            case '-':
                previous.textContent = `${input.textContent}`;
                sign.textContent = '-';
                input.textContent = '';
                break;
            case '+':
                previous.textContent = `${input.textContent}`;
                sign.textContent = '+';
                input.textContent = '';
                break;
            case '÷':
                previous.textContent = `${input.textContent}`;
                sign.textContent = '÷';
                input.textContent = '';

 
        }
    })
}

equal.addEventListener('click', function () {
    let result = eval(`${previous.textContent} ${sign.textContent == '÷' ? '/' : sign.textContent} ${input.textContent}`);
    if (result.toString().includes('.')) result = result.toFixed(6);
    sign.textContent = '';
    previous.textContent = '';
    input.textContent = result;

})

percent.addEventListener('click', function () {
    let result = previous.textContent * input.textContent / 100;
    input.textContent = eval(`${previous.textContent} ${sign.textContent} ${result}`);
    sign.textContent = '' , previous.textContent = '';
})




