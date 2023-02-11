//alert("hey");



// =============  Med Buttom Animation ================ //

const poblacionBtn = document.getElementById("poblacion");

//console.log(poblacionBtn.childNodes[1].childNodes[3]);


poblacionBtn.addEventListener('click', () => {
    poblacionBtn.childNodes[3].classList.toggle('ActiveIcon');
    poblacionBtn.childNodes[1].childNodes[3].classList.toggle("Hidden");

    //console.log(poblacionBtn.childNodes)

  })

/*   const btn = document.querySelector('.btn_animated')
btn.addEventListener('click', () => {
  btn.classList.remove('animate')
  setTimeout(() => btn.classList.add('animate'), 100)
}) */