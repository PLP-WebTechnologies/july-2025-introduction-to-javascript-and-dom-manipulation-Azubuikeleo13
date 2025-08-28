// --- Say Hello Section ---
document.getElementById("sayHiBtn").addEventListener("click", function () {
  const name = document.getElementById("nameBox").value.trim();
  const output = document.getElementById("hiOutput");

  // Simple check
  if (name === "") {
    output.textContent = "You forgot to type your name!";
  } else {
    output.textContent = `Hey, ${name}! Hope you're having a good day 😊`;
  }
});

// --- Add Two Numbers Section ---
document.getElementById("addBtn").addEventListener("click", function () {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const sumOutput = document.getElementById("sumOutput");

  // Check if valid numbers
  if (isNaN(num1) || isNaN(num2)) {
    sumOutput.textContent = "Hmm... those don't look like numbers.";
  } else {
    sumOutput.textContent = `The sum is: ${num1 + num2}`;
  }
});

// --- To-Do List Section ---
const todos = [
  "Buy groceries",
  "Call mom",
  "Finish homework",
  "Walk the dog",
  "Water the plants",
  "Clean the kitchen",
  "Read for 30 minutes",
  "Do a 10-minute stretch",
  "Reply to emails",
  "Organize your desk",
  "Plan meals for the week",
  "Check the mailbox",
];

const shuffled = [...todos];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // Pick a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));
    // Swap elements at i and j
    [array[i], array[j]] = [array[j], array[i]];
  }
}

document.getElementById("loadTodosBtn").addEventListener("click", function () {
  const list = document.getElementById("todoList");
  list.innerHTML = ""; // clear list if already loaded

  shuffleArray(shuffled); // shuffle before showing

  // Using a loop to show tasks
  for (let i = 0; i < shuffled.length; i++) {
    const item = document.createElement("li");
    item.textContent = shuffled[i];
    list.appendChild(item);
  }
});

// --- Theme Toggle Section ---
document.getElementById("toggleThemeBtn").addEventListener("click", function () {
  document.body.classList.toggle("dark");
});
