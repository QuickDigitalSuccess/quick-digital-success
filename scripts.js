// JavaScript to highlight active link
const links = document.querySelectorAll('.navbar a');
links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(item => item.classList.remove('active'));
        link.classList.add('active');
    });
});

// Fetch footer content dynamically
fetch("footer.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("footer-container").innerHTML = data;
    });
