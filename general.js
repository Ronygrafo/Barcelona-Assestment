// =========== Global Variables =============== //

let bc = new BroadcastChannel("preview:compiled");
bc.postMessage("hey");

const navInfo = document.getElementById("InformacionBtn");
const navInsig = document.getElementById("InsigniasBtn");
const navCities = document.getElementById("CiudadesBtn");
const navWeather = document.getElementById("Weather");

//
// =========== NAVIGATION =============== //

try {

  navInfo.addEventListener("click", () => {
    bc.postMessage("general");
    console.log(navInfo);
  });
  
  navInsig.addEventListener("click", () => {
    console.log(navInsig);
  });
  
  navCities.addEventListener("click", () => {
    console.log(navCities);
  });
  
  navWeather.addEventListener("click", () => {
    console.log(navWeather);
    bc.postMessage("weather");
  });
  
} catch (error) {}


// =============  Med Buttom Animation - Reveal Data ================ //
const infoBtn = document.querySelectorAll(".ButtonMed");

console.log(infoBtn);

infoBtn.forEach((dataCard) => {
  dataCard.addEventListener("click", () => {
    console.log(dataCard.childNodes[1].childNodes[3]);

    dataCard.childNodes[3].classList.toggle("ActiveIcon");
    dataCard.childNodes[1].childNodes[3].classList.toggle("Hidden");
  });
});