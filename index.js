
let hamburgerImg = document.getElementById('hamburger-img');
let closeImg = document.getElementById('close-img');
let hamMenu = document.getElementById('ham-menu');
let landing = document.getElementById('landing');
let mainContent = document.getElementById('main-content');
let footer = document.getElementById('foot');
let attribution = document.getElementById('attr');


hamburgerImg.addEventListener("click", function(){
  hamMenu.style.display = "block";
  landing.style.display = "none";
  mainContent.style.display = "none";
  footer.style.display = "none";
  attribution.style.display = "none";
})

closeImg.addEventListener("click", function(){
  hamMenu.style.display = "none";
  landing.style.display = "block";
  mainContent.style.display = "block";
  footer.style.display = "block";
  attribution.style.display = "block";
})
