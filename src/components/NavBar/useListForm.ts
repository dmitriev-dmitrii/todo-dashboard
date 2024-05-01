//import {useTasksStore} from '../../store/useTasksStore.ts';
//import {List} from '../dashboard/List/List.ts';
import {modal} from './index.ts';
import type {ListType} from '../../store/types/types.ts';

//const {createList} = useTasksStore();

const formTemplate = ({title}: ListType) => {
	const isNew = title === '' ? 'New' : '';
	return `
        <form 
            class="form-new-list" 
            id="form-new-list" 
        >
            <label class="form-new-list__label" for="title">${isNew} list title
	            <input
	                class="form-new-list__input"
	                type="text"
	                placeholder="New list title"
	                maxlength="30"
	                name="title"
	                id="new-list-title"
	                required
	                value=${title}
	            >
            </label>
            <div class="form-buttons">
                <button
                    class="cancel"
                    type="button"
                    id="cancel-list"
                >
                </button>
                <button
                    class="submit"
                    type="submit"
                    id="submit-list"
                >
                    Save
                </button>
            </div>
        </form>
    `;
};

const emptyList: ListType = {
	id: 0,
	title: '',
	order: 0,
};

export const useListForm = (listPayload?: ListType) => {

	const showListForm = () => {
		const listToUse = listPayload || emptyList;
		modal.innerHTML = formTemplate(listToUse);
		modal.showModal();
		/*
				const form = document.getElementById('form-new-list');
				form?.addEventListener('submit', (evt) => onSubmitForm(evt));*/
		const cancelButton = document.getElementById('cancel-list');
		cancelButton?.addEventListener('click', removeForm);
	};

	const removeForm = () => {
		modal.innerHTML = '';
		modal.close();
	};

	/*const onSubmitForm = (evt: SubmitEvent) => {
		evt.preventDefault();

		const formNode = evt.target as HTMLFormElement;

		if (listPayload?.title) {
			listPayload.title = getFormData(formNode).title;
			List(listPayload).renameListTitle();
			removeForm();
			return;
		}

		const newList = createList((getFormData(formNode)).title);

		if (newList) {
			List(newList).renderList();
			removeForm();
		}
	};*/

	return {
		//onSubmitForm,
		showListForm,
		//removeForm
	};
};
