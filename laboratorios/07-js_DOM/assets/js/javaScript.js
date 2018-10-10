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


