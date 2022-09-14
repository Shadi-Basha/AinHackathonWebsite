
const img1 = document.getElementsByClassName("image1");
const img2 = document.getElementsByClassName("image2");
const img3 = document.getElementsByClassName("image3");
const img4 = document.getElementsByClassName("image4");
const readyAR = document.getElementsByClassName("readyARText");
const getReady = document.getElementsByClassName("getReady");

window.onscroll = (event) => {
    var scroll = window.pageYOffset;
    let newScroll = scroll - 742;
    console.log(scroll);
    const body = document.getElementsByTagName('body')[0];

    if(scroll > 300){
        getReady[0].children[0].classList.add("changeOpacityNormal");
        getReady[0].children[1].classList.add("changeOpacitySlow");
        getReady[0].children[2].classList.add("changeOpacityFast");
    }

    if (newScroll > 0) {
        if (newScroll < 180) {
            img1[0].style.transform = "matrix(" + (1 + newScroll * 0.0015) + ",0,0," + (1 + newScroll * 0.0015) + "," + -1.1 * newScroll + "," + (0.5 * newScroll) + ")";
            // img1[0].lastElementChild.classList.add("hidden");
        }
        if (newScroll > 180) {
            // img1[0].lastElementChild.classList.remove("hidden");
            img1[0].lastElementChild.classList.add("changeOpacityNormal");
        }
        if (newScroll < 400) {
            img2[0].style.transform = "matrix(" + (1 + newScroll * 0.0008) + ",0,0," + (1 + newScroll * 0.0008) + "," + (newScroll * 0.6 + 50) + "," + (0.5 * newScroll - 390) + ")";
            // img2[0].lastElementChild.classList.add("hidden");
        }
        if (newScroll > 400) {
            // img2[0].lastElementChild.classList.remove("hidden");
            img2[0].lastElementChild.classList.add("changeOpacityNormal");
        }
        if (newScroll < 500) {
            img3[0].style.transform = "matrix(" + (1 + newScroll * 0.0007) + ",0,0," + (1 + newScroll * 0.0007) + "," + (-newScroll * .29 - 50) + "," + (1.01 * newScroll - 740) + ")";
            // img3[0].lastElementChild.classList.add("hidden");
        }
        if (newScroll > 600) {
            // img3[0].lastElementChild.classList.remove("hidden");
            img3[0].lastElementChild.classList.add("changeOpacityNormal");
        }
        if (newScroll < 600) {
            img4[0].style.transform = "matrix(" + (1 + newScroll * 0.0003) + ",0,0," + (1 + newScroll * 0.0003) + "," + (newScroll * .6 - 100) + "," + (1.25 * newScroll - 1280) + ")";
            // img4[0].lastElementChild.classList.add("hidden");
        }
        if (newScroll > 700) {
            // img4[0].lastElementChild.classList.remove("hidden");
            img4[0].lastElementChild.classList.add("changeOpacityNormal");
        }
        if (newScroll > 1000) {
            readyAR[0].classList.add("changeOpacityNormal");
        }
        if (newScroll > 3000) {
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


window.ready = function () {
    window.scrollTo(0,0);
};