/*
$(document).ready(function(){
    
    var inicio = $("#sliderInicio");
    var platillos =$("#sliderPlatillos")

    inicio.owlCarousel({
       items:1,
        loop: true,
        dots:true,
       touchDrag:true,
       autoHeight:true,
            
   })

   platillos.owlCarousel({
    items:1,
     loop: true,
     dots:true,
    touchDrag:true,
    autoHeight:true,
         
})
    
  });
*/
// variables para abrir el menu de cel
const menuCel = document.querySelector('.menu-toggle');
const navegacion = document.querySelector('.nav');


//funciones
let abrirMenu = function(){
  menuCel.classList.toggle('is-active')
  navegacion.classList.toggle('mov');
 
}


// anchor
function anchorLinkHandler(e) {
    const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);

    e.preventDefault();
    const targetID = this.getAttribute("href");
    const targetAnchor = document.querySelector(targetID);
    if (!targetAnchor) return;
    const originalTop = distanceToTop(targetAnchor);

    window.scrollBy({ top: originalTop, left: 0, behavior: "smooth" });

    const checkIfDone = setInterval(function() {
        const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
        if (distanceToTop(targetAnchor) === 0 || atBottom) {
            targetAnchor.tabIndex = "-1";
            targetAnchor.focus();
            window.history.pushState("", "", targetID);
            clearInterval(checkIfDone);
        }
    }, 100);
}

//const linksToAnchors = document.querySelectorAll('a[href^="#"]');
const linksToAnchors = document.querySelectorAll('nav a[href^="#"]');

const linkSlider = document.querySelectorAll('.unitem .btnC a[href^="#"]')

console.log(linkSlider)
linksToAnchors.forEach(each => (each.onclick = anchorLinkHandler));

linkSlider.forEach(
  each => (each.onclick = anchorLinkHandler)  
)

//eventos
menuCel.addEventListener('click', abrirMenu);

const slideHome = new Siema ({
selector:'#sliderInicio',
duration: 500,
easing: 'ease-out',
perPage: 1,
startIndex: 0,
draggable: true,
loop: true

});
setInterval( ()=>slideHome.next(), 6000)

const izq = document.querySelector('#izq')
const der = document.querySelector('#der')

izq.addEventListener('click', atras)
der.addEventListener('click', adela)

function atras(e){
    e.preventDefault()
    slidePlatillos.prev()
}

function adela(e){
    e.preventDefault()
    slidePlatillos.next()
}

const slidePlatillos = new Siema(
    {
selector: '#sliderPlatillos',
duration: 500,
easing: 'ease-out',
perPage: 1,
startIndex: 0,
draggable: true,
loop: true
    }
)



    const submit = document.querySelector('#submit');
    const alerta = document.getElementById('alerta');
    let nombre = document.querySelector('#nombre');
    let email = document.querySelector('#email');
    let tel = document.querySelector('#tel');
    let come = document.querySelector('#come');
   


    submit.addEventListener('click', enviar);

    function enviar(e){
        e.preventDefault();

        let nombreVal = nombre.value;
        let emailVal = email.value;
        let telVal = tel.value;
        let comeVal = come.value; 

     
         if (nombreVal.length === 0 || emailVal.length ===0){
            alert('Por favor llene los compos de Nombre y Email')
        }else{

             // crear el objeto request
        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'contact.php');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.onload = function(){

        if( xhr.status !== 200){
            return alert('Ocurrio un problema, intentarlo mas tarde');
        }

        //let response = JSON.parse(xhr.responseText);
        let response = xhr.responseText;

        console.log(response)
        if(response.message === 0){
            return alert (response.error);
        }
        
        alerta.innerHTML='Mensaje enviado con exito';
        }
 
        let data =  'nombre1=' + nombreVal +
        '&email1=' + emailVal +
        '&tel1=' + telVal +
        '&mensaje1=' + comeVal;

        xhr.send(encodeURI(data));
        //limpio el mensaje
        alerta.innerHTML='';

        }

    }
    

// lang


