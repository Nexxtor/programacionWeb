var front_image =  document.getElementById("down-button");

front_image.addEventListener("click", scrollToStart);

function scrollToStart(){
    var startPosition =  document.getElementById("title-content").offsetTop;
    window.scroll({
        top: startPosition,
        behavior:"smooth"
    });
}