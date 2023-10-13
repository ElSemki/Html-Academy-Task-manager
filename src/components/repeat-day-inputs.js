const createRepeatDayInputMarkup = (day, index, repeatingDays) => {
	const isChecked = repeatingDays[day];
	return `
		<input
		class="visually-hidden card__repeat-day-input"
		type="checkbox"
		id="repeat-${day}-${index + 1}"
		name="repeat"
		value="${day}"
		${isChecked ? 'checked' : ''}
		/>
		<label class="card__repeat-day" for="repeat-${day}-${index + 1}">${day}</label>
	`;
};

const createRepeatDaysInputTemplate = (daysOfTheWeek, repeatingDays) =>
	daysOfTheWeek
		.map((day, i) => createRepeatDayInputMarkup(day, i, repeatingDays))
		.join('\n');

export { createRepeatDaysInputTemplate };
