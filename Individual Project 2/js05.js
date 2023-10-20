/*"use strict";*/
/*    JavaScript 7th Edition
      Chapter 5 - A2 COMP125 Section 402,403
      Chapter Case

      Application to generate a slide show
      Author: 
      Date:   

      Filename: js05.js

      Student name: Jacob Good
      Student number: 301070648
*/
window.addEventListener("load", createLightbox);
window.addEventListener("load", createFavourites);
var counter = 0;


function createLightbox() {
   // Lightbox Container
   let lightBox = document.getElementById("lightbox");

   // Parts of the lightbox
   let lbTitle = document.createElement("h1");
   let lbCounter = document.createElement("div");
   let lbPrev = document.createElement("div");
   let lbNext = document.createElement("div");
   let lbPlay = document.createElement("div");
   let lbImages = document.createElement("div");
   
   // Design the lightbox title
   lightBox.appendChild(lbTitle);
   lbTitle.id = "lbTitle";
   lbTitle.textContent = lightboxTitle;

   // Design the lightbox slide counter
   lightBox.appendChild(lbCounter);
   lbCounter.id = "lbCounter"; 
   var currentImg = 1;
   lbCounter.textContent = currentImg + " / " + imgCount;

   // Design the lightbox previous slide button
   lightBox.appendChild(lbPrev);
   lbPrev.id = "lbPrev"; 
   lbPrev.innerHTML = "&#9664;";
   lbPrev.onclick = showPrev;

   // Design the lightbox next slide button
   lightBox.appendChild(lbNext);
   lbNext.id = "lbNext";
   lbNext.innerHTML = "&#9654;";
   lbNext.onclick = showNext;

   // Design the lightbox Play-Pause button
   lightBox.appendChild(lbPlay);
   lbPlay.id = "lbPlay"; 
   lbPlay.innerHTML = "&#9199;";
   let timeID;
   lbPlay.onclick = function() {
      if (timeID) {
         // Stop the slideshow
         window.clearInterval(timeID);
         timeID = undefined;
      } else {
         // Start the slideshow
         showNext();
         timeID = window.setInterval(showNext, 1500);
      }
   }

   // Design the lightbox images container
   lightBox.appendChild(lbImages);
   lbImages.id = "lbImages";
   // Add images from the imgFiles array to the container
   for (let i = 0; i < imgCount; i++) {
      let image = document.createElement("img");
      image.src = imgFiles[i];
      image.alt = imgCaptions[i];
      image.onclick = createOverlay;
      lbImages.appendChild(image);
   }
   
   // Function to move forward through the image list
   function showNext() {
      lbImages.appendChild(lbImages.firstElementChild);
      (currentImg < imgCount) ? currentImg++ : currentImg = 1;
      lbCounter.textContent = currentImg + " / " + imgCount;
   }
   
   // Function to move backward through the image list
   function showPrev() {
      lbImages.insertBefore(lbImages.lastElementChild, lbImages.firstElementChild);
      (currentImg > 1) ? currentImg-- : currentImg = imgCount;
      lbCounter.textContent = currentImg + " / " + imgCount;
   }
   
   function createOverlay() {
      let overlay = document.createElement("div");
      overlay.id = "lbOverlay";
      
      // Add the figure box to the overlay
      let figureBox = document.createElement("figure");
      overlay.appendChild(figureBox);
      
      // Add the image to the figure box
      let overlayImage = this.cloneNode("true");
      figureBox.appendChild(overlayImage);

      // Add the caption to the figure box
      let overlayCaption = document.createElement("figcaption");
      overlayCaption.textContent = this.alt;
      figureBox.appendChild(overlayCaption);

      // Add the favourite to the figure box
      let overlayFavourite = document.createElement("figcaption");
      overlayFavourite.textContent = "Add to favourites";
      figureBox.appendChild(overlayFavourite);
      let max = 5;
      //check = this.alt;
      overlayFavourite.onclick = function (){
         var imageClone = overlayImage.cloneNode("true");
         if (counter < max)
         {
         imageClone.onclick = createOverlayTwo;
         document.getElementById("FavouriteImages").appendChild(imageClone);
         counter = counter + 1;
         }
         else
         {
         var message = "Please remove a favourite before adding another";
         alert(message);
         }
      }
      
      // Add a close button to the overlay
      let closeBox = document.createElement("div");
      closeBox.id = "lbOverlayClose";
      closeBox.innerHTML = "&times;";
      closeBox.onclick = function() {
         document.body.removeChild(overlay);
      }      
      overlay.appendChild(closeBox);
      
      document.body.appendChild(overlay);
   }  
   $(document).ready(function(){
      $("#ablum01").click(function(){
   // Design the lightbox images container
   //lightBox.removeChild(lbImages);
   //lbImages.removeChild(lbImages.firstChild);
   //lightBox.appendChild(lbImages);
   lbImages.id = "lbImages";
   // Add images from the imgFiles array to the container
   for (let i = 0; i < imgCount; i++) {
      lbImages.removeChild(lbImages.firstChild);
   }


   $.getJSON('json/Rocky Mountain ablum.json', function(data){
      $.each(data, function(index, item){

         let image = document.createElement("img");
         image.src = item.source
         image.alt = item.description + '\n(' + item.name + ')'
         lbImages.appendChild(image);
         image.onclick = createOverlay;
         })
         imgCount = 6;
         lbCounter.textContent = currentImg + " / " + imgCount;
      })
   });

   /*for (let i = 0; i < 3; i++) {
      let image = document.createElement("img");
      function loopGallery(test, index, item){
         //for (let i = 0; i < 2; i++){
            //image.src = item.source
            //image.alt = item.description + '\n(' + item.name + ')'
            //lbImages.appendChild(image);
         //}
         if(index){
            image.src = item.source
            image.alt = item.description + '\n(' + item.name + ')'
            lbImages.appendChild(image);
         }
      }
      $.getJSON('json/Rocky Mountain ablum.json', function(data){
         $.each(data, function(index, item){
            //fetch('json/Rocky Mountain ablum.json')
            //.then (response => response.json())
            //.then (json => { json = {imglist: Array(80)}
            //for (let item of  json.imglist){
               //let image = document.createElement("img");
               //image.src = json.imglist.source
               //image.alt = json.imglist.description + '\n(' + json.imglist.name + ')'
               //lbImages.appendChild(image);
            //}
            image.src = item.source
            image.alt = item.description + '\n(' + item.name + ')'
            lbImages.appendChild(image);
               loopGallery(index <= 2, index, item);
            }
            )
         });
      //});
      image.alt = imgCaptions[i];
      image.onclick = createOverlay;
   }*/

      $("#allphotos").click(function(){
         lbImages.id = "lbImages";
         for (let i = 0; i < imgCount; i++) {
            lbImages.removeChild(lbImages.firstChild);
         }
      
         $.getJSON('json/All photos.json', function(data){
            $.each(data, function(index, item){
      
               let image = document.createElement("img");
               image.src = item.source
               image.alt = item.description + '\n(' + item.name + ')'
               lbImages.appendChild(image);
               image.onclick = createOverlay;
               })
               imgCount = 12;
               lbCounter.textContent = currentImg + " / " + imgCount;
            })
            });

      $("#ablum02").click(function(){
         lbImages.id = "lbImages";
         for (let i = 0; i < imgCount; i++) {
            lbImages.removeChild(lbImages.firstChild);
         }
      
         $.getJSON('json/Not Rocky Mountain ablum.json', function(data){
            $.each(data, function(index, item){
      
               let image = document.createElement("img");
               image.src = item.source
               image.alt = item.description + '\n(' + item.name + ')'
               lbImages.appendChild(image);
               image.onclick = createOverlay;
               })
               imgCount = 6;
               lbCounter.textContent = currentImg + " / " + imgCount;
            })
            });      

      $("#ablum03").click(function(){
         lbImages.id = "lbImages";
         for (let i = 0; i < imgCount; i++) {
            lbImages.removeChild(lbImages.firstChild);
         }
      
         $.getJSON('json/random ablum.json', function(data){
            $.each(data, function(index, item){
      
               let image = document.createElement("img");
               image.src = item.source
               image.alt = item.description + '\n(' + item.name + ')'
               lbImages.appendChild(image);
               image.onclick = createOverlay;
               })
               imgCount = 4;
               lbCounter.textContent = currentImg + " / " + imgCount;
            })
            });                  
   }) 
}

