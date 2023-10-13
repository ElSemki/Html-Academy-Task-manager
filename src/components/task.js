import { monthNames } from '../const.js';
import { formatTime } from '../utils.js';
import { createHashtagTemplate } from './task-hashtag.js';

export const createTaskTemplate = (task) => {
	const { description, dueDate, repeatingDays, tags, color } = task;

	//* Просрочена ли задача
	const isExpired = dueDate instanceof Date && dueDate < Date.now();
	//* Показывается ли дата
	const isDateShowing = !!dueDate;

	const date = isDateShowing
		? `${dueDate.getDate()} ${monthNames[dueDate.getMonth()]}`
		: '';

	const time = isDateShowing ? formatTime(dueDate) : '';

	const hashtags = createHashtagTemplate([...tags]);

	const repeatClass = Object.values(repeatingDays).some(Boolean)
		? `card--repeat`
		: '';

	const deadlineClass = isExpired ? 'card--deadline' : '';

	return `
		<article class="card card--${color} ${repeatClass} ${deadlineClass}">
			<div class="card__form">
				<div class="card__inner">
					<div class="card__control">
						<button type="button" class="card__btn card__btn--edit">
							edit
						</button>
						<button type="button" class="card__btn card__btn--archive">
							archive
						</button>
						<button
							type="button"
							class="card__btn card__btn--favorites card__btn--disabled"
						>
							favorites
						</button>
					</div>

					<div class="card__color-bar">
						<svg class="card__color-bar-wave" width="100%" height="10">
							<use xlink:href="#wave"></use>
						</svg>
					</div>

					<div class="card__textarea-wrap">
						<p class="card__text">${description}</p>
					</div>

					<div class="card__settings">
						<div class="card__details">
							<div class="card__dates">
								<div class="card__date-deadline">
									<p class="card__input-deadline-wrap">
										<span class="card__date">${date}</span>
										<span class="card__time">${time}</span>
									</p>
								</div>
							</div>
							<div class="card__hashtag">
								<div class="card__hashtag-list">
								${hashtags}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</article>
	`;
};
