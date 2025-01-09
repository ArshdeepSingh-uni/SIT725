document.addEventListener('DOMContentLoaded', () => {
    const goalForm = document.getElementById('goal-form');
    const goalProgress = document.getElementById('goal-progress');

    goalForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const goalAmount = parseFloat(document.getElementById('goal-amount').value);
        if (goalAmount > 0) {
            goalProgress.textContent = `Your goal is set to $${goalAmount}`;
        }
    });
});
