const allSections = document.querySelectorAll(".section");
const instagram = document.querySelector('.instagram');
const linkedin = document.querySelector('.linkedin');
const facebook = document.querySelector('.facebook');
const spotify = document.querySelector('.spotify')
const youtube = document.querySelector('.youtube');
const reveal = function(){
    allSections.forEach(function(section){
    section.classList.remove('section-hidden');
    });
};
reveal();

instagram.addEventListener('click', function(){
   window.open(`https://www.instagram.com/itsyour.oliver/`, "_blank") || function(){
       window.location.href = "https://www.instagram.com/itsyour.oliver/";
   }
});
linkedin.addEventListener('click', function(){
    window.open(`https://www.linkedin.com/in/leanhtai253/`, "_blank") || function(){
        window.location.href = "https://www.linkedin.com/in/leanhtai253/";
    }
 });
 facebook.addEventListener('click', function(){
    window.open(`https://www.facebook.com/thegoodoliver`, "_blank") || function(){
        window.location.href = "https://www.facebook.com/thegoodoliver";
    }
 });
 youtube.addEventListener('click', function(){
    window.open(`https://www.youtube.com/channel/UCiHUhyv1-LZXerQ1jWUjs4Q`, "_blank") || function(){
        window.location.href = "https://www.youtube.com/channel/UCiHUhyv1-LZXerQ1jWUjs4Q";
    }
 });
 spotify.addEventListener('click', function(){
    window.open(`https://open.spotify.com/user/f8c0vy2kbun1odg6mgc9me11x?si=b3a68a9195a34794`, "_blank") || function(){
        window.location.href = "https://open.spotify.com/user/f8c0vy2kbun1odg6mgc9me11x?si=b3a68a9195a34794";
    }
 });
//window.addEventListener('click', reveal);