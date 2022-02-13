let number = 0;
let updation = document.getElementById('updation').innerText ;
document.getElementById('updation').innerText = number;


function add() {
    number = number+ 1;    
    document.getElementById('updation').innerText = number;
}

function sub() {
    if(number>0) {
    number = number - 1;    
    document.getElementById('updation').innerText = number;
    }
}

function addCart() {
    if(document.getElementById('updation').innerText >= 0 ) {
        document.getElementById('count').style.display = 'block';
        document.getElementById('count').innerText = document.getElementById('updation').innerText ;
    }
}

let image = document.getElementById('mainImage');

function thumbOne() {
    image.style.backgroundImage = "url('/images/image-product-1.jpg')";
    image.style.transition = '0.6s all';
}

function thumbTwo() {
    image.style.backgroundImage = "url('/images/image-product-2.jpg')";
    image.style.transition = '0.6s all';
}

function thumbThree() {
    image.style.backgroundImage = "url('/images/image-product-3.jpg')";
    image.style.transition = '0.6s all';
}

function thumbFour() {
    image.style.backgroundImage = "url('/images/image-product-4.jpg')";
    image.style.transition = '0.6s all';
}

// Overlay Section
let overlayImage = document.getElementById('bigImg');
let bigOne = "url('/images/image-product-1.jpg')";
let bigTwo = "url('/images/image-product-2.jpg')";
let bigThree = "url('/images/image-product-3.jpg')";
let bigFour = "url('/images/image-product-4.jpg')";

let counter = 0;


function next() {
    counter += 1;
    
    if(counter == 0) {
        overlayImage.style.backgroundImage = bigOne;
        overlayImage.style.transition = '0.6s all';
    }

    if(counter == 1) {
        overlayImage.style.backgroundImage = bigTwo;
        overlayImage.style.transition = '0.6s all';

    }

    else if(counter == 2) {
        overlayImage.style.backgroundImage = bigThree;
        overlayImage.style.transition = '0.6s all';

    }
    
    else if(counter == 3) {
        overlayImage.style.backgroundImage = bigFour;
        overlayImage.style.transition = '0.6s all';
        document.getElementById('next').style.visibility = 'hidden';
        document.getElementById('previous').style.visibility = 'visible';

    }

    else {
        counter = 0;
    }
}

function previous() {
    counter -= 1;
    
    if(counter == 0) {
        overlayImage.style.backgroundImage = bigOne;
        overlayImage.style.transition = '0.6s all';
        document.getElementById('previous').style.visibility = 'hidden';
        document.getElementById('next').style.visibility = 'visible';
    }
    
    if(counter == 1) {
        overlayImage.style.backgroundImage = bigTwo;
        overlayImage.style.transition = '0.6s all';

    }

    else if(counter == 2) {
        overlayImage.style.backgroundImage = bigThree;
    }
    
    else if(counter == 3) {
        overlayImage.style.backgroundImage = bigFour;
    }

    else {
        counter = 0;
    }
}

function overlay() {
    document.getElementById('overlay').style.display = 'inherit';
    document.getElementById('overlay').style.display = 'flex';
}

function closing() {
    document.getElementById('overlay').style.display = 'none';
}

let overlayImageMobile = document.getElementById('leftSection');

let counterMobile = 0 ;

if(counterMobile < 0 || counterMobile>3)  {
    counterMobile = 0;
    document.getElementById('previousTwo').style.visibility = 'visible';
    document.getElementById('nextTwo').style.visibility = 'hidden';
}


function nextMobile() {
    counterMobile += 1;
    if(counterMobile == 1) {
        document.getElementById('leftSection').style.backgroundImage = bigTwo;
        document.getElementById('nextTwo').style.visibility = 'visible';
        overlayImageMobile.style.transition = '0.8s all' ;
    }

    else if(counterMobile == 2) {
        document.getElementById('nextTwo').style.visibility = 'visible';
        overlayImageMobile.style.transition = '0.8s all' ;
        document.getElementById('leftSection').style.backgroundImage = bigThree;
    }

    else if(counterMobile == 3) {
        document.getElementById('nextTwo').style.visibility = 'hidden';
        document.getElementById('previousTwo').style.visibility = 'visible';
        overlayImageMobile.style.transition = '0.8s all' ;
        document.getElementById('leftSection').style.backgroundImage = bigFour;
    }
}

function previousMobile () {
    counterMobile -= 1;
    if(counterMobile == 0) {
        document.getElementById('previousTwo').style.visibility = 'hidden';
        document.getElementById('nextTwo').style.visibility = 'visible';
        overlayImageMobile.style.transition = '0.8s all' ;
        document.getElementById('leftSection').style.backgroundImage = bigOne;
    } 
    
    else if(counterMobile == 1) {
        document.getElementById('previousTwo').style.visibility = 'visible';
        overlayImageMobile.style.transition = '0.8s all' ;
        document.getElementById('leftSection').style.backgroundImage = bigTwo;
    }

    else if(counterMobile == 2) {
        document.getElementById('previousTwo').style.visibility = 'visible';
        overlayImageMobile.style.transition = '0.8s all' ;
        document.getElementById('leftSection').style.backgroundImage = bigThree;
    }

    else if(counterMobile == 3) {
        document.getElementById('previousTwo').style.visibility = 'hidden';
        overlayImageMobile.style.transition = '0.8s all' ;
        document.getElementById('leftSection').style.backgroundImage = bigFour;
    }
}

function hamBurger() {
    document.getElementById('overlay_mobile').style.display = 'inherit';
}

function closeTwo() {
    document.getElementById('overlay_mobile').style.display = 'none';

}