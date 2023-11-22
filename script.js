
let goToBtn = document.getElementById("goToBtn")
window.onscroll = function () {
    scollFunction();
};
function scrollFunction(){
    if (document.body.scrollTop > 7000 || document.documentElement.scrollTop) {
        goToBtn.style.display = "flex"
    }
    else {
        goToBtn.style.display = "none"
    }
};

