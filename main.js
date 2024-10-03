const bar = document.getElementById('bar');
const listItem = document.getElementById('listItem');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle the menu when the bar button is clicked
bar.addEventListener('click', () => {
  listItem.classList.toggle('show');
});

// Add active class to the clicked link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(nav => nav.classList.remove('active'));
    link.classList.add('active');
  });
});

// 
 