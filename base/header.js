const menuItems = document.querySelectorAll('#menu a');

menuItems.forEach(item => {
    item.addEventListener('click', function () {
        // Remove the 'active' class from all links
        menuItems.forEach(link => link.classList.remove('active'));

        // Add the 'active' class to the clicked link
        this.classList.add('active');
    });
});