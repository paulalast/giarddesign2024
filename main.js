const searchInput = document.getElementById("searchInput")
const searchIcon = document.getElementById("searchIcon")
const menuToggle = document.getElementById("menu-toggle")
const menu = document.getElementById("menu")
const footerYear = document.querySelector(".footer__year")
import Macy from "macy"

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}
handleCurrentYear()


menuToggle.addEventListener("click", () => {
	if (window.innerWidth < 1024) {
		if (
			menu.style.transform === "translateY(-500px)" ||
			menu.style.transform === ""
		) {
			menu.style.transform = "translateY(0)"
		} else {
			menu.style.transform = "translateY(-500px)"
		}
	}
})
window.addEventListener("resize", () => {
	if (window.innerWidth >= 1024) {
		menu.style.transform = ""
	}
})

var macyInstance = Macy({
	container: ".macy-container",
	trueOrder: false,
	waitForImages: false,
	margin: 40,
	columns: 4,
	breakAt: {
		1500: 4,
		1440: 3,
		940: 2,
		400: 1,
	},
})

document.getElementById("load-more").addEventListener("click", function () {
	const gradientMask = document.querySelector(".gradient-mask")
	const showText = this.querySelector(".show")
	const hideText = this.querySelector(".hide")
	const arrowToggle = this.querySelector(".arrow-toggle")
	const hiddenProjects = document.querySelectorAll(".hidden-projects")
	const btnLoad = document.getElementById("load-more")

	if (showText.classList.contains("hidden")) {
		showText.classList.remove("hidden")
		hideText.classList.add("hidden")
		gradientMask.style.height = "70%"
		arrowToggle.style.transform = "rotate(0deg)"
		hiddenProjects.forEach(project => {
			project.style.maxHeight = "0"
			project.style.opacity = "0"
		})
		btnLoad.style.background = "transparent"

		macyInstance.recalculate(true)
	} else {
		showText.classList.add("hidden")
		hideText.classList.remove("hidden")
		gradientMask.style.height = "0"
		arrowToggle.style.transform = "rotate(180deg)"
		hiddenProjects.forEach(project => {
			project.style.maxHeight = "none"
			project.style.opacity = "1"
		})
		btnLoad.style.background = "#DCC1AB"
		macyInstance.recalculate(true)
	}
})
searchIcon.addEventListener("click", () => {
	if (searchInput.classList.contains("w-0", "scale-x-0")) {
		searchInput.classList.remove("scale-x-0", "opacity-0", "w-0")
		searchInput.classList.add("w-40", "scale-x-100", "opacity-100")
	} else {
		searchInput.classList.remove("w-40", "scale-x-100", "opacity-100")
		searchInput.classList.add("scale-x-0", "opacity-0", "w-0")
	}
})

// searchInput.addEventListener("click", toggleSearchInput)
// menuIcon.addEventListener("click", toggleMenu)
// showMoreBtn.addEventListener("click", showMoreImages)
// window.addEventListener("resize", checkWindowSize)

// checkWindowSize()
