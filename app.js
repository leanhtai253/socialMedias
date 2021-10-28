const allSections = document.querySelectorAll(".section");

const reveal = function(){
    allSections.forEach(function(section){
    section.classList.remove('section-hidden');
    });
};
reveal();
//window.addEventListener('click', reveal);