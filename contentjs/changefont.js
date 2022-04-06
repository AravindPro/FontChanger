console.log("Font is being changed.....")

function changeFont() {
	let ps = document.querySelectorAll('p');
	for (let i = 0; i < ps.length; i++) {
		ps[i].style.fontFamily = 'Lexend';
		ps[i].style.fontSize = '18px'
	}

	let h1 = document.querySelectorAll('h1');
	let h2 = document.querySelectorAll('h2');
	for (const i of h1) {
		i.style.fontFamily = 'Century';
		i.style.fontSize = '54px';
	}

	for (const i of h2) {
		i.style.fontFamily = 'Century';
	}
}

changeFont()