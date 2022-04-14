const card1 = document.querySelector("#card1");
const card2 = document.querySelector("#card2");
const card3 = document.querySelector("#card3");
const card4 = document.querySelector("#card4");

card1.addEventListener("click", function () {
    document.querySelector("#card1 img").classList.toggle("img-scale");
})

card2.addEventListener("click", function () {
    document.querySelector("#card2 img").classList.toggle("img-scale");
})

card3.addEventListener("click", function () {
    document.querySelector("#card3 img").classList.toggle("img-scale");
})

card4.addEventListener("click", function () {
    document.querySelector("#card4 img").classList.toggle("img-scale");
})