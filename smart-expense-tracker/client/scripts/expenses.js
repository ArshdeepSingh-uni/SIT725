document.addEventListener('DOMContentLoaded', () => {
    const expenseForm = document.getElementById('expense-form');
    const expenseList = document.getElementById('expense-list');

    expenseForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const expenseName = document.getElementById('expense-name').value;
        const expenseAmount = document.getElementById('expense-amount').value;

        const expenseItem = document.createElement('div');
        expenseItem.classList.add('expense-item');
        expenseItem.innerHTML = `<span>${expenseName}</span><span>$${expenseAmount}</span>`;
        expenseList.appendChild(expenseItem);

        expenseForm.reset();
    });
});
