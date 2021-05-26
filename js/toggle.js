const toggleBtn = document.querySelector("#toggle");
const monthly = document.querySelectorAll(".monthly");
const annually = document.querySelectorAll(".annually");

toggleBtn.addEventListener("click", function () {
	console.log("yes");
	monthly.forEach(function (item) {
		item.classList.toggle("show");
	});
	annually.forEach(function (item) {
		item.classList.toggle("show");
	});
});
