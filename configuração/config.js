/*const input = document.querySelector('#cpf')

input.addEventListener('keypress', () => {
    let inputLength = input.value.length

    // MAX LENGHT 14  CPF
    if (inputLength == 3 || inputLength == 7) {
        input.value += '.'
    }else if (inputLength == 11) {
        input.value += '-'
    }
})*/



/*Config Feita com Ajax*/ 

$(document).ready(function(){

$("#cpf").mask("999.999.999-99");

});