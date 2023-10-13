import { colors, daysOfTheWeek, monthNames } from '../const.js';
import { formatTime } from '../utils.js';
import { createColorInputTemplate } from './color-input.js';
import { createEditTaskHashtagTemplate } from './edit-task-hashtag.js';
import { createRepeatDaysInputTemplate } from './repeat-day-inputs.js';

export const createTaskEditTemplate = (task) => {
	const { description, dueDate, repeatingDays, tags, color } = task;

	const isDateShowing = !!dueDate;

	const date = isDateShowing
		? `${dueDate.getDate()} ${monthNames[dueDate.getMonth()]}`
		: '';
	const time = isDateShowing ? formatTime(dueDate) : '';
	const repeatDays = createRepeatDaysInputTemplate(
		daysOfTheWeek,
		repeatingDays
	);
	const hashtags = createEditTaskHashtagTemplate([...tags]);
	const colorInputs = createColorInputTemplate(colors, color);
	const repeatClass = Object.values(repeatingDays).some(Boolean)
		? `card--repeat`
		: '';

	return `
		<article class="card card--edit card--${color} ${repeatClass}">
			<form class="card__form" method="get">
				<div class="card__inner">
					<div class="card__color-bar">
						<svg class="card__color-bar-wave" width="100%" height="10">
							<use xlink:href="#wave"></use>
						</svg>
					</div>

					<div class="card__textarea-wrap">
						<label>
							<textarea
								class="card__text"
								placeholder="Start typing your text here..."
								name="text"
							>${description}</textarea>
						</label>
					</div>

					<div class="card__settings">
						<div class="card__details">
							<div class="card__dates">
								<button class="card__date-deadline-toggle" type="button">
									date: <span class="card__date-status">${dueDate ? 'yes' : 'no'}</span>
								</button>

								<fieldset class="card__date-deadline">
									<label class="card__input-deadline-wrap">
										<input
											class="card__date"
											type="text"
											placeholder=""
											name="date"
											value="${date} ${time}"
										/>
									</label>
								</fieldset>

								<button class="card__repeat-toggle" type="button">
									repeat:<span class="card__repeat-status">${repeatClass ? 'yes' : 'no'}</span>
								</button>

								<fieldset class="card__repeat-days">
									<div class="card__repeat-days-inner">
										${repeatDays}
									</div>
								</fieldset>
							</div>

							<div class="card__hashtag">
								<div class="card__hashtag-list">
									${hashtags}
								</div>

								<label>
									<input
										type="text"
										class="card__hashtag-input"
										name="hashtag-input"
										placeholder="Type new hashtag here"
									/>
								</label>
							</div>
						</div>

						<div class="card__colors-inner">
							<h3 class="card__colors-title">Color</h3>
							<div class="card__colors-wrap">
								${colorInputs}
							</div>
						</div>
					</div>

					<div class="card__status-btns">
						<button class="card__save" type="submit">save</button>
						<button class="card__delete" type="button">delete</button>
					</div>
				</div>
			</form>
		</article>
	`;
};
