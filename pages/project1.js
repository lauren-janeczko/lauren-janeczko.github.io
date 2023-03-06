
code:
// Add pill form submit event listener
const addPillForm = document.querySelector('form');
addPillForm.addEventListener('submit', addPill);

function addPill(e) {
	// Prevent default form submission behavior
	e.preventDefault();

	// Get form values
	const pillName = document.querySelector('#pill-name').value;
	const pillDosage = document.querySelector('#pill-dosage').value;
	const pillFrequency = document.querySelector('#pill-frequency').value;
	const pillStartDate = document.querySelector('#pill-start-date').value;
	const pillTime = document.querySelector('#pill-time').value;

	// Create new table row with form values
	const tableRow = document.createElement('tr');
	tableRow.innerHTML = `
		<td>${pillName}</td>
		<td>${pillDosage}</td>
		<td>${pillFrequency}</td>
		<td>${pillStartDate}</td>
		<td>${pillTime}</td>
		<td><button>Delete</button></td>
        `;

	// Add new table row to pill schedule table
	const pillScheduleTable = document.querySelector('table tbody');
	pillScheduleTable.appendChild(tableRow);

	// Clear form values
	addPillForm.reset();

// Pill schedule delete button click event listener
pillScheduleTable = document.querySelector('table tbody');
pillScheduleTable.addEventListener('click', deletePill);

function deletePill(e) {
	if (e.target.tagName === 'BUTTON') {
		const tableRow = e.target.parentNode.parentNode;
		tableRow.parentNode.removeChild(tableRow);
	}
}}
