window.addEventListener("load", showPage);
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function showPage() {
    document.getElementById("overlay").style.animation = "fadeAway 1s forwards";
    document.getElementById("loader").style.animation = ", fadeAway 1s forwards;";

    await sleep(300);
    document.getElementById("loader").style.display = "none";
    await sleep(600);
    document.getElementById("overlay").style.display = "none";

}