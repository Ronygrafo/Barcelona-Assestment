// ===== Global variables ===== //

const articleScreen = document.getElementById("InteractiveNavigation");
const goBack = document.querySelector(".GoBack");
const laptopBg = document.getElementById("SafariBackground");

// ==== Broadcast Channel for iframe navigation ==== //

let bc = new BroadcastChannel("preview:compiled");
bc.onmessage = function (message) {
  console.log(message.data);

  switch (message.data) {
    case "general":
      articleScreen.setAttribute("src", "/general.html");
      showNavDetails();
      break;
    case "weather":
      articleScreen.setAttribute("src", "/wheater.html");
      showNavDetails();
      break;

    // continue siwtch for navigation //
  }
};

function showNavDetails() {
  goBack.setAttribute("style", "visibility: visible;");
  laptopBg.classList.toggle("Hidden");
}

// =========== GO BACK BUTTON =============== //

//console.log(articleScreen.src);
//console.log(goBack);

goBack.addEventListener("click", () => {
  articleScreen.setAttribute("src", "/first.html");
  laptopBg.classList.add("Hidden");
});

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
