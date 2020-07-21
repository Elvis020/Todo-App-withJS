const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input')


// Function that creates the new todo
const generateTemplate = todo => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="fas fa-trash-alt delete"></i>
    </li>`;
    list.innerHTML += html; 
};


//Adds a todo to the current list
addForm.addEventListener('submit', e => {
    e.preventDefault(); 
    const todo = addForm.add.value.trim();
    if(todo.length) {
        generateTemplate(todo);
        addForm.reset();
    };
});

// Event Delegation will be used for the delete method
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    };
});

// Filtering the todos list
// The filtering function filters the one that does not match and hide them
const filterTodos = (term) => {
    // Filtering the list for the items that does not match and adding filtered-class.
    Array.from(list.children).filter( todo => !todo.textContent.toLowerCase().includes(term))
                             .forEach(todo => todo.classList.add('filtered'));
    
    // Filtering the list for the items with the filtered-class and removing them.
    Array.from(list.children).filter( todo => todo.textContent.toLowerCase().includes(term))
                             .forEach(todo => todo.classList.remove('filtered'));
};
//Filtering function using the keyup event
search.addEventListener('keyup', () => {

    //Grab the data from the input
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});