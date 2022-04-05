document.getElementById("nav_mobile").addEventListener("click", ()=> {
    document.getElementById("nav_div").classList.toggle("menu");
    document.getElementById("logo").style.display = "none";
    document.getElementById("nav_mobile").style.display = "none";
})

document.getElementById("cross_exit").addEventListener("click", () => {
    document.getElementById("nav_div").classList.remove("menu");
    document.getElementById("logo").style.display = "inline-block";
    document.getElementById("nav_mobile").style.display = "block";
})