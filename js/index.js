$(".hamburger").click(() => {
  $(".navbar-wrap").toggleClass("nav-open");
  // $(".hamburger.activate").toggleClass("nav-open");
  $(".hamburger").removeClass("open");
  $(".close-svg").addClass("activate");
  $(".close-svg").addClass("open");
  $(".hamburger").addClass("close");
});

$(".close-svg").click(() => {
  $(".close-svg.activate").removeClass("open");
  $(".hamburger").removeClass("close");
  $(".navbar-wrap").toggleClass("nav-open");
  $(".hamburger").removeClass("open");
});
//----------------------

$(".search").click(() => {
  $("input.input").toggleClass("active");
  $(".search").toggleClass("click");
});

//-----------------

// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem("darkMode");
// const darkModeToggle = document.querySelector(".light-mode-icon");
// const lightModeToggle = $(".dark-mode-icon");
const darkAndLight = $(".dark-and-light");
const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add("activate");
  // -------------------
  $(".light-mode-icon").addClass("active-mode");
  $(".dark-mode-icon").addClass("active-mode");
  // -------------------------
  $("body").addClass("activate");
  // -------------------------
  $(".navbar-wrap").addClass("activate");
  // -------------------------
  $(".news-content").addClass("activate");
  //---------------------------------
  $("h4.title-news-category").addClass("activate");
  //---------------------
  $(".title-news").addClass("activate");
  //-----------------------------
  $(".date").addClass("activate");
  // -------------------------
  $(".dots").addClass("activate");
  //-----------------------
  $(".amount-view").addClass("activate");
  // ----------------------
  $(".read").addClass("activate");
  //------------------------
  $(".read-more svg").addClass("activate");
  //-------------------
  $(".link-1-demo").addClass("activate");
  //-------------------
  $(".logo").addClass("activate");
  //--------------
  $(".nav-link a").addClass("activate");
  // ----------------
  $(".nav-link").addClass("activate");
  //---------------
  $(".search").addClass("activate");
  //-----------------
  $(".hamburger").addClass("activate");
  // --------------------
  $(".nav").addClass("activate");
  //------------------
  $(".title-demo-news").addClass("activate");
  // --------------------
  $("p.des-demo").addClass("activate");
  //-------------------
  $(".more-pic h5").addClass("activate");
  //--------------------
  $("p.writter").addClass("activate");
  //--------------------
  $(".author-pic-and-detail").addClass("activate");
  //-----------------
  $(".author-name-demo").addClass("activate");
  //---------------------
  $(".quote").addClass("activate");
  //-------------------
  $(".pf-author-and-quote").addClass("activate");
  //-------------------
  $(".author-social").addClass("activate");
  //---------------
  $(".continue-reading h3").addClass("activate");
  //----------
  $(".swiper-pagination-bullets-dynamic").addClass("activate");
  //--------------
  $(".intro svg").addClass("activate");
  //-------------
  $(".box-1-author").addClass("activate");
  $(".author-name p:nth-child(1)").addClass("activate");
  $(".author-name p:nth-child(2)").addClass("activate");
  $(".our-quote").addClass("activate");
  $(".icons-social").addClass("activate");
  $(".intro h3").addClass("activate");
  $(".news-box").addClass("activate");
  $(".news-detail .title").addClass("activate");
  // $(".more-about h3 ").addClass("activate");
  // $(".more-about").addClass("activate");
  //----------- sport-news
  $(".my-wrapper-container .sport-news").addClass("activate");
  $(".sport-news-des h3").addClass("activate");
  $("#more-des h4 ").addClass("activate");
  $("#view-and-svg svg").addClass("activate");
  $("#small-sport-news h3").addClass("activate");
  $(".testimonial-header").addClass("activate");
  $(".testimonial-wrapper .testimonial-box").addClass("activate");
  $(".testimonial-box p.author-quote").addClass("activate");
  $(".testimonial-box p.name").addClass("activate");
  $(".testimonial-wrapper svg").addClass("activate");
  $(".hr").addClass("activate");

  // notify
  $(".wrapper-notify h3.noti-header").addClass("activate");
  $(".wrapper-notify").addClass("activate");
  $(".detail-notify h3").addClass("activate");
  $(".detail-notify p").addClass("activate");
  $(".download h3").addClass("activate");

  $(".q-and-a").addClass("activate");
  $(".q-and-a .q-and-a-header").addClass("activate");
  $(".box-q-a").addClass("activate");
  // 2. Update darkMode in localStorage
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove("darkmode");
  // ///------------------
  // $(".more-about").removeClass("activate");
  // $(".more-about h3 ").removeClass("activate");
  $(".light-mode-icon").removeClass("active-mode");
  $(".dark-mode-icon").removeClass("active-mode");
  // -------------------------
  $("body").removeClass("activate");
  // -------------------------
  // -------------------------
  $(".navbar-wrap").removeClass("activate");
  // -------------------------
  $(".news-content").removeClass("activate");
  //---------------------------------
  $("h4.title-news-category").removeClass("activate");
  //---------------------
  $(".title-news").removeClass("activate");
  //-----------------------------
  $(".date").removeClass("activate");
  // -------------------------
  $(".dots").removeClass("activate");
  //-----------------------
  $(".amount-view").removeClass("activate");
  // ----------------------
  $(".read").removeClass("activate");
  //------------------------
  $(".read-more svg").removeClass("activate");
  //-------------------
  $(".link-1-demo").removeClass("activate");
  //-------------------
  $(".logo").removeClass("activate");
  //--------------
  $(".nav-link a").removeClass("activate");
  // ----------------
  $(".nav-link").removeClass("activate");
  //---------------
  $(".search").removeClass("activate");
  //-----------------
  $(".hamburger").removeClass("activate");
  // --------------------
  $(".nav").removeClass("activate");
  //------------------
  $(".title-demo-news").removeClass("activate");
  // --------------------
  $("p.des-demo").removeClass("activate");
  //-------------------
  $(".more-pic h5").removeClass("activate");
  //--------------------
  $("p.writter").removeClass("activate");
  //--------------------
  $(".author-pic-and-detail").removeClass("activate");
  //-----------------
  $(".author-name-demo").removeClass("activate");
  //---------------------
  $(".quote").removeClass("activate");
  //-------------------
  $(".pf-author-and-quote").removeClass("activate");
  //-------------------
  $(".author-social").removeClass("activate");
  //---------------
  $(".continue-reading h3").removeClass("activate");
  //-------------
  $(".swiper-pagination-bullets-dynamic").removeClass("activate");
  //--------------
  $(".intro svg").removeClass("activate");
  //-------------
  $(".box-1-author").removeClass("activate");
  $(".author-name p:nth-child(1)").removeClass("activate");
  $(".author-name p:nth-child(2)").removeClass("activate");
  $(".icons-social").removeClass("activate");
  $(".our-quote").removeClass("activate");
  $(".intro h3").removeClass("activate");
  $(".news-box").removeClass("activate");
  $(".news-detail .title").removeClass("activate");
  //----------- sport-news
  $(".my-wrapper-container .sport-news").removeClass("activate");
  $(".sport-news-des h3").removeClass("activate");
  $("#more-des h4 ").removeClass("activate");
  $("#view-and-svg svg").removeClass("activate");
  $("#small-sport-news h3").removeClass("activate");
  $(".testimonial-header").removeClass("activate");
  $(".testimonial-wrapper .testimonial-box").removeClass("activate");
  $(".testimonial-box p.author-quote").removeClass("activate");
  $(".testimonial-box p.name").removeClass("activate");
  $(".testimonial-wrapper svg").removeClass("activate");
  $(".hr").removeClass("activate");

  // notify
  $(".wrapper-notify").removeClass("activate");
  $(".wrapper-notify h3.noti-header").removeClass("activate");
  $(".detail-notify h3").removeClass("activate");
  $(".detail-notify p").removeClass("activate");
  $(".download h3").removeClass("activate");

  $(".q-and-a").removeClass("activate");
  $(".q-and-a .q-and-a-header").removeClass("activate");
  $(".box-q-a").removeClass("activate");

  // 2. Update darkMode in localStorage
  localStorage.setItem("darkMode", null);
};

// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === "enabled") {
  enableDarkMode();
}

// When someone clicks the button
darkAndLight.click(() => {
  // get their darkMode setting
  darkMode = localStorage.getItem("darkMode");

  // if it not current enabled, enable it
  if (darkMode !== "enabled") {
    enableDarkMode();
    // if it has been enabled, turn it off
  } else {
    disableDarkMode();
  }
});

document.querySelectorAll(".nav-link")[1].addEventListener("click", () => {
  document.querySelectorAll(".nav-link")[1].classList.add("active");
  document.querySelectorAll(".nav-link")[0].classList.remove("active");
  document.querySelectorAll(".nav-link")[2].classList.remove("active");
  document.querySelectorAll(".nav-link")[3].classList.remove("active");
  document.querySelectorAll(".nav-link")[4].classList.remove("active");
  $(".navbar-wrap").removeClass("nav-open");
  $(".hamburger").removeClass("nav-open");
  // $(".hamburger").addClass("open");
  $(".hamburger").removeClass("close");
  $(".close-svg").removeClass("activate");
});

document.querySelectorAll(".nav-link")[2].addEventListener("click", () => {
  document.querySelectorAll(".nav-link")[2].classList.add("active");
  document.querySelectorAll(".nav-link")[0].classList.remove("active");
  document.querySelectorAll(".nav-link")[1].classList.remove("active");
  document.querySelectorAll(".nav-link")[3].classList.remove("active");
  document.querySelectorAll(".nav-link")[4].classList.remove("active");
  $(".navbar-wrap").removeClass("nav-open");
  $(".hamburger").removeClass("nav-open");
  // $(".hamburger").addClass("open");
  $(".hamburger").removeClass("close");
  $(".close-svg").removeClass("activate");
});

