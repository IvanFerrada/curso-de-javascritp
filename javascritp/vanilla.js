// Esto es javascrip desde javascrip puro hasta Emascritp6

// Hola mundo

alert("hola mundo");
document.write("hola mundo");
console.log("hola mundo");


// consola 

console.error("error en el hola mundo");


// variables  & tipos de datos.

// "string"  'string' // cadena de texto 

// numero = 15  // numeros enteros.

// numero-float  16.50 //numero con decimales.
let pass =123;
let input =prompt('ingresa pass');

if(input == pass){
    si();
}

function si (){
    console.log('si');
}
// booleanos = true; // tipo de dato booleano true o false.

// array ['ivan','matias','ferrada']  // tipo de dato array es una lista de tipos de datos.

// Object // tipo de dato objeto. Este tipo de dato crea un objeto con todos los topos de datos de un usuario su sintaxis es la de json.

// sintaxis de objeto user1

let user1 = {
    "userName":'ivan',

    "score": 70.4,

    "horasJuego":'true',

    "friends": ['ivan','matias'let pass =123;
    let input =prompt('ingresa pass');
    
    if(input == pass){
        si();
    }
    
    function si (){
        console.log('si');
    }
console.log(user1);

// variables & constantes  las variables guardan un dato en memoria se puede usar var o let. Las constantes son lo mismo solo que no se pueden modificar.

var nombreUsuario = 'ian';

let segundoNombre = 'curtis';


// en las constantes al querer cambiar el valor de la misma se produce un error.

const constante = 'ivan';

// constante ='ferrada';

// error Uncaught TypeError: Assignment to constant variable.

// camencase sintaxis nombreDeUsuario.


// operadores  + - / * % == === < & >  <=  >=  !=

//concatenacion unir dos strings

let nombre1 = 'jhon';

let nombre2 ='carter';

let nombreCompleto = nombre1 + nombre2;

console.log(nombreCompleto);

// sumar 
let nm1 = 70;

let nm2 = 100;

let resultado = nm1 + nm2 ;

console.log(resultado);

//comparar < > == !=

resultado = nm1 != nm2;

console.log(resultado);

// Condicionales control de flujo. Ejemplos.

let passDb = 'qwerty';

let input = prompt("ingresa la contraseña");

if(input == passDb){
    document.write('Inicio de sesion!!');

}else{
    console.error('Error al iniciar sesion!!')
}


// Contro de flujo switch

let typeCard = 'debid Card';

switch(typeCard){

    case 'debid Card':
        console.log('operacion exitosa!!');

        break;

}


// iterador o bucle  sintaxis
let i = 0;
while(i < 50 ){
    console.log('hola');
    i++;
}


// buble for sintaxis

// ( .length te da la posicion del array. )

let arrays = ['ivan','matias','ferrada'];

for(let i = 0; i < arrays.length; i++){
    console.log (arrays[i] );
}

// funciones 


function saludar (name){
    console.log('funcion'+" "+ name);
}

saludar('marcos');

function add (n1 , n2 ){
    console.log(n1+n2);
}

// en add (agrego los datos a sumar )
add(100,80);
















