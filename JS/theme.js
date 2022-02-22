let themeToggleBtn = document.getElementById('theme-toggle-btn')
let localStorageTheme = localStorage.getItem('vybe-ui-theme');

if(localStorageTheme === 'dark'){
	document.documentElement.setAttribute('vybe-ui-theme','dark')
	localStorage.setItem('vybe-ui-theme','dark')
	themeToggleBtn.classList.remove('fa-moon')
	themeToggleBtn.classList.add('fa-sun')
	document.querySelectorAll('.nav-icon').forEach((icon) => {
		icon.classList.add('dark-mode-icon')
	});
}else{
	document.documentElement.setAttribute('vybe-ui-theme','light')
	localStorage.setItem('vybe-ui-theme','light')
	themeToggleBtn.classList.remove('fa-sun')
	themeToggleBtn.classList.add('fa-moon')
}

let currentTheme = document.documentElement.getAttribute('vybe-ui-theme')

themeToggleBtn.addEventListener('click',()=>{
	if(localStorage.getItem('vybe-ui-theme')==='dark'){
		document.documentElement.setAttribute('vybe-ui-theme','light')
		localStorage.setItem('vybe-ui-theme','light')
		themeToggleBtn.classList.remove('fa-sun')
		themeToggleBtn.classList.add('fa-moon')
		document.getElementsByClassName('nav-icon').forEach((icon) => {
			icon.classList.add('dark-mode-icon')
		});
	}else{
		document.documentElement.setAttribute('vybe-ui-theme','dark')
		localStorage.setItem('vybe-ui-theme','dark')
		themeToggleBtn.classList.remove('fa-moon')
		themeToggleBtn.classList.add('fa-sun')
		document.getElementsByClassName('nav-icon').forEach((icon) => {
			icon.classList.remove('dark-mode-icon')
		});
	}
})