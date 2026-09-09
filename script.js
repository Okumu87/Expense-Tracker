
const form = document.querySelector('form');
const expenses = [];
let nextId = 0;

form.addEventListener('submit', (e)=> {
    e.preventDefault();

    console.log('Form submitted'); // Log a message to indicate form submission

    const categoryInput = document.getElementById('category');
    const expenseCategory = categoryInput.value;
    const currentId = nextId++;
    const expenseInput= document.getElementById('expense');
    const amountInput = document.getElementById('amount');
    const expenseName = expenseInput.value;
    const expenseAmount = amountInput.value;

    const newExpense = { id: currentId, name: expenseName, amount: parseFloat(expenseAmount), category: expenseCategory };

    const itemList = renderExpenseItem(newExpense); 
    expenses.push(newExpense);
    updateTotal(); 
    expenseList.appendChild(itemList);

    console.log('New expense added:', newExpense); // Log the new expense object    
    form.reset(); 
})
    const expenseList = document.getElementById('expense-list');


    expenseList.addEventListener('click', (e) => {

    if (e.target.classList.contains('delete-btn')) {
        const listItem = e.target.parentElement;
        const itemId = parseInt(listItem.dataset.id, 10);
        expenses.splice(expenses.findIndex(item => item.id === itemId), 1);
         updateTotal(); // Update the total after deleting an item
        listItem.remove();  

        console.log('Expense deleted:', itemId); // Log the ID of the deleted expense
    }

})


// function 

function updateTotal() {
    const totalAmount = expenses.reduce((sum, item) => sum + item.amount, 0);
    document.getElementById('total-amount').textContent = `Total: $${totalAmount.toFixed(2)}`;
}


function renderExpenseItem(expense){
    const itemList = document.createElement('li');
    const spanItem = document.createElement('span');
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.textContent = 'Delete';
   
    spanItem.textContent = `${expense.name}: $${expense.amount.toFixed(2)}`;
    itemList.appendChild(spanItem);
    itemList.appendChild(deleteButton);
    itemList.dataset.id = expense.id; // Assign a unique ID 
    return itemList;         

}
