// menu pop-ups

document.addEventListener('DOMContentLoaded', function () {
    // Function to close the menu popup
    function closeMenuPopup() {
        document.getElementById('popupContainer').style.display = 'none';
    }

    // Get the elements
    const menuItems = document.querySelectorAll('.menu-item');
    const popupContainer = document.getElementById('popupContainer');
    const popupContent = document.getElementById('popupContent');
    const popupTitle = document.getElementById('popupTitle');
    const popupImage = document.getElementById('popupImage');
    const popupDescription = document.getElementById('popupDescription');

    // Attach click event to each menu item
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

    // Close the popup when clicking outside the content area or the 'x' button
    popupContainer.addEventListener('click', function (event) {
        if (event.target.id === 'popupContainer' || event.target.id === 'closePopup') {
            // Close the popup
            closeMenuPopup();
        }
    });
});


//random selector

document.addEventListener('DOMContentLoaded', function () {

    function closeRandomPopup() {
        document.getElementById('randomPopupContainer').style.display = 'none';
    }

    const randomMenuButton = document.getElementById('randomMenuButton');
    const randomPopupContainer = document.getElementById('randomPopupContainer');
    const randomPopupTitle = document.getElementById('randomPopupTitle');

    if (randomMenuButton && randomPopupContainer && randomPopupTitle) {
        randomMenuButton.addEventListener('click', function () {
            const menuList = [
                '에그 마요',
                '이탈리안 비엠티',
                '비엘티',
                '햄',
                '참치',
                '치킨 슬라이스',
                '치킨 데리야끼',
                '쉬림프',
                '핫 쉬림프',
                '폴드 포크 바비큐',
                '스테이크 & 치즈',
                'K-바비큐',
            ];

            const randomIndex = Math.floor(Math.random() * menuList.length);
            const randomMenuItem = menuList[randomIndex];

            // Change the color and display the randomly selected menu in the popup with custom styles
            randomPopupTitle.innerHTML = "<span class='popup-text'; ></br>오늘의 메뉴는...</br></span><span style='color:#333;'></br>" + randomMenuItem + "</span>";

            // Display the popup
            randomPopupContainer.style.display = 'block';
        });

        // Close the popup when clicking outside the content area or the 'x' button
        randomPopupContainer.addEventListener('click', function (event) {
            if (event.target.id === 'randomPopupContainer' || event.target.classList.contains('close-random-popup')) {
                // Close the popup
                closeRandomPopup();
            }
        });
        document.getElementById('closeRandomPopup').addEventListener('click', closeRandomPopup);
    }

});
