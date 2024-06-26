import {useTaskForm} from './useTaskForm.ts';
import {useListForm} from './useListForm.ts';

const {showTaskForm} = useTaskForm();
const {showListForm} = useListForm();

const addListButton = document.querySelector<HTMLButtonElement>('#add-list-btn');
const addTaskButton = document.querySelector<HTMLButtonElement>('#add-new-task');

addListButton?.addEventListener('click', showListForm);
addTaskButton?.addEventListener('click', showTaskForm);
