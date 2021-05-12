const fertName = document.getElementById('fName');
const latName = document.getElementById('lName');
const password = document.getElementById('password');
const email = document.getElementById('email');
const btn = document.getElementById('btn');
const ferst = document.getElementById('ferst');
const last = document.getElementById('last');
const mail = document.getElementById('mail');
const pass = document.getElementById('pass');
const valid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function valedName() {
	if (fertName.value == '') {
		ferst.textContent = 'you have to enter your name';
	} else {
	}
	if (latName.value == '') {
		last.textContent = 'you have to enter your name';
	}
	if (email.value.match(valid)) {
	} else {
		mail.textContent = 'you enter un valid email';
	}
	if (email.value == '') {
		mail.textContent = 'you have to enter your email';
	} else {
	}
	if (password.value == '') {
		pass.textContent = 'you have to enter your password';
	} else if (password.value < '6') {
		pass.textContent = 'the password must be more than 6 diget';
	} else {
		pass.textContent = '';
	}
}
btn.addEventListener('click', (e) => {
	e.preventDefault();
	valedName();
});
