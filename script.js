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

document.addEventListener('DOMContentLoaded', function () {
    // Function to open the random popup
    window.selectRandomMenu = function () {
        // Display the popup
        document.getElementById('randomPopupContainer').style.display = 'block';
    };

    // Function to close the random popup
    window.closeRandomPopup = function () {
        // Close the popup
        document.getElementById('randomPopupContainer').style.display = 'none';
    };
});
