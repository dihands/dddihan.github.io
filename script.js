section {
	margin-bottom: 40px;
}

h2 {
	margin-top: 0;
}

/* Footer Styles */
footer {
	background-color: #333;
	color: #fff;
	padding: 20px;
	text-align: center;
}


// Display a welcome message
alert("Welcome to My Website!");

// Show/hide navigation menu on small screens
var menu = document.querySelector("nav ul");
var toggle = document.querySelector(".menu-toggle");

toggle.addEventListener("click", function() {
	if (menu.classList.contains("show")) {
		menu.classList.remove("show");
	} else {
		menu.classList.add("show");
	}
});
