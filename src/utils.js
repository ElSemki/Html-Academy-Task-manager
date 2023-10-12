const getRandomIntInclusive = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomArrayItem = (arr) => {
	const randomIndex = getRandomIntInclusive(0, arr.length - 1);
	return arr[randomIndex];
};

const getRandomDate = () => {
	const targetDate = new Date();
	const sign = Math.random() > 0.5 ? 1 : -1;
	const diffValue = sign * getRandomIntInclusive(0, 7);
	targetDate.setDate(targetDate.getDate() + diffValue);

	return targetDate;
};

const castTimeFormat = (value) => (value < 10 ? `0${value}` : String(value));

const formatTime = (date) => {
	const hours = castTimeFormat(date.getHours() % 12);
	const minutes = castTimeFormat(date.getMinutes());

	const interval = hours > 11 ? 'pm' : 'am';

	return `${hours}:${minutes} ${interval}`;
};

export { formatTime, getRandomArrayItem, getRandomDate, getRandomIntInclusive };
