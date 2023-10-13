import { createBoardTemplate } from './components/board.js';
import { createTaskEditTemplate } from './components/edit-task.js';
import { createFilterListTemplate } from './components/filter-list.js';
import { createLoadMoreButtonTemplate } from './components/load-more-btn.js';
import { createSiteFilterTemplate } from './components/site-filter.js';
import { createSiteMenuTemplate } from './components/site-menu.js';
import { createTaskTemplate } from './components/task.js';
import { createBoardTasksListTemplate } from './components/tasks-list.js';
import { generateFilters } from './mock/filter.js';
import { generateTasks } from './mock/task.js';

const TASKS_COUNT = 22;
const SHOW_TASK_COUNT_ON_START = 8;
const SHOW_TASK_COUNT_BY_BTN = 8;

const render = (container, template, place = 'beforeend') =>
	container.insertAdjacentHTML(place, template);

const siteMainElement = document.querySelector('.main');
const siteHeaderElement = siteMainElement.querySelector('.main__control');

render(siteHeaderElement, createSiteMenuTemplate());

const filters = generateFilters();
render(siteMainElement, createSiteFilterTemplate(filters));
render(siteMainElement, createBoardTemplate());

const boardElement = siteMainElement.querySelector('.board');
render(boardElement, createFilterListTemplate());
render(boardElement, createBoardTasksListTemplate());

const tasksListElement = boardElement.querySelector('.board__tasks');

const tasks = generateTasks(TASKS_COUNT);
render(tasksListElement, createTaskEditTemplate(tasks[0]));
tasks
	.slice(1, SHOW_TASK_COUNT_ON_START)
	.forEach((task) => render(tasksListElement, createTaskTemplate(task)));

render(boardElement, createLoadMoreButtonTemplate());

const loadMoreBtn = boardElement.querySelector('.load-more');
loadMoreBtn.addEventListener('click', (evt) => {
	const allTasks = tasksListElement.children.length - 1;
	if (allTasks + SHOW_TASK_COUNT_ON_START >= tasks.length) {
		tasks
			.slice(allTasks)
			.forEach((task) => render(tasksListElement, createTaskTemplate(task)));
		evt.target.remove();
	} else {
		tasks
			.slice(allTasks, allTasks + SHOW_TASK_COUNT_BY_BTN)
			.forEach((task) => render(tasksListElement, createTaskTemplate(task)));
	}
});
