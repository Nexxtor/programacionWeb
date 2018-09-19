function scrollToStart(){
    var startPosition =  document.getElementById("title-content").offsetTop;
    window.scroll({
        top: startPosition,
        behavior:"smooth"
    });
}