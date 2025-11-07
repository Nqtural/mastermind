const color_picker = '\
	<div class="color-picker">\
		<span class="red"></span>\
		<span class="green"></span>\
		<span class="blue"></span>\
		<span class="yellow"></span>\
		<span class="white"></span>\
		<span class="black"></span>\
	</div>\
';

function get_code() {
	return Array.from(document.getElementById("set-code").children, li => li.firstElementChild.className);
}

document.getElementById("submit").addEventListener("click", () => {
	const code = get_code();
	if (code.includes("")) {
		alert("You must set all colors!");
	} else {
		document.querySelector(".set-wrapper").style.display = "none";
		document.querySelector(".guess-wrapper").style.display = "block";
	}
});

document.querySelectorAll("span[clickable=true]").forEach(span => {
	span.addEventListener("click", (e) => {
		if (span.innerHTML === "") {
			span.innerHTML = color_picker;
		} else {
			const colorEl = e.target.closest(".color-picker > span");
			if (colorEl) {
				span.className = colorEl.className;
			}
			span.innerHTML = "";
		}
	});
});
