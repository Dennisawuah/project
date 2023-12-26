//Zorgt voor het verschijnen van het hamburgemenu.
function toggleMenu() {
    var optionsMenu = document.getElementById('optionsMenu');
    optionsMenu.classList.toggle('show');

    var hamburgerMenu = document.querySelector('.hamburger-menu');
    var rect = hamburgerMenu.getBoundingClientRect();
    optionsMenu.style.top = rect.bottom + 'px';
    optionsMenu.style.left = rect.left + 'px';
}

// suilt het menu
document.addEventListener('click', function (event) {
    var isClickInside = document.getElementById('optionsMenu').contains(event.target) ||
        document.querySelector('.hamburger-menu').contains(event.target);

    if (!isClickInside) {
        document.getElementById('optionsMenu').classList.remove('show');
    }
});

//maakt hamburger icontje klikbaar
document.body.addEventListener('click', function (event) {
    if (!event.target.closest('.hamburger-menu') && !event.target.closest('.options-menu')) {
        // Als het geklikte element zich niet binnen het hamburgermenu of het optiemenu bevindt, sluit dan het optiemenu.
        optionsMenu.classList.remove('show');
    }
});

//verandert de lees modus
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}



//  text grotte aanpassen
function changeFontSize() {
    var fontSize = document.getElementById('fontSize').value;
    document.getElementById('story').style.fontSize = fontSize + 'px';
}

//de werking van de filters
function filterBooks() {
    const category = document.getElementById('categoryFilter').value;
    const language = document.getElementById('languageFilter').value;
    const age = document.getElementById('ageFilter').value;

    const books = document.querySelectorAll('.boek');

    books.forEach(book => {
        const bookCategory = book.dataset.category;
        const bookLanguage = book.dataset.language;
        const bookAge = book.dataset.age;

        const categoryMatch = category === 'all' || category === bookCategory;
        const languageMatch = language === 'all' || language === bookLanguage;
        const ageMatch = age === 'all' || age === bookAge;

        if (categoryMatch && languageMatch && ageMatch) {
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    });
}

// verbergt & onthult alle foto in de boeken
function toggleImageVisibility() {
    var hideImagesCheckbox = document.getElementById('hideImages');
    var ebookContent = document.getElementById('myImage');

    if (hideImagesCheckbox.checked) {
        ebookContent.style.display = 'none';

    } else {
        ebookContent.style.display = 'block';
    }
}

// toont pop up
function showBookDetailsModal(icon) {
    var bookContainer = icon.parentElement;
    var bookDetails = bookContainer.querySelector('.book-details').innerHTML;
    document.getElementById('modalContent').innerHTML = bookDetails;
    document.getElementById('bookDetailsModal').style.display = 'block';
    document.addEventListener('mousedown', closeBookDetailsModalOutside);
}

// verbergt venster
function hideBookDetailsModal() {
    document.getElementById('bookDetailsModal').style.display = 'none';
    document.removeEventListener('mousedown', closeBookDetailsModalOutside);
}

// sluit de venster als je ergens buiten de venster klikt
function closeBookDetailsModalOutside(event) {
    var modal = document.getElementById('bookDetailsModal');
    var modalContent = document.querySelector('.modal-content');

    if (!modalContent.contains(event.target) && modal.style.display === 'block') {
        hideBookDetailsModal();
    }
}

// zorg voor het sluiting voor de venster
document.addEventListener('mousedown', function (event) {
    var modal = document.getElementById('bookDetailsModal');
    var modalContent = document.querySelector('.modal-content');

    if (!modalContent.contains(event.target) && modal.style.display === 'block') {
        hideBookDetailsModal();
    }
});

// Function om pop up te tonen
function showBookDetailsModal(icon, event) {
    // sta toe om enkel de info icon te klikken
    event.preventDefault();

    var bookContainer = icon.parentElement;
    var bookDetails = bookContainer.querySelector('.book-details').innerHTML;
    document.getElementById('modalContent').innerHTML = bookDetails;
    document.getElementById('bookDetailsModal').style.display = 'block';

    // zorg voor pop up sluiten
    document.addEventListener('mousedown', closeBookDetailsModalOutside);
}

// filters reseten
function resetFilters() {
    document.getElementById('languageFilter').value = 'all';
    document.getElementById('ageFilter').value = 'all';
    document.getElementById('categoryFilter').value = 'all';
    filterBooks();
}



