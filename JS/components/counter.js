/*
REIKALAVIMAI:
- rasti vieta
-istraukti skaiciu
-kas sekunde ta skaiciu mazinti iki nulio
-pasiekus nuli - parasyti FINITO
*/


function counter(selector) {
    const DOM = document.querySelector(selector);
    let number = parseInt(DOM.innerText);

    const timer = setInterval(function () {
        DOM.innerText = number;
        number--;
        if (number < 0) {
            clearInterval(timer);
            DOM.innerText = 'FINITO';
        }
    }, 1000);

}



export { counter }