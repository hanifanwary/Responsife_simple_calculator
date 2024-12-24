const display = document.querySelector(".display");

function addToDisplay (input) {
    display.value += input;
}

function claculate() {
    try {
       display.value = eval(display.value); 
    } catch {
        display.value = 'ERROR';
    }
    
}

function hapus() {
    display.value = '';
}
