document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu");
    const closeBtn = document.getElementById("close");
    const mobileNav = document.querySelector(".mobile_nav");

    menuBtn.addEventListener("click", function () {
        mobileNav.style.display = "block";
    });

    closeBtn.addEventListener("click", function () {
        mobileNav.style.display = "none";
    });
});
