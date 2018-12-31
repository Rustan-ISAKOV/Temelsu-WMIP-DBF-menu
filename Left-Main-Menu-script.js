function menuInit() {
	var dropdown = document.getElementById("dropdown-item");
	var dropdown2 = document.getElementById("dropdown-item2");

	var submenu = document.getElementById("submenu");
	var submenu2 = document.getElementById("submenu2");


	dropdown.onmouseover = popOutMenu;
	dropdown.onmouseout = hideDropdown;
	dropdown2.onmouseover = popOutMenu2;
	dropdown2.onmouseout = hideDropdown2;

	submenu.onmouseover = popOutMenu;
	submenu.onmouseout = hideDropdown;
	submenu2.onmouseover = popOutMenu2;
	submenu2.onmouseout = hideDropdown2;
}

function popOutMenu () {
	submenu.className = "show-submenu";
}

function hideDropdown () {
	submenu.className = "hide-submenu";
}

function popOutMenu2 () {
	submenu2.className = "show-submenu2";
}

function hideDropdown2 () {
	submenu2.className = "hide-submenu2";
}