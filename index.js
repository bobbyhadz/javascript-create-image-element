console.log('bobbyhadz.com');

const image = document.createElement('img');

// 👇️ Local image
// image.setAttribute('src', 'my-img.png');

// 👇️ Remote image
image.setAttribute(
  'src',
  'http://bobbyhadz.com/images/blog/javascript-show-div-on-select-option/banner.webp',
);

image.setAttribute('alt', 'nature');

image.setAttribute('height', 350); // 👈️ height in px
image.setAttribute('width', 550); // 👈️ width in px

// 👇️ optionally style the image
image.style.border = '5px solid yellow';

image.onerror = function handleError() {
  console.log('Image could not be loaded');
  // 👇️ Can set image.src to a backup image here
  // image.src = 'backup-image.png'

  // 👇️ Or hide image
  // image.style.display = 'none';
};

image.onload = function handleImageLoaded() {
  console.log('image loaded successfully');
};

const box = document.getElementById('box');
box.appendChild(image);
