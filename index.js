document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');

        header.addEventListener('click', function () {
            // Toggle the display of content when the header is clicked
            const content = item.querySelector('.accordion-content');
            content.style.display = content.style.display === 'none' ? 'block' : 'none';

            // Collapse other open sections (optional)
            accordionItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.querySelector('.accordion-content').style.display = 'none';
                }
            });
        });
    });
});

function toggleContent() {
    let ES = document.querySelectorAll('.ES');
    let EN = document.querySelectorAll('.EN');

    ES = [...ES]
    EN = [...EN]

    for (let i = 0; i < ES.length; i++) {
        let esDisplayStyle = window.getComputedStyle(ES[i]).getPropertyValue('display');

        if (esDisplayStyle === 'block') {
            ES[i].style.display = 'none';
            EN[i].style.display = 'block';
        }
        else {
            ES[i].style.display = 'block';
            EN[i].style.display = 'none';
        }
    }
}


