
const img1 = document.getElementsByClassName("image1");
const img2 = document.getElementsByClassName("image2");
const img3 = document.getElementsByClassName("image3");
const img4 = document.getElementsByClassName("image4");
const readyAR = document.getElementsByClassName("readyARText");


window.onscroll = (event) => {
    var scroll = window.pageYOffset;
    console.log(scroll);
    const body = document.getElementsByTagName('body')[0];
    if (scroll > 0) {
        if (scroll < 180) {
            img1[0].style.transform = "matrix(" + (1 + scroll * 0.0015) + ",0,0," + (1 + scroll * 0.0015) + "," + -1.1 * scroll + "," + (0.5 * scroll) + ")";
            // img1[0].lastElementChild.classList.add("hidden");
        }
        if (scroll > 180) {
            // img1[0].lastElementChild.classList.remove("hidden");
            img1[0].lastElementChild.classList.add("changeOpacity");
        }
        if (scroll < 400) {
            img2[0].style.transform = "matrix(" + (1 + scroll * 0.0008) + ",0,0," + (1 + scroll * 0.0008) + "," + (scroll * 0.6 + 50) + "," + (0.5 * scroll - 390) + ")";
            // img2[0].lastElementChild.classList.add("hidden");
        }
        if (scroll > 400) {
            // img2[0].lastElementChild.classList.remove("hidden");
            img2[0].lastElementChild.classList.add("changeOpacity");
        }
        if (scroll < 500) {
            img3[0].style.transform = "matrix(" + (1 + scroll * 0.0007) + ",0,0," + (1 + scroll * 0.0007) + "," + (-scroll * .29 - 50) + "," + (1.01 * scroll - 740) + ")";
            // img3[0].lastElementChild.classList.add("hidden");
        }
        if (scroll > 600) {
            // img3[0].lastElementChild.classList.remove("hidden");
            img3[0].lastElementChild.classList.add("changeOpacity");
        }
        if (scroll < 600) {
            img4[0].style.transform = "matrix(" + (1 + scroll * 0.0003) + ",0,0," + (1 + scroll * 0.0003) + "," + (scroll * .6 - 100) + "," + (1.25 * scroll - 1280) + ")";
            // img4[0].lastElementChild.classList.add("hidden");
        }
        if (scroll > 700) {
            // img4[0].lastElementChild.classList.remove("hidden");
            img4[0].lastElementChild.classList.add("changeOpacity");
        }
        if (scroll > 1000) {
            readyAR[0].classList.add("changeOpacity");
        }
        if (scroll > 2000) {
            body.style.backgroundColor = 'white';
        } else {
            body.style.backgroundColor = 'black';
        }

    }
};

const goBlack = () =>{
    const body = document.getElementsByTagName('body')[0];
    body.style.backgroundColor = 'black';
};
