// ADD YOUR CODE BELOW 

// 1. Start with an array of strings (ex: "grapes", "bread", "tea")
let todoItems = ["apples", "bananas", "oranges", "bread", "tea"];



// 2. Create variables for each interactive DOM element
const addItemButton = document.getElementById('add-item-button');
// add more variables below
const list = document.getElementById('list');
const sortBtn = document.getElementById('sort');
const clearBtn = document.getElementById('clear');
const input = document.getElementById('text');



// 3. Write a function to display all items in the #list element
function updateList() {
     list.innerHTML = "";
    todoItems.forEach(function(item, index) {
        const li = document.createElement("li");
        li.textContent = item;
        li.addEventListener("click", function() {
            todoItems.splice(index, 1);
            updateList();
        });
        list.appendChild(li);

    });
}

updateList();



// 4. Handle adding a new item when the form is submitted
addItemButton.addEventListener('click', function () {
    const input = document.getElementById('text');
    todoItems.push(input.value);
    input.value = "";
    updateList();
});




// 5. Sort items alphabetically when sortBtn is clicked
sortBtn.addEventListener("click", () => {
    todoItems.sort();
    updateList();
});




// 6. Clear all items when clearBtn is clicked
clearBtn.addEventListener("click", () => {
    todoItems = [];
    updateList();
});