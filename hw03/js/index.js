
// This variable will always hold the "active" photo element (the div)
let activeCard = null;

// PART 1: Make the showPhoto function work
const showPhoto = (e) => {
    activeCard = e.target;
    console.log('the active element is:', activeCard);
    document.querySelector('.preview').className = "preview active";

    document.querySelector('.featured_image').style.backgroundImage = activeCard.style.backgroundImage;
    document.querySelector('body').style.overflow = 'hidden';
};

// 1st card
// document.querySelector('.card').onclick = showPhoto;

// all cards
const cards = document.querySelectorAll('.card');
  for (card of cards) {
     card.onclick = showPhoto;
   }



// PART 3: Close functionality
const close = () => {
  console.log('close me');
  document.querySelector('.preview').className = "preview";
};

document.querySelector('#close').onclick = close;
// PART 4: Next functionality:
// a. Modify the “next” function (below) so that that it replaces
//    the “.featured_image” background image to the next image in the list.
// b. Attach your newly created “next” function to the onclick event
//    handler of the “.next” button (in the upper right-hand corner).
// c. Also attach your “next” function to the onclick event handler of
//    the “.featured_image” element (so that clicking anywhere on the
//    image will advance it to the next one) — for convenience.
const next = () => {
  activeCard = activeCard.nextElementSibling;
  document.querySelector('.featured_image').style.backgroundImage = activeCard.style.backgroundImage;
    console.log(activeCard.nextElementSibling);
}
document.querySelector('#next').onclick = next;

const prev = () => {
  activeCard = activeCard.previousElementSibling;
  document.querySelector('.featured_image').style.backgroundImage = activeCard.style.backgroundImage;
    console.log(activeCard.previousElementSibling);
}

document.querySelector('#prev').onclick = prev;
// PART 5: Previous functionality:
// a. Create a “previous” function that switches out the
//    “.featured_image” background image to the previous image
//    in the list.
// b. Attach your newly created “previous” function to the onclick
//    event handler of the “.prev” button (in the upper right-hand corner).
