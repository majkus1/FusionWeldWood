const contactForm = document.querySelector('.contact')
let mail = document.getElementById('mail')
let number = document.getElementById('number')
let msg = document.getElementById('msg')

contactForm.addEventListener('submit', e => {
	e.preventDefault()

	let formData = {
		mail: mail.value,
		number: number.value,
		msg: msg.value,
	}

	let xhr = new XMLHttpRequest()
	xhr.open('POST', '/')
	xhr.setRequestHeader('content-type', 'application/json')
	xhr.onload = function () {
		console.log(xhr.responseText)
		if (xhr.responseText == 'success') {
			alert('Email sent')
			mail.value = ''
			number.value = ''
			msg.value = ''
		} else {
			alert('Something went wrong!')
		}
	}

	xhr.send(JSON.stringify(formData))
})