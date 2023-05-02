
const special = document.querySelectorAll('.special-number')
const buttons = document.querySelectorAll('.number');
const input = document.getElementById('display');
const sign = document.querySelector('.sign');
const previous = document.querySelector('.previous')
const equal = document.querySelector('.equal');

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

            // case '%':
            //     special[j].style.background = 'black';
            //     special[j].style.color = 'white';
            //     let split = input.textContent.split(' ');
            //     input.textContent = input.textContent[input.length - 1] / input.textContent[0];
            //     break;    
        }
    })
}

equal.addEventListener('click', function () {
    let result = eval(`${previous.textContent} ${sign.textContent} ${input.textContent}`);
    sign.textContent = '';
    previous.textContent = '';
    input.textContent = result;

})





