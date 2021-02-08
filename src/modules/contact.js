function setTabBtnActive(id) {
	const activeTabBtn = document.querySelector(".active-tab-btn");
	if (activeTabBtn) activeTabBtn.classList.remove("active-tab-btn");
	const tabBtn = document.getElementById(id);
	tabBtn.classList.add("active-tab-btn");
}

function createContactSection() {
    const contactSection = document.createElement('section');
    contactSection.classList.add('section');

    const title = document.createElement('h2');
    title.classList.add('section-title');
    title.textContent = 'Contact Us';
    contactSection.appendChild(title);

    const para = document.createElement('p');
    para.classList.add('para');
    para.textContent = "If you want to contact us, just shout as loud as you can. Still, we won't answer you :)"
    contactSection.appendChild(para);

    return contactSection    
}

function loadContact() {
    const content = document.getElementById('main');
    content.textContent = '';
    const contactContent = createContactSection();
    setTabBtnActive('contact-tab-btn');
    content.appendChild(contactContent);
}

export default loadContact;