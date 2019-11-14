// вывод показаний часов каждую секунду
setInterval(logClockTime, 1000);

function logClockTime() {
	// получение строки показания часов в гражданском формате
	let time = getClockTime();

	// очистка консоли и вывод показания часов
	console.clear();
	console.log(time);
};

function getClockTime() {
	// получение текущего времени
	let date = new Date();

	// выставление последовательности показания часов
	let time = {
		hours: date.getHours(),
		minutes: date.getMinutes(),
		seconds: date.getSeconds(),
		ampm: 'AM'
	};

	// преобразование в гражданский формат
	if (time.hours == 12) {
		time.ampm = 'PM';
	} else if (time.hours > 12) {
		time.ampm = 'PM';
		time.hours -= 12;
	}

	// подстановка 0 к часам
	if (time.hours < 10) {
		time.hours = '0' + time.hours;
	}

	// подстановка 0 к минутам
	if (time.minutes < 10) {
		time.minutes = '0' + time.minutes;
	}

	// подстановка 0 к секундам
	if (time.seconds < 10) {
		time.seconds = '0' + time.seconds;
	}

	return time.hours + ':' +
				 time.minutes + ':' +
				 time.seconds + ' ' +
				 time.ampm;
}