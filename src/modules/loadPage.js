"use strict"

function createHeader(id, text) {
	const header = document.createElement("header");
	header.setAttribute("id", id);
	const textLogo = document.createElement("h1");
	textLogo.setAttribute("id", "textLogo");
	textLogo.textContent = text;
	header.appendChild(textLogo);
	return header;
}

function createTabBtn(id, text) {
	const btn = document.createElement("button");
	btn.setAttribute("id", id);
	const span = document.createElement("span");
	btn.appendChild(span);
	span.textContent = text;
	btn.classList.add("tab");
	return btn;
}

function createNav(id) {
	const nav = document.createElement("nav");
	nav.setAttribute("id", id);

	const homeTab = createTabBtn("home-tab-btn", "Home");
	const menuTab = createTabBtn("menu-tab-btn", "Menu");
	const contactTab = createTabBtn("contact-tab-btn", "Contact");

	nav.appendChild(homeTab);
	nav.appendChild(menuTab);
	nav.appendChild(contactTab);

	return nav;
}

function createMain(id) {
	const main = document.createElement("main");
	main.setAttribute("id", id);
	return main;
}

function createFooter(id, text) {
	const footer = document.createElement("footer");
	footer.setAttribute("id", id);
	const h3 = document.createElement("h3");
	h3.textContent = text;
	footer.appendChild(h3);
	return footer;
}

function loadPage() {
    const content = document.getElementById('content');

    const header = createHeader('header', 'GW2 Gourmet Selection');
    content.appendChild(header);

    const nav = createNav('nav');
    content.appendChild(nav);

    const main = createMain('main');
    content.appendChild(main);

    const footer = createFooter('footer', 'We Hope You Enjoy Our Food');
    content.appendChild(footer);
}

export default loadPage;
