// menu pop-ups

document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.menu-item');
    const popupContainer = document.getElementById('popupContainer');
    const popupContent = document.getElementById('popupContent');
    const popupTitle = document.getElementById('popupTitle');
    const popupImage = document.getElementById('popupImage');
    const popupDescription = document.getElementById('popupDescription');

    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            // Get data attributes for the clicked menu item
            const itemName = item.getAttribute('data-title');
            const itemImage = item.getAttribute('data-image');
            const itemDescription = item.getAttribute('data-description');

            // Set content in the popup
            popupTitle.textContent = itemName;
            popupImage.src = itemImage;
            popupDescription.textContent = itemDescription;

            // Display the popup
            popupContainer.style.display = 'block';
        });
    });
});

// Function to close the popup
function closePopup() {
    document.getElementById('popupContainer').style.display = 'none';
}


// random menu selector

// Function to select a random menu and display it
function selectRandomMenu() {
    const menuItems = document.querySelectorAll('.menu-item');
    const randomIndex = Math.floor(Math.random() * menuItems.length);

    // Get data attributes for the randomly selected menu item
    const itemName = menuItems[randomIndex].getAttribute('data-title');
    const itemImage = menuItems[randomIndex].getAttribute('data-image');
    const itemDescription = menuItems[randomIndex].getAttribute('data-description');

    // Display the randomly selected menu
    document.getElementById('randomMenuDisplay').innerHTML = `
        <h3>${itemName}</h3>
        <img src="${itemImage}" alt="${itemName}">
        <p>${itemDescription}</p>
    `;
}
