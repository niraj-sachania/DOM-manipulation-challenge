// Select DOM elements
const input = document.querySelector('#itemInput');
const addBtn = document.querySelector('#addBtn');
const list = document.querySelector('#list');

// Add event listener for button click
addBtn.addEventListener('click', function() {

    const inputValue = input.value;

    if (inputValue !== '') {
    // 1️. Create new <li>
    const li = document.createElement("li");
    li.innerText = inputValue;

    // 2️. Append to <ul>
    list.append(li);

    // 3️. Clear input
    input.innerText = '';

  } else {
    alert('Please enter a valid item!');
  };
})


