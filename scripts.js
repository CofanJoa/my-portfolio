var goTopBtn = document.getElementById("go-to-top-btn");

window.onscroll = function() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    goTopBtn.style.display = "block";
} else {
    goTopBtn.style.display = "none";
}
};

goTopBtn.addEventListener("click", function() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
});

