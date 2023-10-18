/*"use strict";*/
/*    JavaScript 7th Edition
      Chapter 5 - A2 COMP125 Section 402,403
      Chapter Case

      Image List

      Filename:lightbox_data.js

      Student name: Jacob Good
      Student number: 301070648
*/

// Title of the slideshow
let lightboxTitle = "Western Vacation";

// Names of the image files shown in the slideshow
let imgFiles = ["img/photo01.jpg", "img/photo02.jpg", "img/photo03.jpg", "img/photo04.jpg",
                "img/photo05.jpg", "img/photo06.jpg", "img/photo07.jpg", "img/photo08.jpg",
                "img/photo09.jpg", "img/photo10.jpg", "img/photo11.jpg", "img/photo12.jpg"]

// Captions associated with each image
let imgCaptions = new Array(12);
imgCaptions[0]="Sky Pond (Rocky Mountain National Park)";
imgCaptions[1]="Buffalo on the Plains (South Dakota)"; 
imgCaptions[2]="Garden of the Gods (Colorado Springs)"; 
imgCaptions[3]="Elephant Head Wild Flower (Rocky Mountain National Park)"; 
imgCaptions[4]="Double Rainbow (Colorado National Monument)";
imgCaptions[5]="Moose in the Wild (Grand Lake, Colorado)";
imgCaptions[6]="Camas Wild Flower (Rocky Mountain National Park)";
imgCaptions[7]="Chasm Lake (Rocky Mountain National Park)";
imgCaptions[8]="Teton Crest Trail (Grand Teton National Park)";
imgCaptions[9]="The Notch Trail (Badlands National Park)";
imgCaptions[10]="Sprague Lake (Rocky Mountain National Park)";
imgCaptions[11]="Longs Peak Trail (Rocky Mountain National Park)";

// Count of images in the slideshow
let imgCount = imgFiles.length;

//Title 
let favouriteTitle = "My Favourites";