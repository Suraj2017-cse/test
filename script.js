const nextBtn = document.querySelector('.next');
const reviewBtn = document.querySelector(".review");
const dumpBtn = document.querySelector(".dump");
const successBtn = document.querySelector(".success");


// next button then right side button became green
nextBtn.addEventListener("click", ()=>{
   successBtn.style.backgroundColor = "#4FBF3D";
});

// review then became yellow
reviewBtn.addEventListener("click", ()=>{
    successBtn.style.backgroundColor = "#F1EB31";
 });

// when clck on dump then it became white
 dumpBtn.addEventListener("click", ()=>{
    successBtn.style.backgroundColor = "#FFFFFF";
 });


// time 
var countDownTarget = new Date().getTime() + 01 * 2.5 * 60 * 60 * 1000;

function showClock(target) {
  const distance = target - new Date().getTime();
  const hours = distance < 0 ? 0 : Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  // const hours = distance < 0 ? 0 : Math.floor((distance % (1000 * 60 * 60 * 60)) / (1000 * 60));
  const mins = distance < 0 ? 0 : Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const secs = distance < 0 ? 0 : Math.floor((distance % (1000 * 60)) / 1000);

  // Output the results
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = mins;
  document.getElementById("seconds").innerHTML = secs;
}

showClock(countDownTarget);

// Update the count down every 1 second
var x = setInterval(function () {
  showClock(countDownTarget);
  if (countDownTarget - new Date().getTime() < 0) {
    clearInterval(x);
  }
}, 1000);