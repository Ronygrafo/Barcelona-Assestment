//alert("hey");



// =============  Med Buttom Animation - Reveal Data ================ //

const InfoBtn = document.querySelectorAll(".ButtonMed");
const lenguas = document.getElementById("LenguasBtn")

//console.log(InfoBtn);

InfoBtn.forEach((dataCard) => {

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

// ======= TEST ========= //

/* console.log(lenguas);
console.log(lenguas.childNodes[1]);

lenguas.childNodes[1].childNodes.forEach((child) => {

  if (child.classList != undefined) {

    if (child.classList.contains("Hidden")){
      child.classList.remove("Hidden")
    }
    //console.log(child.classList);
  }
  //console.log(child.classList.contains("Hidden"));
  //if (child.classList.contains(ActiveIcon)) {}
});
 */


//console.log(poblacionBtn.childNodes[1].childNodes[3]);


/* poblacionBtn.addEventListener('click', () => {
    poblacionBtn.childNodes[3].classList.toggle('ActiveIcon');
    poblacionBtn.childNodes[1].childNodes[3].classList.toggle("Hidden");
    //console.log(poblacionBtn.childNodes)

  }) */

/*   const btn = document.querySelector('.btn_animated')
btn.addEventListener('click', () => {
  btn.classList.remove('animate')
  setTimeout(() => btn.classList.add('animate'), 100)
}) */