const slides = document.querySelectorAll('.Our-products figure');
let currentIndex = 0;

function showProducts(index) {
    products.forEach((fig, i) => {
        fig.classList.toggle('active', i === index); 
    });
}
function nextProducts() {
    currentIndex = (currentIndex + 1) % products.length;
    showProducts(currentIndex);
}
showProducts(0);
setInterval(nextProducts, 5000);