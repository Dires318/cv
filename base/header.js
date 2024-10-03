const menuItems = document.querySelectorAll('.menu li a');
menuItems.forEach(item => {
    if (window.location.href == item.href){
        item.classList.add("text-blue-700")
    }
    else {
        item.classList.add("text-gray-900")
        item.classList.add("dark:text-white")
    }});