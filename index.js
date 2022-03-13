const lista = document.querySelector('#pilha-items');
const input = document.querySelector('#input-pilha');
const addButton = document.querySelector('#add-button');
const removeButton = document.querySelector('#remove-button');

function pushItem() {
    if (input.value === undefined || input.value === '') {
       alert('Digite Algo');
    } else {
        let element = document.createElement('li');
        element.innerText = input.value;
        input.value = '';
        lista.appendChild(element);
    }
}

function popItem() {
    if (lista.children.length === 0 ) {
        alert('Pilha Vazia')
    } else {
        lista.removeChild(lista.children[0]);
    }
}

window.onload = function () {
addButton.addEventListener('click', pushItem);
removeButton.addEventListener('click', popItem);
}