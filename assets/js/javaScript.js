var startPosition = document.getElementById("title-content").offsetTop;
var front_image = document.getElementById("down-button");
var home_btn = document.getElementById("HomeBtn");
var first_field = document.getElementById("first-field");

home_btn.addEventListener("click", scrollToStart);
front_image.addEventListener("click", scrollToStart);
window.addEventListener("scroll", ()=>{
    startPosition = document.getElementById("title-content").offsetTop;

    homeBtnControl();
    sideMenuControl();
});

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

function sideMenuControl(){
    if(window.pageYOffset <= startPosition){
        $('.float-menu').css({
            "position": "relative",
            "top": "0",
            "left": "0",
            "z-index": "2"
        });

        $('.menu-side').css({
            'height': $(".float-menu").height() - $(".menu-content").height()-20,
            'background':$(":root").css("--psudo-black")
        });

        $(".menu-side li").addClass("items-pseudo-black");

        $(".menu-content").removeClass("menu-content-down");
        
        if(!$(".menu-side").is(":visible")){
            $(".menu-content").removeClass("menu-content-open");
        }else{
            $(".menu-content").addClass("menu-content-open");
        }

        $('.menu-side div:first-child').css("display","none");
    }else{
        $('.float-menu').css({
            "position": "fixed",
            "top": "1%",
            "left": "1%",
            "z-index": "2"
        });

        $(".menu-content").addClass("menu-content-down");
        $(".menu-content").removeClass("menu-content-open");
        $(".menu-side li").removeClass("items-pseudo-black");

        $('.menu-side').css({
            'height': "auto",
            'background':'none'
        });

        $('.menu-side div:first-child').css("display","block");
    }
}

var menuTrigger = document.getElementsByClassName("menu-content")[0];
var menu = document.getElementsByTagName("nav")[0];

menuTrigger.addEventListener('click', () => {
    startPosition = document.getElementById("title-content").offsetTop;

    if(window.pageYOffset<=startPosition){
        if($(".menu-side").is(":visible")){
            $(".menu-side").hide("slide", { direction: "left" }, 500);
            $(".menu-content").removeClass("menu-content-open");
        }else{
            $(".menu-side").show("slide", { direction: "left" }, 500);
            $(".menu-content").addClass("menu-content-open");
        }
    }else{
        if($(".menu-side").is(":visible")){
            $(".menu-side").slideUp();
        }else{
            $(".menu-side").slideDown();
        }
    }
    
    

}, false);

var linksArray = document.querySelectorAll(".menu-side ul>li>a");

function setAnimationToLinks(){
    linksArray.forEach((link, i)=>{
        link.addEventListener("click", (e)=>{
            e.preventDefault();
            window.scroll({
                top: document.getElementById(link.href.split("#")[1]).offsetTop - 20,
                behavior: "smooth"
            });
            $(".menu-side").slideUp();
        });
    })
}

setAnimationToLinks();

