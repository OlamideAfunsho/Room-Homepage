// Array of large image URLs
const largeImages = [
     './images/desktop-image-hero-1.jpg',
     './images/desktop-image-hero-2.jpg',
     './images/desktop-image-hero-3.jpg'
 ];


 const headers = [
     "Discover innovative ways to decorate",
     "We are available all across the globe",
     "Manufactured with the best materials"
 ]

 const descriptions = [
     "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
 ]
 
 // Track the current image index
 let currentIndex = 0;
 
 // Select the main large image and the arrow buttons
 const largeImage = document.getElementById('main-image');
 const descriptionHeader = document.getElementById('header');
 const descriptionParagraph = document.getElementById('para');
 const prevArrow = document.getElementById('prevArrow');
 const nextArrow = document.getElementById('nextArrow');
 
 // Function to update the main image
 function updateMainImage() {
     largeImage.src = largeImages[currentIndex];
     descriptionHeader.textContent = headers[currentIndex];
     descriptionParagraph.textContent = descriptions[currentIndex];


 }

 function preloadImages() {
     largeImages.forEach((src) => {
         const img = new Image();
         img.src = src;
     });
 }
 
 // Call preload function once, so images load in advance
 preloadImages();
 

 function debounce(func, delay) {
     let isThrottled = false;
     return function() {
         if (isThrottled) return;
         isThrottled = true;
         func();
         setTimeout(() => isThrottled = false, delay);
     };
 }
 // Add event listener to the next arrow
 nextArrow.addEventListener('click', debounce(function() {
     // Increment the index and loop back if at the end
     currentIndex = (currentIndex + 1) % largeImages.length;
     updateMainImage();
 }, 300));
 
 // Add event listener to the previous arrow
 prevArrow.addEventListener('click', debounce(function() {
     // Decrement the index and loop back if at the beginning
     currentIndex = (currentIndex - 1 + largeImages.length) % largeImages.length;
     updateMainImage();
 }, 300));


// HAMBURGER MENU

function openNav(){
     const dropBar = document.querySelector('.dropbar');
     const overlay = document.getElementById('overlay');
     const body = document.body; // Reference to the body element
 
     dropBar.style.display = "flex";
     overlay.classList.add('show');
     body.classList.add('no-scroll'); 
 
     
      
 }
 function closeNav(){
     const dropBar = document.querySelector('.dropbar');
     const overlay = document.getElementById('overlay');
     const body = document.body;
 
     dropBar.style.display = "none";
     overlay.classList.remove('show');
     body.classList.remove('no-scroll');
     
 }
 
 
 window.addEventListener('resize', function() {
     const dropBar = document.querySelector('.dropbar');
     const overlay = document.getElementById('overlay');
     const body = document.body;
 
     if (window.innerWidth > 600) {  // Adjust this value based on your breakpoint
         dropBar.style.display = "none";     // Hide sidebar
         overlay.classList.remove('show');   // Hide overlay
         body.classList.remove('no-scroll'); // Enable body scrolling
     }
 });