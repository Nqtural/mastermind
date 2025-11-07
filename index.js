const color_picker = '\
	<div class="color-picker">\
		<span id="red"></span>\
		<span id="green"></span>\
		<span id="blue"></span>\
		<span id="yellow"></span>\
		<span id="white"></span>\
		<span id="black"></span>\
	</div>\
';

document.querySelectorAll("span[clickable=true]").forEach(span => {
	span.addEventListener("click", (e) => {
		if (span.innerHTML === "") {
			span.innerHTML = color_picker;
		} else {
			span.innerHTML = "";
		}
	});
});
