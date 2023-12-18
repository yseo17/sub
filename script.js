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

            randomPopupTitle.innerHTML = "<span class='popup-text'; ></br>오늘의 메뉴는...</br></span><span style='color:#333;'></br>" + randomMenuItem + "</span>";

            randomPopupContainer.style.display = 'block';
        });

        randomPopupContainer.addEventListener('click', function (event) {
            if (event.target.id === 'randomPopupContainer' || event.target.id === 'closeRandomPopup') {
                // Close the popup
                closeRandomPopup();
            }
        });
    }

    // Close the popup when the 'x' button is clicked
    document.getElementById('closeRandomPopup').addEventListener('click', closeRandomPopup);
});
