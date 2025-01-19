function toggleMobileMenu(){
	document.getElementById("menu").classList.toggle("active");
}

const myWork = document.getElementById('myWork');
const dropdownMenu = document.getElementById('dropdownMenu');

// Add click event to toggle dropdown visibility
myWork.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior
    dropdownMenu.classList.toggle('show');
});

// Hide dropdown if clicking outside
document.addEventListener('click', (e) => {
    if (!myWork.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.remove('show');
    }
});

document.querySelectorAll('.dropdown > a').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        const dropdownMenu = this.nextElementSibling;
        dropdownMenu.style.display =
            dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });
});
