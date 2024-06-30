// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan nav

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Calculator
const nishab = 6859394;

function zakatprofesi() {
  const pendapatan =
    parseFloat(document.getElementById("pendapatan").value) || 0;
  const pendapatanlain =
    parseFloat(document.getElementById("pendapatanlain").value) || 0;
  const hutang = parseFloat(document.getElementById("hutang").value) || 0;

  const totalharta = pendapatan + pendapatanlain - hutang;
  document.getElementById("totalharta").value = totalharta;

  nilaizakat(totalharta);
}

function nilaizakat(totalharta) {
  let nilaizakat = 0;
  if (totalharta > nishab) {
    nilaizakat = totalharta * 0.025;
  }

  document.getElementById("nilaizakat").value = nilaizakat;
}

document.getElementById("pendapatan").addEventListener("input", zakatprofesi);
document
  .getElementById("pendapatanlain")
  .addEventListener("input", zakatprofesi);
document.getElementById("hutang").addEventListener("input", zakatprofesi);
