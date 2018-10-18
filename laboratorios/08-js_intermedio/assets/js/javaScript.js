var startPosition = document.getElementById("title-content").offsetTop;
var front_image = document.getElementById("down-button");
var home_btn = document.getElementById("HomeBtn");
var first_field = document.getElementById("first-field");

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


first_field.oninput = ()=>{
    let valor = first_field.value;
    
    first_field.style.borderRadius=".2em"

    if(valor == "" || valor == null){
        first_field.style.borderColor ="red";
    }else{
        first_field.style.borderColor ="green";
    }
}


