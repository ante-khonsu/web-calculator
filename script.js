const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent==='C'){
            display.textContent = '';
        }
        else if (button.textContent==='='){
            try {
                display.textContent = eval(display.textContent);
            } 
            catch {
                display.textContent = 'Error';
            }
        }
        else if (button.textContent === '+/-') {
            display.textContent = String(-parseFloat(display.textContent));
        }
        else if (button.textContent === '%') {
            display.textContent = String(parseFloat(display.textContent) / 100);
        }
        else{
            display.textContent += button.textContent;
        }
    });
});

