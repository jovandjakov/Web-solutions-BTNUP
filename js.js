var btnUp = document.getElementById("btnUp");

window.addEventListener("scroll", skroluj);

function skroluj() {
    if(window.pageYOffset > 300) {
        btnUp.style.display = "block";
    }
    else {
        btnUp.style.display ="none";
    }
}


btnUp.addEventListener("click", vratiGore);

function vratiGore() {
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    })
}