function createOverlayTwo() {
   let overlay = document.createElement("div");
   overlay.id = "lbOverlay";
   
   // Add the figure box to the overlay
   let figureBox = document.createElement("figure");
   overlay.appendChild(figureBox);
   
   // Add the image to the figure box
   let overlayImage = this.cloneNode("true");
   figureBox.appendChild(overlayImage);

   // Add the caption to the figure box
   let overlayCaption = document.createElement("figcaption");
   overlayCaption.textContent = this.alt;
   figureBox.appendChild(overlayCaption);

   // Add the favourite to the figure box
   let overlayFavourite = document.createElement("figcaption");
   overlayFavourite.textContent = "Remove from favourites";
   figureBox.appendChild(overlayFavourite);
   var image = document.getElementById("FavouriteImages").firstElementChild;
   overlayFavourite.onclick = function (){
      document.getElementById("FavouriteImages").removeChild(image);
      counter = counter - 1;
   }
   
   // Add a close button to the overlay
   let closeBox = document.createElement("div");
   closeBox.id = "lbOverlayClose";
   closeBox.innerHTML = "&times;";
   closeBox.onclick = function() {
      document.body.removeChild(overlay);
   }      
   overlay.appendChild(closeBox);
   
   document.body.appendChild(overlay);
}   

function createFavourites() {
   // Favourites Container
   let Favourites = document.getElementById("Favourites");
   let Title = document.createElement("h1");
   let FavouriteImages = document.createElement("div");
    // Design the Favourites title
      Favourites.appendChild(Title);
      Title.id = "Title";
      Title.textContent = favouriteTitle;
      // Design the Favourites images container
      Favourites.appendChild(FavouriteImages);
      FavouriteImages.id = "FavouriteImages";

      $(document).ready(function(){
         $("#hide").click(function(){
            $("#FavouriteImages").hide();
               });
       $("#show").click(function(){
            $("#FavouriteImages").show();
               });               
      })
}
