// Dom de javascritp
console.log(document.forms[0].action);

console.log(document.forms[0].name);

// Camino de la jerarquia del metodo ejemplo: document.forms[0].elements[0].value='hola a todos!! ';

// document.forms[0].elements[0].value='hola a todos!! ';

// document.forms[0].campo.value='hola a todos en el campo!! ';

// document.forms[0].elformulario.campo.value='hola a todos 2 !!



// Metodos funciones asosiadas alos objetos 

document.getElementById('etiquetaCampo').textContent='aqui';

document.getElementById('c1').addEventListener('keyup',teclado);


// .textContent="" para cambiar el texto a un elemento

// agregar un evento al campo .addEventListener('click',)

document.getElementById('etiquetaCampo').addEventListener('click',cambiaFoco);

// con la funcion cambiaFoco Y el elemento .focus cambia el foco del click al campo de texto

function cambiaFoco (){
    document.forms.elformulario.campo.focus();
}

function teclado (){
    console.log('lo que escribiste esta aca!!', document.forms.elformulario.campo.value);
//}

// javascritp te da una variable ... this -----> odjeto sobre el cual se a detectado un evento  se ahorra el document.forms.elformulario.campo.value !!

function teclado (){
    console.log('lo que escribiste esta aca!!', this.value);
}

