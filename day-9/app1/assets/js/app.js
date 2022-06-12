var imgElement = document.getElementById('main-gallery-display');
var nextBTN = document.getElementById('next-btn');
var previousBTN = document.getElementById('previous-btn');

var currentIndex = 0;

var photos = [
    'https://www.easytutoriel.com/wp-content/uploads/2021/09/fond-d-ecran-anime-windows-11-10-tutoriel-facile.jpg',
    'https://marmotamaps.com/de/fx/wallpaper/download/faszinationen/Marmotamaps_Wallpaper_Berchtesgaden_Desktop_1920x1080.jpg',
    'https://img.freepik.com/free-photo/cool-geometric-triangular-figure-neon-laser-light-great-backgrounds-wallpapers_181624-9331.jpg?w=2000'
];

// init gallery
imgElement.setAttribute('src',photos[currentIndex]);


nextBTN.addEventListener('click',function(){
    currentIndex++; 
    if ( currentIndex == photos.length ) {
        currentIndex = 0; 
    } 
    imgElement.setAttribute('src',photos[currentIndex]);


})


previousBTN.addEventListener('click',function(){
    currentIndex--; 
    if ( currentIndex < 0 ) {
        currentIndex = (photos.length - 1) ;
    } 
    imgElement.setAttribute('src',photos[currentIndex]);


})