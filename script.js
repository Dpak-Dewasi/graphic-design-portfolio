// JavaScript to toggle the navigation menu

const navBar = document.querySelector(".navbar");
const navBtn = document.querySelector(".menu-icon");

navBtn.addEventListener('click', () =>
{
    navBar.classList.toggle("active");
})

// Downaload CV

const cvBtn = document.querySelector(".cvBtn");

cvBtn.onclick = () =>
{
    window.open("document/DeepakDewasiCV.pdf","_blank");
}