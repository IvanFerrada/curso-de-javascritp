document.addEventListener('DOMContentLoaded',inicializacion);

function inicializacion(){

    let cambiaClaseButton = document.getElementById('cambiaClase');

    cambiaClaseButton.addEventListener('click',cambiaEstilosClase);


    // este evento cambiar todos los elementos!!

    let cambiarLiButton =document.getElementById('cambiarLi');

    cambiarLiButton.addEventListener('click',cambiaEstilosLi);


}

function cambiaEstilosClase(){
    let elementos = document.getElementsByClassName('item');

    console.log(elementos);

    console.log(elementos.length);

    console.log(elementos.item(0));


for(let i = 0 ; i < elementos.length; i++){

    console.log('item:',elementos.item (i));

    elementos.item(i).style.color = '#399';

    }

}

// ByTagName('li') accerde ala etiqueta ejemplo ByTagName('footer');

function cambiaEstilosLi(){
    let liElementos = document.getElementsByTagName('li');

    console.log(liElementos);


for(let i = 0; i < liElementos.length; i++){

    console.log('item', liElementos.item(i));

    liElementos.item(i).classList.add('itemgrande');

    }
}
