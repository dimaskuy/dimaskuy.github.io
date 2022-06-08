// My Script
// Navbar Fixed
const navbar = document.querySelector("header");

window.addEventListener("scroll", function () {
  const topNav = navbar.offsetTop;
  if (window.scrollY > topNav) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
});

// Hamburger 🍔 & Show/Hide Nav-Menu
const hamburger = document.getElementById("hamburger");
const navmenu = document.getElementById("navmenu");

function navStuff() {
  hamburger.classList.toggle("hamburger-active");
  navmenu.classList.toggle("hidden");
}

hamburger.addEventListener("click", navStuff);

window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navmenu) {
    hamburger.classList.remove("hamburger-active");
    navmenu.classList.add("hidden");
  }
});
// hamburger.addEventListener("blur", function (e) {
//   navStuff();
//   console.log(e.target);
//   e.stopPropagation();
//   if (e.target.id === "hamburger") {
//     console.log("ok");
//     //  return;
//   }
// });

// To Top
const toTop = document.getElementById("to-top");
toTop.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// Lightbox
const lightbox = document.getElementById("lightbox");
const lightboxFigure = lightbox.querySelector('figure');
const lightboxImgContainer = lightboxFigure.querySelector("#imgContainer");
const lightboxImg = lightboxFigure.querySelector("img.lightboxImg");
const lightboxTxt = lightboxFigure.querySelector("figcaption");
const cardImgs = Array.from(document.querySelectorAll("img.lightbox"));
const closeBtn = lightbox.querySelector("#closeBtn");

cardImgs.forEach((img) => {
  img.addEventListener("click", function (e) {
    lightbox.style.opacity = '1';
    lightbox.style.transform = 'scale(1)';
    lightboxImgContainer.style.opacity = '1';
    lightboxImgContainer.style.transform = 'translateY(0vh)';
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxTxt.textContent = img.alt;
    document.body.style.overflow = 'hidden';
  });
});

let isZoomed = false;
function zoomLightbox(e) {
  if(isZoomed) {
    e.target.style.transform = 'scale(1)';
    lightboxImgContainer.style.cursor = 'zoom-in';
    isZoomed = false;
  } else {
    e.target.style.transform = 'scale(1.5)';
    lightboxImgContainer.style.cursor = 'zoom-out';
    isZoomed = true;
  }
}

function removeLightbox(el) {
  el.style.opacity = '0';
  el.style.transform = 'scale(0)';
  lightboxImgContainer.style.opacity = '0';
  lightboxImgContainer.style.transform = 'translateY(100vh)';
  document.body.style.overflow = 'auto';
  lightboxImg.style.transform = 'scale(1)';
  lightboxImgContainer.style.cursor = 'zoom-in';
}

lightbox.addEventListener("click", function (e) {
  if (e.target.classList.contains("lightboxImg")) {
    zoomLightbox(e);
    return;
  }
  removeLightbox(this);
});

closeBtn.addEventListener("click", () => removeLightbox(lightbox));

// Light/Dark Mode
const darkToggle = document.getElementById("dark-toggle");
const darkLabel = document.querySelector(".dark-mode label");
const html = document.querySelector("html");

// Switch theme icon
const icon = darkLabel.querySelector("div div i");
darkToggle.addEventListener("change", function (e) {
  if (icon.classList.contains("bi-moon-fill")) {
    icon.classList.remove("bi-moon-fill");
    icon.classList.add("bi-sun-fill");
    return;
  } else if (icon.classList.contains("bi-sun-fill")) {
    icon.classList.remove("bi-sun-fill");
    icon.classList.add("bi-moon-fill");
  }
});

// Dark Mode's Images
const imgDark = Array.from(document.querySelectorAll(".img-dark"));
function switchDarkImg(imgDark) {
  imgDark.forEach((img) => {
    if (html.classList.contains("dark") || localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      if (img.src === "img/tailwind.svg" || img.src === "http://127.0.0.1:5500/img/tailwind.svg" || img.src === "https://dimaskuy.github.io/img/tailwind.svg") {
        img.src = "img/tailwindWhite.svg";
        console.log("changing Tailwind logo to white mode");
      } else if (img.src === "img/github.svg" || img.src === "http://127.0.0.1:5500/img/github.svg" || img.src === "https://dimaskuy.github.io/img/github.svg") {
        img.src = "img/githubWhite.png";
        console.log("changing GitHub logo to white mode");
      }
      return;
    } else {
      if (img.src === "img/tailwindWhite.svg" || img.src === "http://127.0.0.1:5500/img/tailwindWhite.svg") {
        img.src = "img/tailwind.svg";
      } else if (img.src === "img/githubWhite.svg" || img.src === "http://127.0.0.1:5500/img/githubWhite.png") {
        img.src = "img/github.svg";
      }
    }
  });
}
switchDarkImg(imgDark);

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
    document.location.reload();
    switchDarkImg(imgDark);
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
    document.location.reload();
    switchDarkImg(imgDark);
  }
});

// Toggle's Theme Localstorage (https://tailwindcss.com/docs/dark-mode)
if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  darkToggle.checked = true;
  icon.classList.remove("bi-sun-fill");
  icon.classList.add("bi-moon-fill");
  // switchDarkImg(imgDark);
} else {
  darkToggle.checked = false;
  icon.classList.remove("bi-moon-fill");
  icon.classList.add("bi-sun-fill");
  // switchDarkImg(imgDark);
}

// Send the contact form data to Google Sheets
const scriptURL = "https://script.google.com/macros/s/AKfycbwgyLDcNIYi59HaidZN2BhcjyhsVxpd4w17ax9nuG0Eqz6pcKMeWpu0OQPk9PvCeUAJ/exec";
const form = document.querySelector(".submit-to-google-sheet");
const btnSubmit = document.querySelector(".btn-submit");
const btnLoading = document.querySelector(".btn-loading");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  btnSubmit.style.display = "none";
  btnLoading.style.display = "block";
  // btnSubmit.classList.add("hidden");
  // btnLoading.classList.add("block");

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      console.log("Success!", response);
      Swal.fire({
        icon: "success",
        title: "Success to send the message!",
      });
      btnSubmit.style.display = "block";
      btnLoading.style.display = "none";
    })

    .catch((error) => {
      console.error("Error!", error.message);
      Swal.fire({
        icon: "error",
        title: "Failed to send the message :(",
      });
    });

  form.reset();
});
