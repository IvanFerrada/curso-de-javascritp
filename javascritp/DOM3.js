document.addEventListener('DOMContentLoaded',launchCookieAdvisor);

function launchCookieAdvisor(){

    let  capaCookies = document.createElement('div');  

    capaCookies.innerHTML='<p> Tienes que aceptar las cookies <span> Aceptar </span> </p>';

    capaCookies.classList.add('avisoCookies');

    let todosSpanDiv = capaCookies.getElementsByTagName('span');

    todosSpanDiv.item(0).addEventListener('click',function(){

    capaCookies.parentElement.removeChild(capaCookies);

    });

    document.getElementsByTagName('div').item(0).appendChild(capaCookies);
    
}

    // document.createElement( ) sirve para crear un elentos en tiempo de ejecucion cuando el DOM este listo para recibir acciones que no esta en el html 

    // Crear aplicar html a la capa con  .innerHTML
 
    // volcar injectar agregar  inner dentro del documento html 

    // Borrar aviso de cookies ejemplo...

    // para borrar un elemto solo te permite hacerlo desde el elemento padre ejemplo.. capaCookies.parentElement.removeChil(capaCookies); o bien capaCookies.remove(); 
    
    // difencia entre javascritp con ajax 




