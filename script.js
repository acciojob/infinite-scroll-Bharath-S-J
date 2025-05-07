//your code here!

// Get reference to the unordered list element
const infiList = document.getElementById('infi-list');

// Function to add 2 more list items to the list
function addItems() {
  // Create two new list items
  for (let i = 0; i < 2; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = `Item ${infiList.children.length + 1}`;
    infiList.appendChild(listItem);
  }
}

// Initially, add 10 list items to the list
for (let i = 0; i < 10; i++) {
  const listItem = document.createElement('li');
  listItem.textContent = `Item ${i + 1}`;
  infiList.appendChild(listItem);
}

// Function to check if the user has scrolled to the bottom
function checkScroll() {
  // Check if the user has reached the bottom of the list
  const scrollableHeight = infiList.scrollHeight;
  const visibleHeight = infiList.clientHeight;
  const scrollPosition = infiList.scrollTop;

  if (scrollPosition + visibleHeight >= scrollableHeight) {
    // Add more items when the user reaches the bottom
    addItems();
  }
}

// Listen for the scroll event
infiList.addEventListener('scroll', checkScroll);
