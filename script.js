const form = document.querySelector('form');
form.addEventListener('submit', (e)=> {
    e.preventDefault();
    const expenseInput= document.getElementById('expense');
    const amountInput = document.getElementById('amount');
    const expenseName = expenseInput.value;
    const expenseAmount = amountInput.value;
   
    const itemList = document.createElement('li');
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.textContent = 'Delete';
    itemList.textContent = `${expenseName}: $${expenseAmount}`;
    itemList.appendChild(deleteButton);
    document.getElementById('expense-list').appendChild(itemList);

    //  expenseInput.value = '';
    //  amountInput.value = '';

    form.reset(); // Reset the form fields after submission
})

const expenseList = document.getElementById('expense-list');

expenseList.addEventListener('click', (e) => {
    console.log(e.target);

    if (e.target.classList.contains('delete-btn')) {
        const listItem = e.target.parentElement;
        listItem.remove();
    }
})
