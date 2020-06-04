
let activeCard = null;
const cards = document.querySelectorAll('.card');
//const captions = document.querySelectorAll('.caption');

const showPhoto = (e) => {
    activeCard = e.target;
    console.log('the active element is:', activeCard);
    document.querySelector('.preview').className = "preview active";

    document.querySelector('.featured_image').style.backgroundImage = activeCard.style.backgroundImage;
    document.querySelector('body').style.overflow = 'hidden';
};

//const cards = document.querySelectorAll('.card');
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
  if (activeCard === cards[11]) {
    activeCard = cards[0];
  }
  else if (activeCard === cards[23]) {
    activeCard = cards[12];
  }
  else if (activeCard === cards[35]) {
    activeCard = cards[24];
  }
  else {
  activeCard = activeCard.nextElementSibling;
  }
  console.log(activeCard);
  document.querySelector('.featured_image').style.backgroundImage = activeCard.style.backgroundImage;
    console.log(activeCard.nextElementSibling);
}
document.querySelector('#next').onclick = next;

const prev = () => {
  if (activeCard === cards[0]){
    activeCard = cards[11];
  }
  else if (activeCard === cards[12]) {
    activeCard = cards[23];
  }
  else if (activeCard === cards[24]) {
    activeCard = cards[35];
  }
  else {
  activeCard = activeCard.previousElementSibling;
  }
  document.querySelector('.featured_image').style.backgroundImage = activeCard.style.backgroundImage;
    console.log(activeCard.previousElementSibling);
}
document.querySelector('#prev').onclick = prev;

const legally = () => {
  activeCard = cards[0];
  console.log(activeCard);
  document.querySelector('.featured_image').style.backgroundImage = activeCard.style.backgroundImage;
}
document.querySelector('#legally').onclick = legally;

const joni = () => {
  activeCard = cards[12];
  console.log(activeCard);
  document.querySelector('.featured_image').style.backgroundImage = activeCard.style.backgroundImage;
}
document.querySelector('#joni').onclick = joni;

const rent = () => {
  activeCard = cards[24];
  console.log(activeCard);
  document.querySelector('.featured_image').style.backgroundImage = activeCard.style.backgroundImage;
}
document.querySelector('#rent').onclick = rent;
