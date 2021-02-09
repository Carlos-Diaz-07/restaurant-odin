function setTabBtnActive(id) {
	const activeTabBtn = document.querySelector(".active-tab-btn");
	if (activeTabBtn) activeTabBtn.classList.remove("active-tab-btn");
	const tabBtn = document.getElementById(id);
	tabBtn.classList.add("active-tab-btn");
}

function createFoodCard(src, alt, name, price) {
	const foodCard = document.createElement("div");
	foodCard.classList.add("food-card");

	const img = document.createElement("img");
	img.setAttribute("src", src);
	img.setAttribute("alt", alt);

	const description = document.createElement("div");
	description.classList.add("description");

	const foodName = document.createElement("h3");
	foodName.classList.add("food-name");
	foodName.textContent = name;

	const foodPrice = document.createElement("h2");
	foodPrice.classList.add("food-price");
	foodPrice.textContent = price;

	description.appendChild(foodName);
	description.appendChild(foodPrice);

	foodCard.appendChild(img);
	foodCard.appendChild(description);

	return foodCard;
}

function loadMenu() {
	const content = document.getElementById("main");
	content.textContent = "";

	const menuSection = document.createElement("section");
	menuSection.classList.add("menu-section");
	menuSection.setAttribute("id", "menu");

	setTabBtnActive("menu-tab-btn");

	content.appendChild(menuSection);

	const foods = [
		createFoodCard("link", "alt", "Rice", "£9"),
		createFoodCard("link", "alt", "Rice", "£9"),
		createFoodCard("link", "alt", "Rice", "£9"),
		createFoodCard("link", "alt", "Rice", "£9"),
		createFoodCard("link", "alt", "Rice", "£9"),
	];

	foods.forEach((foodCard) => {
		menuSection.appendChild(foodCard);
	});
}

export default loadMenu;