document.querySelectorAll(".nav-link")[3].addEventListener("click", () => {
  document.querySelectorAll(".nav-link")[3].classList.add("active");
  document.querySelectorAll(".nav-link")[0].classList.remove("active");
  document.querySelectorAll(".nav-link")[1].classList.remove("active");
  document.querySelectorAll(".nav-link")[2].classList.remove("active");
  document.querySelectorAll(".nav-link")[4].classList.remove("active");
  $(".navbar-wrap").removeClass("nav-open");
  $(".hamburger").removeClass("nav-open");
  // $(".hamburger").addClass("open");
  $(".hamburger").removeClass("close");
  $(".close-svg").removeClass("activate");
});

document.querySelectorAll(".nav-link")[4].addEventListener("click", () => {
  document.querySelectorAll(".nav-link")[4].classList.add("active");
  document.querySelectorAll(".nav-link")[0].classList.remove("active");
  document.querySelectorAll(".nav-link")[1].classList.remove("active");
  document.querySelectorAll(".nav-link")[2].classList.remove("active");
  document.querySelectorAll(".nav-link")[3].classList.remove("active");
  $(".navbar-wrap").removeClass("nav-open");
  $(".hamburger").removeClass("nav-open");
  // $(".hamburger").addClass("open");
  $(".hamburger").removeClass("close");
  $(".close-svg").removeClass("activate");
});

$(".box-1 .q-title").click(() => {
  $(".q-and-a .box-q-a.box-1 svg").toggleClass("open");
  $(".box-q-a.box-1 .answer").toggleClass("open");
  $(".q-and-a").toggleClass("open");
});

$(".box-2 .q-title").click(() => {
  $(".q-and-a .box-q-a.box-2  svg").toggleClass("open");
  $(".box-q-a.box-2 .answer").toggleClass("open");
  $(".q-and-a").toggleClass("open2");
});

const body = document.body;

let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    document.querySelector(".navbar-wrap").classList.remove("onscrolled");
    return;
  }

  if (
    currentScroll > lastScroll &&
    !document.querySelector(".navbar-wrap").classList.contains("onscrolled")
  ) {
    document.querySelector(".navbar-wrap").classList.add("onscrolled");
  } else if (
    currentScroll < lastScroll &&
    document.querySelector(".navbar-wrap").classList.contains("onscrolled")
  ) {
    document.querySelector(".navbar-wrap").classList.remove("onscrolled");
  }
  lastScroll = currentScroll;
});
