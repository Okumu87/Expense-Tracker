
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
   
    const itemList = document.createElement('li');
    const spanItem = document.createElement('span');
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.textContent = 'Delete';
   
    spanItem.textContent = `${expenseName}: $${expenseAmount}`;
    itemList.appendChild(spanItem);
    itemList.appendChild(deleteButton);
    itemList.dataset.id = currentId; // Assign a unique ID 
    expenses.push({ id: currentId, name: expenseName, amount: parseFloat(expenseAmount), category: expenseCategory });
    updateTotal(); 

     console.log(expenses); // Log the expenses array to the console for debugging
    expenseList.appendChild(itemList);
    form.reset(); // Reset the form fields after submission
})

const expenseList = document.getElementById('expense-list');


expenseList.addEventListener('click', (e) => {

    if (e.target.classList.contains('delete-btn')) {
        const listItem = e.target.parentElement;
        const itemId = parseInt(listItem.dataset.id, 10);
        expenses.splice(expenses.findIndex(item => item.id === itemId), 1);
         updateTotal(); // Update the total after deleting an item
        listItem.remove();
       
    }



})

// function 

function updateTotal() {
    const totalAmount = expenses.reduce((sum, item) => sum + item.amount, 0);
    document.getElementById('total-amount').textContent = `Total: $${totalAmount.toFixed(2)}`;
}

console.log('Script loaded'); // Log a message to indicate that the script has been loaded