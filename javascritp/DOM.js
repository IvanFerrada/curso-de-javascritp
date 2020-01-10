// Dom de javascritp
console.log(document.forms[0].action);

console.log(document.forms[0].name);

// Camino de la jerarquia del metodo ejemplo: document.forms[0].elements[0].value='hola a todos!! ';

// document.forms[0].elements[0].value='hola a todos!! ';

// document.forms[0].campo.value='hola a todos en el campo!! ';

// document.forms[0].elformulario.campo.value='hola a todos 2 !! ';


// Metodos funciones asosiadas alos objetos 

document.getElementById('etiquetaCampo').textContent='aqui';
// .textContent="" para cambiar el texto a un elemento

// agregar un evento al campo .addEventListener('click',)

document.getElementById('etiquetaCampo').addEventListener('click',cambiaFoco);

// con la funcion cambiaFoco Y el elemento .focus cambia el foco del click al campo de texto

function cambiaFoco (){
    document.forms.elformulario.campo.focus();
}




