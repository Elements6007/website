function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

window.addEventListener("load", showPage);

async function showPage() {
  document.getElementById("overlay").style.animation = "fadeAway 1s forwards";
  document.getElementById("loader").style.animation = ", fadeAway 1s forwards;";
  await sleep(200);
  document.getElementById("two").style.animation = "slideInFromRight ease-in-out .8s forwards";
  document.getElementById("three").style.animation = "slideInFromLeft ease-in-out .8s forwards";
  document.getElementById("four").style.animation = "slideInFromBottom ease-in-out .8s forwards";
  await sleep(300);
  document.getElementById("loader").style.display = "none";
  await sleep(300);
  document.getElementById("overlay").style.display = "none";

}   
