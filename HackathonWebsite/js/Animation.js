
const img1 = document.getElementsByClassName("image1");
const img2 = document.getElementsByClassName("image2");
const img3 = document.getElementsByClassName("image3");
const img4 = document.getElementsByClassName("image4");
const readyAR = document.getElementsByClassName("readyARText");
const getReady = document.getElementsByClassName("getReady");
const card = document.getElementsByClassName("cardInner");

window.onscroll = (event) => {
    var scroll = window.pageYOffset;
    let width = window.innerWidth;
    let newScroll = scroll - 0;
    console.log("Y : " + scroll);
    console.log("width: " + width);
    const body = document.getElementsByTagName('body')[0];

    if (scroll > 300) {
        getReady[0].children[0].classList.add("changeOpacityNormal");
        getReady[0].children[1].classList.add("changeOpacitySlow");
        getReady[0].children[2].classList.add("changeOpacityFast");
    }

    if (newScroll > 0) {
        if (newScroll < 180) {
            if (width > 1200)
                img1[0].style.transform = "matrix(" + (1 + newScroll * 0.0015) + ",0,0," + (1 + newScroll * 0.0015) + "," + -1.1 * newScroll + "," + (0.5 * newScroll) + ")";
            else if (width < 1200 && width > 770)
                img1[0].style.transform = "matrix(" + (1 + newScroll * 0.0005) + ",0,0," + (1 + newScroll * 0.0005) + "," + -1.0 * newScroll + "," + (0.5 * newScroll) + ")";


            // img1[0].lastElementChild.classList.add("hidden");
        }
        if (newScroll > 180) {
            // img1[0].lastElementChild.classList.remove("hidden");
            if (width > 1200)
                img1[0].style.transform = "matrix(" + (1 + 180 * 0.0015) + ",0,0," + (1 + 180 * 0.0015) + "," + -1.1 * 180 + "," + (0.5 * 180) + ")";
            else if (width < 1200 && width > 770)
                img1[0].style.transform = "matrix(" + (1 + 180 * 0.0005) + ",0,0," + (1 + 180 * 0.0005) + "," + -1.0 * 180 + "," + (0.5 * 180) + ")";
            img1[0].lastElementChild.classList.add("changeOpacityNormal");
        }
        if (newScroll < 400) {
            if (width > 1200)
                img2[0].style.transform = "matrix(" + (1 + newScroll * 0.0008) + ",0,0," + (1 + newScroll * 0.0008) + "," + (newScroll * 0.6 + 50) + "," + (0.5 * newScroll - 390) + ")";
            else if (width < 1200 && width > 770)
                img2[0].style.transform = "matrix(" + (1 + newScroll * 0.00008) + ",0,0," + (1 + newScroll * 0.00008) + "," + (newScroll * 0.2 + 50) + "," + (0.5 * newScroll - 320) + ")";

            // img2[0].lastElementChild.classList.add("hidden");
        }
        if (newScroll > 400) {
            // img2[0].lastElementChild.classList.remove("hidden");
            if (width > 1200)
                img2[0].style.transform = "matrix(" + (1 + 400 * 0.0008) + ",0,0," + (1 + 400 * 0.0008) + "," + (400 * 0.6 + 50) + "," + (0.5 * 400 - 390) + ")";
            else if (width < 1200 && width > 770)
                img2[0].style.transform = "matrix(" + (1 + 400 * 0.00008) + ",0,0," + (1 + 400 * 0.00008) + "," + (400 * 0.2 + 50) + "," + (0.5 * 400 - 320) + ")";
            img2[0].lastElementChild.classList.add("changeOpacityNormal");
        }
        if (newScroll < 500) {
            if (width > 1200)
                img3[0].style.transform = "matrix(" + (1 + newScroll * 0.0007) + ",0,0," + (1 + newScroll * 0.0007) + "," + (-newScroll * .29 - 50) + "," + (1.01 * newScroll - 740) + ")";
            else if (width < 1200 && width > 770)
                img3[0].style.transform = "matrix(" + (1 + newScroll * 0.0003) + ",0,0," + (1 + newScroll * 0.0003) + "," + (-newScroll * .25 - 50) + "," + (0.72 * newScroll - 600) + ")";

            // img3[0].lastElementChild.classList.add("hidden");
        }
        if (newScroll > 600) {
            // img3[0].lastElementChild.classList.remove("hidden");
            if (width > 1200)
                img3[0].style.transform = "matrix(" + (1 + 500 * 0.0007) + ",0,0," + (1 + 500 * 0.0007) + "," + (-500 * .29 - 50) + "," + (1.01 * 500 - 740) + ")";
            else if (width < 1200 && width > 770){
                img3[0].style.transform = "matrix(" + (1 + 500 * 0.0003) + ",0,0," + (1 + 500 * 0.0003) + "," + (-500 * .25 - 50) + "," + (0.72 * 500 - 600) + ")";
                readyAR[0].classList.add("changeOpacityNormal");
            }
            img3[0].lastElementChild.classList.add("changeOpacityNormal");

        }
        if (newScroll < 600) {
            if (width > 1200)
                img4[0].style.transform = "matrix(" + (1 + newScroll * 0.0003) + ",0,0," + (1 + newScroll * 0.0003) + "," + (newScroll * .6 - 100) + "," + (1.25 * newScroll - 1280) + ")";
            else if(width < 1200 && width > 770)
                img4[0].style.transform = "matrix(" + (1 + newScroll * 0.00015) + ",0,0," + (1 + newScroll * 0.00015) + "," + (newScroll * .40 - 100) + "," + (0.92 * newScroll - 1020) + ")";

                // img4[0].lastElementChild.classList.add("hidden");
        }
        if (newScroll > 700) {
            // img4[0].lastElementChild.classList.remove("hidden");
            if (width > 1200)
                img4[0].style.transform = "matrix(" + (1 + 600 * 0.0003) + ",0,0," + (1 + 600 * 0.0003) + "," + (600 * .6 - 100) + "," + (1.25 * 600 - 1280) + ")";
            else if(width < 1200 && width > 770)
                img4[0].style.transform = "matrix(" + (1 + 600 * 0.00015) + ",0,0," + (1 + 600 * 0.00015) + "," + (600 * .40 - 100) + "," + (0.92 * 600 - 1020) + ")";
            img4[0].lastElementChild.classList.add("changeOpacityNormal");
        }
        if (newScroll > 1000) {
            if (width > 1200)
                readyAR[0].classList.add("changeOpacityNormal");
        }


        if (newScroll > 3000) {
            body.style.backgroundColor = 'white';
        } else {
            body.style.backgroundColor = 'black';
        }

    }
};

// const goBlack = () => {
//     const body = document.getElementsByTagName('body')[0];
//     body.style.backgroundColor = 'black';
// };


// window.ready = function () {
//     window.scrollTo(0, 0);
// };

// card[0].addEventListener("click", function (e) {
//     card[0].classList.toggle('is-flipped');
// });
