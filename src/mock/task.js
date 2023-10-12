import { getRandomArrayItem, getRandomDate } from '../utils.js';

//* Моковые данные для карточки

const colors = ['black', 'yellow', 'blue', 'green', 'pink'];

const descriptionItem = [
	'Изучить теорию',
	'Сделать домашку',
	'Пройти интенсив на соточку',
];

const defaultRepeatingDays = {
	mo: false,
	tu: false,
	we: false,
	th: false,
	fr: false,
	sa: false,
	su: false,
};

const tags = ['homework', 'theory', 'practice', 'intensive', 'keks'];

const generateRepeatingDays = () =>
	Object.assign({}, defaultRepeatingDays, { mo: Math.random() > 0.5 });

const generateTags = () => tags.filter(() => Math.random() > 0.5).slice(0, 3);

const generateTask = () => {
	const dueDate = Math.random() > 0.5 ? null : getRandomDate();

	return {
		description: getRandomArrayItem(descriptionItem),
		dueDate,
		repeatingDays: dueDate ? defaultRepeatingDays : generateRepeatingDays(),
		tags: new Set(generateTags(tags)),
		color: getRandomArrayItem(colors),
		isFavorite: Math.random() > 0.5,
		isArchive: Math.random() > 0.5,
	};
};

const generateTasks = (count) => new Array(count).fill('').map(generateTask);

export { generateTask, generateTasks };
