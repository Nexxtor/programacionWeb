/*document.getElementId()*/
var container = document.getElementById("c1");
container.innerText="¡Hola mundo!";
container.style.backgroundColor="#000000";
container.style.color="#1cb723";
container.style.height="200px";
container.style.width="200px";
container.innerHTML="<input type='text' placeholder='Escriba su texto'>";

/*document.getElementBtyClassName*/

var containers = document.getElementsByClassName("c2");

console.log(containers);

Array.prototype.forEach.call(containers, element=>{
    element.style.backgroundColor="#009999";
});


/*cambie le tamaño de los elementos  width:200px; height:200px*/
Array.prototype.forEach.call(containers, element=>{
    element.style.width="200px";
    element.style.height="200px";
});

/*Agregue una caja de texto */
Array.prototype.forEach.call(containers, element=>{
    element.innerHTML="<input type='text' placeholder='Escriba su texto'>";
});


/*Eventos */

/*al boton con el id btn-click agregele un evento que al momento de darle click 
este muestre un alert con el mensaje "hola mundo" */
var boton=document.getElementById("btn-click");

boton.onclick = function(evt)
{
    alert("Hola mundo");
}


/*copie el contenido del id='textMsj' al textarea que tiene el atributo id='showMsj*/
var btnCopy = document.getElementById('btnCopy');
btnCopy.onclick = function(evt)
{
    
    let msj = document.getElementById('textMsj').value;
    document.getElementById('showMsj').innerText = msj;
}

