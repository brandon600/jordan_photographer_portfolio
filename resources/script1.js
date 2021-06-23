var menuIcon = document.getElementById('menu_icon_id');
var closeIcon = document.getElementById('close_icon_id');
var navigationOverlay = document.getElementById('navigation_overlay_bg');

var galNavList = document.getElementById('gal_nav_list');
var galleryLi1 = document.getElementById('gallery_li_1');
var galleryLi2 = document.getElementById('gallery_li_2');
var galleryLi3 = document.getElementById('gallery_li_3');
var galleryLi4 = document.getElementById('gallery_li_4');

var galleryImagesAll = document.getElementById('gallery_images_all');
var galleryImagesPortrait = document.getElementById('gallery_images_portrait');
var galleryImagesFashion = document.getElementById('gallery_images_fashion');

var backArrow = document.getElementById('back_arrow_id');
var portfolioContactBtn = document.getElementById('gal_contact')

backArrow.onclick = function() {
    location.href = 'http://webdemo200.com';
}

portfolioContactBtn.onclick = function() {
    location.href = 'http://google.com';
}


galleryLi1.onclick = function() {
    galleryLi1.style.color = '#ffffff';
    galleryLi2.style.color = '#888888';
    galleryLi3.style.color = '#888888';
    galleryLi4.style.color = '#888888';
    galleryImagesAll.style.display = 'flex';
    galleryImagesPortrait.style.display = 'none';
    galleryImagesFashion.style.display = 'none';
    
}

galleryLi2.onclick = function() {
    galleryLi1.style.color = '#888888';
    galleryLi2.style.color = '#ffffff';
    galleryLi3.style.color = '#888888';
    galleryLi4.style.color = '#888888';
    galleryImagesPortrait.style.display = 'flex';
    galleryImagesAll.style.display = 'none';
    galleryImagesFashion.style.display = 'none'
}

galleryLi3.onclick = function() {
    galleryLi1.style.color = '#888888';
    galleryLi2.style.color = '#888888';
    galleryLi3.style.color = '#ffffff';
    galleryLi4.style.color = '#888888';
    galleryImagesFashion.style.display = 'flex';
    galleryImagesAll.style.display = 'none';
    galleryImagesPortrait.style.display = 'none'
}

galleryLi4.onclick = function() {
    galleryLi1.style.color = '#888888';
    galleryLi2.style.color = '#888888';
    galleryLi3.style.color = '#888888';
    galleryLi4.style.color = '#ffffff';
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


