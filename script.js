// =========== Global Variables =============== //
const navInfo = document.getElementById("InformacionBtn")
const navInsig = document.getElementById("InsigniasBtn")
const navCities = document.getElementById("CiudadesBtn")
const navWeather = document.getElementById("Weather")
const articleScreen = document.getElementById("InteractiveNavigation");

const infoBtn = document.querySelectorAll(".ButtonMed");

const goBack = document.querySelector(".GoBack");
// =========== NAVIGATION =============== //

console.log(navInfo);
console.log(navInsig);
console.log(navCities);
console.log(navWeather);

/* navInfo.addEventListener('click', () => {
  articleScreen.setAttribute("src","/general.html");
}); */

/* navInsig.addEventListener('click', () => {
  articleScreen.setAttribute("src","#")
})

navCities.addEventListener('click', () => {
  articleScreen.setAttribute("src","#")
})

navWeather.addEventListener('click', () => {
  articleScreen.setAttribute("src","/wheater.html")
}) */


// =========== GO BACK BUTTON =============== //

//console.log(articleScreen.src);
//console.log(goBack);

/* goBack.addEventListener('click', () => {
    articleScreen.setAttribute("src","/first.html")
}) */


// =============  Med Buttom Animation - Reveal Data ================ //



//console.log(infoBtn);

infoBtn.forEach((dataCard) => {

  dataCard.addEventListener('click', () => {

    //console.log(dataCard.childNodes[1].childNodes[3]);

    dataCard.childNodes[3].classList.toggle('ActiveIcon');
    dataCard.childNodes[1].childNodes[3].classList.toggle("Hidden");

/*     dataCard.childNodes[1].childNodes.forEach((child) => {

      if (child.classList != undefined) {

        child.classList.toggle("Hidden")
    
        if (child.classList.contains("Hidden")){
          child.classList.toggle("Hidden")
        } 
        //console.log(child);
      }
    }) */

  })
})