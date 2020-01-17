var i = 0;
var images = [];
var time = 3000;

// image list
images[0] = "./img/panam1.jpeg";
images[1] = "./img/panam2.jpeg";
images[2] = "./img/panam3.jpeg";

// change image
function changeImg() {
    document.slide.src = images[i];

    if(i < images.length - 1){
        i++;
    } else {
        i = 0;
    }

    setTimeout('changeImg()', time);
}

window.onload = changeImg;
