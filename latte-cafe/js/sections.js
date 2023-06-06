// Открытие и закрытие меню для мобильной версии

let openMenu = document.getElementById("btnOpenMbMenu").addEventListener("click", () => {
	document.getElementById("mbMenu").classList.add("mb-menu-active");
});
let closeMenu = document.getElementById("btnCloseMbMenu").addEventListener("click", () => {
	document.getElementById("mbMenu").classList.remove("mb-menu-active");
});