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
