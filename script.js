const form = document.querySelector('form');
const totalItems = [];
let nextId = 0;



form.addEventListener('submit', (e)=> {
    e.preventDefault();
    const currentId = nextId++;
    const expenseInput= document.getElementById('expense');
    const amountInput = document.getElementById('amount');
    const expenseName = expenseInput.value;
    const expenseAmount = amountInput.value;
   
    const itemList = document.createElement('li');
    const spanItem = document.createElement('span');
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.textContent = 'Delete';
   
    spanItem.textContent = `${expenseName}: $${expenseAmount}`;
    itemList.appendChild(spanItem);
    itemList.appendChild(deleteButton);
    itemList.dataset.id = currentId; // Assign a unique ID 
    totalItems.push({ id: currentId, name: expenseName, amount: parseFloat(expenseAmount) });
    document.getElementById('expense-list').appendChild(itemList);

    //  expenseInput.value = '';
    //  amountInput.value = '';

    form.reset(); // Reset the form fields after submission

    console.log(totalItems);
})

const expenseList = document.getElementById('expense-list');


expenseList.addEventListener('click', (e) => {
    console.log(e.target);

    if (e.target.classList.contains('delete-btn')) {
        const listItem = e.target.parentElement;
        const itemId = parseInt(listItem.dataset.id, 10);
        totalItems.splice(totalItems.findIndex(item => item.id === itemId), 1);
        listItem.remove();
    }

})

console.log(expenseList);

// function 

