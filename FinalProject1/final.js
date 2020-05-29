
let activeCard = null;


const showPhoto = (e) => {
    activeCard = e.target;
    console.log('the active element is:', activeCard);
    document.querySelector('.preview').className = "preview active";

    document.querySelector('.featured_image').style.backgroundImage = activeCard.style.backgroundImage;
    //document.querySelector('body').style.overflow = 'hidden';
};

const cards = document.querySelectorAll('.card');
  for (card of cards) {
     card.onclick = showPhoto;
   }
//const pics = document.querySelectorAll('.pic');
  //for (pic of pics) {
     //pic.onclick = showPhoto;


const close = () => {
  console.log('close me');
  document.querySelector('.preview').className = "preview";
};

document.querySelector('#close').onclick = close;

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
