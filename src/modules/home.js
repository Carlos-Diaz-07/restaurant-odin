"use strict"

function setTabBtnActive(id) {
	const activeTabBtn = document.querySelector(".active-tab-btn");
	if (activeTabBtn) activeTabBtn.classList.remove("active-tab-btn");
	const tabBtn = document.getElementById(id);
	tabBtn.classList.add("active-tab-btn");
}

function createHomeSection() {
    const homeSection = document.createElement('section');
    homeSection.classList.add('section');

    const title = document.createElement('h2');
    title.classList.add('section-title');
    title.textContent = 'Welcome';
    homeSection.appendChild(title);

    const para = document.createElement('p');
    para.classList.add('para');
    para.textContent = 'Welcome to Guild Wars 2 Gourmet Foods, a informative little corner of the internet with the sole purpose of teaching you about the best and tastier ways to indulge yourself in Tyria'
    homeSection.appendChild(para);

    return homeSection;   
}

function loadHome() {
    const content = document.getElementById('main');
    content.textContent = '';
    const homeContent = createHomeSection();
    setTabBtnActive('home-tab-btn');
    content.appendChild(homeContent);
}

export default loadHome;