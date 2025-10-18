// Data for Images
let images = [
  { "caption": "Dummy Event 1", "link": "https://picsum.photos/400/400?random=1", "orientation": "square" },
  { "caption": "Dummy Event 2", "link": "https://picsum.photos/600/300?random=2", "orientation": "wide" },
  { "caption": "Dummy Event 3", "link": "https://picsum.photos/400/600?random=3", "orientation": "tall" },
  { "caption": "Dummy Event 4", "link": "https://picsum.photos/400/400?random=4", "orientation": "square" },
  { "caption": "Dummy Event 5", "link": "https://picsum.photos/400/400?random=5", "orientation": "square" },
  { "caption": "Dummy Event 6", "link": "https://picsum.photos/400/400?random=6", "orientation": "square" },
  { "caption": "Dummy Event 7", "link": "https://picsum.photos/600/300?random=7", "orientation": "wide" },
  { "caption": "Dummy Event 8", "link": "https://picsum.photos/400/400?random=8", "orientation": "square" },
  { "caption": "Dummy Event 9", "link": "https://picsum.photos/400/400?random=9", "orientation": "square" },
  { "caption": "Dummy Event 10", "link": "https://picsum.photos/400/400?random=10", "orientation": "square" },
  { "caption": "Dummy Event 11", "link": "https://picsum.photos/400/400?random=11", "orientation": "square" },
  { "caption": "Dummy Event 12", "link": "https://picsum.photos/600/300?random=12", "orientation": "wide" },
  { "caption": "Dummy Event 13", "link": "https://picsum.photos/400/400?random=13", "orientation": "square" },
  { "caption": "Dummy Event 14", "link": "https://picsum.photos/400/400?random=14", "orientation": "square" },
  { "caption": "Dummy Event 15", "link": "https://picsum.photos/400/400?random=15", "orientation": "square" },
  { "caption": "Dummy Event 16", "link": "https://picsum.photos/400/400?random=16", "orientation": "square" },
  { "caption": "Dummy Event 17", "link": "https://picsum.photos/400/600?random=17", "orientation": "tall" },
  { "caption": "Dummy Event 18", "link": "https://picsum.photos/400/400?random=18", "orientation": "square" },
  { "caption": "Dummy Event 19", "link": "https://picsum.photos/400/400?random=19", "orientation": "square" },
  { "caption": "Dummy Event 20", "link": "https://picsum.photos/400/400?random=20", "orientation": "square" },
  { "caption": "Dummy Event 21", "link": "https://picsum.photos/400/400?random=21", "orientation": "square" },
  { "caption": "Dummy Event 22", "link": "https://picsum.photos/400/400?random=22", "orientation": "square" },
  { "caption": "Dummy Event 23", "link": "https://picsum.photos/600/300?random=23", "orientation": "wide" },
  { "caption": "Dummy Event 24", "link": "https://picsum.photos/400/600?random=24", "orientation": "tall" },
  { "caption": "Dummy Event 25", "link": "https://picsum.photos/400/600?random=25", "orientation": "tall" },
  { "caption": "Dummy Event 26", "link": "https://picsum.photos/400/400?random=26", "orientation": "square" },
  { "caption": "Dummy Event 27", "link": "https://picsum.photos/400/400?random=27", "orientation": "square" },
  { "caption": "Dummy Event 28", "link": "https://picsum.photos/400/400?random=28", "orientation": "square" },
  { "caption": "Dummy Event 29", "link": "https://picsum.photos/400/400?random=29", "orientation": "square" },
  { "caption": "Dummy Event 30", "link": "https://picsum.photos/600/300?random=30", "orientation": "wide" },
  { "caption": "Dummy Event 31", "link": "https://picsum.photos/400/400?random=31", "orientation": "square" }
];




// --------------------------------------------------------variables-------------------------------------------------//
let gallery = document.getElementById('gallery');
let galleryBTN = document.getElementById('gallery-btn');
let galleryBTNLess = document.getElementById('gallery-btn-less');
let limit = 15;
let index = 0;

// -----------------------------------------function to display pictures -------------------------------------------//
function print() {
    for (index; index <= limit && index < images.length; index++) {

        // Create a new 'a' element for each image
        let img = document.createElement('a');
        img.setAttribute("data-lightbox", "models");
        img.setAttribute("href", images[index].link);
        img.setAttribute("data-title", images[index].caption);

        img.setAttribute("data-aos", "fade")
        img.setAttribute("data-aos-duration", "1500")
        img.setAttribute("data-aos-easing", "ease-out")

        img.classList.add(images[index].orientation);

        // Create and append the image element inside the 'a' element
        let imageElement = document.createElement("img");
        imageElement.src = images[index].link;
        img.appendChild(imageElement);

        // Append the 'a' element to the gallery container
        gallery.appendChild(img);

        // console.log(img);
    }
}
print();

// ------------------------------Buttons to show more and less images-----------------------------------------//
galleryBTN.addEventListener('click', () => {
    // console.log(gallery.innerHTML)
    console.log(index)
    console.log(limit)
    if (gallery.innerHTML != "") {
        index = limit + 1;
        limit += 8;
        // console.log("ran")
    }
    print();

    if (index >= images.length) {
        galleryBTN.classList.add('hide');
        galleryBTNLess.classList.remove('hide');
    }
});
galleryBTNLess.addEventListener('click', () => {
    gallery.innerHTML = "";
    limit = 15;
    index = 0;
    print();
    galleryBTN.classList.remove('hide');
    galleryBTNLess.classList.add('hide');
})


