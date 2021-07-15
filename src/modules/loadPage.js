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
	const btn = document.createElement("li");
	btn.setAttribute("id", id);
	btn.setAttribute("class", "");
	const a = document.createElement("a");
	btn.appendChild(a);
	a.textContent = text;
	// btn.classList.add("tab");
	return btn;
}

function createNav(id) {
	const nav = document.createElement("div");
	nav.setAttribute("class", "tabs is-centered is-boxed");

	const ul = document.createElement("ul");
	nav.setAttribute("id", id);
	

	const homeTab = createTabBtn("home-tab-btn", "Home");
	const menuTab = createTabBtn("menu-tab-btn", "Menu");
	const contactTab = createTabBtn("contact-tab-btn", "Contact");

	ul.appendChild(homeTab);
	ul.appendChild(menuTab);
	ul.appendChild(contactTab);

	nav.appendChild(ul);
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
