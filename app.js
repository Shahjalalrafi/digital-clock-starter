
	function digitalClock() {
		let date = new Date()
		let hours = date.getHours()
		let minutes = date.getMinutes()
		let seconds = date.getSeconds()
		let timeFormat = 'AM'

		if(hours === 0) {
			hours = 12
		}
		if(hours > 12){
			hours -= 12
			timeFormat = 'PM'
		}

		hours = hours < 12 ? '0' + hours : hours
		minutes = minutes < 12 ? '0' + minutes : minutes
		seconds = seconds < 12 ? '0' + seconds : seconds

		let finalTIme = `${hours}: ${minutes}: ${seconds}`

		document.getElementById('time').innerText = finalTIme
		document.querySelector('small').innerText = timeFormat

		setInterval(digitalClock,1000)
	}
	digitalClock()

	
	function digitalClock() {
		let date = new Date()
		let hours = date.getHours()
		let minutes = date.getMinutes()
		let seconds = date.getSeconds()
		let timeFormat = 'AM'

		if(hours === 0) {
			hours = 12
		}
		if(hours > 12){
			hours -= 12
			timeFormat = 'PM'
		}

		hours = hours < 12 ? '0' + hours : hours
		minutes = minutes < 12 ? '0' + minutes : minutes
		seconds = seconds < 12 ? '0' + seconds : seconds

		let finalTIme = `${hours}: ${minutes}: ${seconds}`

		document.getElementById('time').innerText = finalTIme
		document.querySelector('small').innerText = timeFormat

		setInterval(digitalClock,1000)
	}
	digitalClock()

	