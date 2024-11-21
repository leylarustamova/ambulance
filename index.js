"use strict"
const ambulance = document.querySelector(".ambulance")
const carSound = document.querySelector("#carSound");
const adam1 = document.querySelector(".adam1");
const car1 = document.querySelector(".car1");
const car2 = document.querySelector(".car2");
ambulance.addEventListener("click", function () {
    this.classList.add("active");
    carSound.currentTime = 0;
    carSound.play();


    this.classList.add("activ");
    let adam1Out = setTimeout(() => {
        adam1.classList.add("activ");
      
    }, 15000);

   
     
    let ambulanceOut = setTimeout(() => {
        ambulance.classList.add("hereket");
    }, 15000);
    let car1Out = setTimeout(() => {
        car1.classList.add("suret");
    }, 100);
    let car2Out = setTimeout(() => {
        car2.classList.add("speed");
    }, 1000);
})

