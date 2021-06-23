var menuIcon = document.getElementById('menu_icon_id');
var closeIcon = document.getElementById('close_icon_id');
var navigationOverlay = document.getElementById('navigation_overlay_bg');

var navContainer = document.getElementById('nav_container');
var galleryBtnId = document.getElementById('gallery_btn_id');
var homeRightSec = document.getElementById('hrs');
var homeRightSec2 = document.getElementById('hrs2');
var bottomName = document.getElementById('bottom_name');


var openPage2 = function() {
    location.href = 'http://webdemo200.com/index2.html';
   // window.open('index2.html');
};




galleryBtnId.onclick = function() {
    console.log('executing');
   navContainer.classList.add('fadeOutLeft');
   homeRightSec.classList.add('fadeOutLeft');
   homeRightSec2.classList.add('fadeOutRight'); 
   bottomName.classList.add('fadeOutDown');  
   setTimeout(openPage2, 1000);
   //navContainer.style.transform = 'translate3d(100%, 0, 0)';
   //navContainer.style.opacity = '0.0';
}

menuIcon.onclick = function() {
    console.log('being clicked');
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
    navigationOverlay.style.display = 'block';
}

closeIcon.onclick = function() {
    console.log('being clicked');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
    navigationOverlay.style.display = 'none';
}