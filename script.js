// HTML elements ko select karein
const myButton = document.getElementById('myButton');
const myHeading = document.getElementById('myHeading');

// Button par click event listener add karein
myButton.addEventListener('click', function() {
    // Heading ka text badal dein
    myHeading.textContent = 'Aapne Click Kiya!';
    alert('Button Clicked!'); // Ek chhota sa alert bhi dikhaega
});
