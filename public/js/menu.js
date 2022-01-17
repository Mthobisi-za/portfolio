var btn = document.querySelector(".none");
var menuCounter = 0;
btn.addEventListener("click", () => {
    if (menuCounter == 0) {
        var menu = document.querySelector(".menu");
        menu.style.display = "block";
        menuCounter += 1;
        document.querySelector(".fa-bars").style.display = "none";
        document.querySelector(".cross").style.display = "block";
    } else {
        var menu = document.querySelector(".menu");
        menu.style.display = "none";
        menuCounter -= 1;
        document.querySelector(".fa-bars").style.display = "block";
        document.querySelector(".cross").style.display = "none";
    }
});

var close = document.querySelector(".close");
close.addEventListener("click", () => {
    var form = document.querySelector(".forms");
    form.style.display = "none";
});
var a = document.querySelector(".a_change");
a.addEventListener("click", () => {
    var form = document.querySelector(".forms");
    form.style.display = "block";
});