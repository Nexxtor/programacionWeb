var startPosition = document.getElementById("title-content").offsetTop;
var front_image = document.getElementById("down-button");
var home_btn = document.getElementById("HomeBtn");

home_btn.addEventListener("click", scrollToStart);
front_image.addEventListener("click", scrollToStart);
window.addEventListener("scroll", homeBtnControl);

function scrollToStart() {
    window.scroll({
        top: startPosition,
        behavior: "smooth"
    });
}

function homeBtnControl() {
    var posY = window.pageYOffset;

    if (posY <= startPosition) {
        home_btn.style.visibility = "hidden";
    } else {
        home_btn.style.visibility = "visible";
    }
}
var menuTrigger = document.getElementsByClassName("menu-content")[0];
var menu = document.getElementsByTagName("nav")[0];

menuTrigger.addEventListener('click', () => {
    if($(".menu-side").is(":visible")){
        $(".menu-side").slideUp();
    }else{
        $(".menu-side").slideDown();
    }

}, false);


let query_selector_list = document.querySelectorAll("ul>li.list_item")
let query_selector_item = query_selector_list[0] //Priemr elemento de la lista.

query_selector_item = document.querySelector("ul>li.list_item") //Es equivalente a la línea 2

let dom_object_list = document.anchors
let dom_object_item = dom_object_list[0] //Primer elemnto de la coleccion de enlaces

function verifyLength( ) {
    var input = document.getElementById("input-pass");
    var msg = document.getElementById("alert-content");
    
    if(input.value.length < 5){
        msg.textContent = "La contraseña debe ser mayor a 5 caracteres";
    }
    
}

function verifyLength( ) {
    // Se define y se crea la función
    
}
    
var element = document.getElementById("input-first"); // Se obtiene el elemento
element.addEventListener('keyup',verifyLength,false)