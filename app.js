const satu = document.querySelector(".one");
const dua = document.querySelector(".two");
const tiga = document.querySelector(".three");
const empat = document.querySelector(".four");
const lima = document.querySelector(".five");
const btn = document.querySelector("button.btn");

const receiver = document.querySelector("span#value");

const card = document.querySelector(".card");

const btnClose = document.querySelector(".btn-close");

satu.addEventListener("click", function () {
  receiver.innerText = satu.innerText;
});

dua.addEventListener("click", function () {
  receiver.innerText = dua.innerText;
});

tiga.addEventListener("click", function () {
  receiver.innerText = tiga.innerText;
});

empat.addEventListener("click", function () {
  receiver.innerText = empat.innerText;
});

lima.addEventListener("click", function () {
  receiver.innerText = lima.innerText;
});

// // function button submit
btn.addEventListener("click", function () {
  card.style.display = "none";
});

btnClose.addEventListener("click", function () {
  card.style.display = "block";
});
