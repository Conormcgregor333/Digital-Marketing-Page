let heroSubmitButton = document.getElementById("hero-btn");
let formBlock = document.getElementById("form-block");
heroSubmitButton.addEventListener("click", () => {
  formBlock.style.display = "block";
});
let formSubmitButton = document.getElementById("sbmt-form");
formSubmitButton.addEventListener("click", () => {
  formBlock.style.display = "none";
});
let crossButton = document.getElementById("cross");
crossButton.addEventListener("click", () => {
  formBlock.style.display = "none";
});

let scrollableCards = document.getElementById("scrollableCards");
let dot3 = document.getElementById("dot3");
dot3.addEventListener("click", () => {
  scrollableCards.scrollLeft += 300;
});
let dot1 = document.getElementById("dot1");
dot1.addEventListener("click", () => {
  scrollableCards.scrollLeft -= 300;
});

let dot2 = document.getElementById("dot2");
dot2.addEventListener("click", () => {
  if (scrollableCards.scrollLeft > 100) {
    scrollableCards.scrollLeft -= 150;
  } else {
    scrollableCards.scrollLeft += 150;
  }
});

let bcktxt1 = document.getElementById("bcktxt1");
let bcktxt2 = document.getElementById("bcktxt2");
let bcktxt3 = document.getElementById("bcktxt3");

let bck = document.getElementById("bck");
bcktxt2.addEventListener("click", () => {
  bck.style.backgroundImage =
    "url('https://th.bing.com/th/id/R.ce83ad6bba764bd415071f2deccda0e3?rik=aeYH6TXyCZvLUg&riu=http%3a%2f%2fpicsdesktop.com%2ffood%2f800x600%2fwww.PicsDesktop.com_116.jpg&ehk=%2fqAECRPb35fPqF0Z9%2bufNXxDF0BPhkKIN38rLB5m3dc%3d&risl=&pid=ImgRaw&r=0')";
});
bcktxt1.addEventListener("click", () => {
  bck.style.backgroundImage =
    "url('https://34travel.me/media/upload/images/2017/june/japan-food/shutterstock_371217364-giappone.jpg')";
});
bcktxt3.addEventListener("click", () => {
  bck.style.backgroundImage =
    "url('https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/01/a0001911/img/en/a0001911_parts_5a8bd049f3aeb.jpg?20200603141350&q=80')";
});
bcktxt2.addEventListener("mouseover", () => {
  bck.style.backgroundImage =
    "url('https://th.bing.com/th/id/R.ce83ad6bba764bd415071f2deccda0e3?rik=aeYH6TXyCZvLUg&riu=http%3a%2f%2fpicsdesktop.com%2ffood%2f800x600%2fwww.PicsDesktop.com_116.jpg&ehk=%2fqAECRPb35fPqF0Z9%2bufNXxDF0BPhkKIN38rLB5m3dc%3d&risl=&pid=ImgRaw&r=0')";
});
bcktxt1.addEventListener("mouseover", () => {
  bck.style.backgroundImage =
    "url('https://34travel.me/media/upload/images/2017/june/japan-food/shutterstock_371217364-giappone.jpg')";
});
bcktxt3.addEventListener("mouseover", () => {
  bck.style.backgroundImage =
    "url('https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/01/a0001911/img/en/a0001911_parts_5a8bd049f3aeb.jpg?20200603141350&q=80')";
});
