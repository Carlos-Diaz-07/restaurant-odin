function setTabBtnActive(id) {
	const activeTabBtn = document.querySelector(".active-tab-btn");
	if (activeTabBtn) activeTabBtn.classList.remove("active-tab-btn");
	const tabBtn = document.getElementById(id);
	tabBtn.classList.add("active-tab-btn");
}

// function that creates a food card entry

// array that contains the food cards, each entry use the create food card function

// load page, deletes class of the content container, sets a class that formats the presentation of the food cards, foreach entry in foods array append to main

// export
