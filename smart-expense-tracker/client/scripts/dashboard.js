document.addEventListener('DOMContentLoaded', () => {
    const totalIncome = 5000; // Example value
    const totalExpenses = 2000; // Example value
    const totalSavings = totalIncome - totalExpenses;

    document.getElementById('total-income').textContent = `$${totalIncome}`;
    document.getElementById('total-expenses').textContent = `$${totalExpenses}`;
    document.getElementById('total-savings').textContent = `$${totalSavings}`;
});
