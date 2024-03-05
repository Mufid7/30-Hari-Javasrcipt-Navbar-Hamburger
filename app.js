// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

// fungsi ketika di klik
const bukaNav = document.querySelector('.buka-navbar');
const links = document.querySelector('.links');

bukaNav.addEventListener('click', ()=>{
   links.classList.toggle('show-links')
})
