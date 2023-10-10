import { createBoardTemplate } from './components/board';
import { createTaskEditTemplate } from './components/edit-task';
import { createFilterListTemplate } from './components/filter-list';
import { createLoadMoreButtonTemplate } from './components/load-more-btn';
import { createSiteFilterTemplate } from './components/site-filter';
import { createSiteMenuTemplate } from './components/site-menu';
import { createTaskTemplate } from './components/task';
import { createBoardTasksListTemplate } from './components/tasks-list';

const TASKS_COUNT = 3;

const render = (container, template, place = 'beforeend') =>
	container.insertAdjacentHTML(place, template);

const siteMainElement = document.querySelector('.main');
const siteHeaderElement = siteMainElement.querySelector('.main__control');

render(siteHeaderElement, createSiteMenuTemplate());
render(siteMainElement, createSiteFilterTemplate());
render(siteMainElement, createBoardTemplate());

const boardElement = siteMainElement.querySelector('.board');
render(boardElement, createFilterListTemplate());
render(boardElement, createBoardTasksListTemplate());

const tasksListElement = boardElement.querySelector('.board__tasks');
render(tasksListElement, createTaskEditTemplate());

new Array(TASKS_COUNT)
	.fill('')
	.forEach(() => render(tasksListElement, createTaskTemplate()));

render(boardElement, createLoadMoreButtonTemplate());
