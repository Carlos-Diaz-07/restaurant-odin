"use strict"

import loadPage from "./modules/loadPage";
import loadContact from "./modules/contact";
import loadHome from "./modules/home";
import loadMenu from "./modules/menu";

init();

function addNavEvents() {
	const homeTab = document.getElementById("home-tab-btn");
	const contactTab = document.getElementById("contact-tab-btn");
	const menuTab = document.getElementById("menu-tab-btn");

	homeTab.addEventListener("click", loadHome);
	contactTab.addEventListener("click", loadContact);
	menuTab.addEventListener("click", loadMenu);
}

function init() {
	loadPage();
	loadHome();
	addNavEvents();
}
