var headerMenu = document.querySelector('#header-menu');

headerMenu.addEventListener('click', function(e) {
    let htmlCollection = this.children;
    for (let i = 0; i < htmlCollection.length; i++) {
        htmlCollection.item(i).children[0].classList.remove('activeLink');
    }
    e.target.classList.add('activeLink');
    changeSlide();
});

var slide1 = document.querySelector('.slider1'),
    slide2 = document.querySelector('.slider2'),
    arrowLeft = document.querySelector('.slider-image-arrow1'),
    arrowRight = document.querySelector('.slider-image-arrow2'),
    showSlider = slide1,
    hideSlider = slide2;


arrowLeft.addEventListener('click', changeSlider);
arrowRight.addEventListener('click', changeSlider);

function changeSlider(e) {
    let current = hideSlider;
    showSlider.style.opacity = 0;
    hideSlider.style.opacity = 1;
    hideSlider = showSlider;
    showSlider = current;
}


var phoneHorizontal = document.querySelector('#phone-horizontal'),
    phoneVertical = document.querySelector('#phone-vertical'),
    displayHorizontal = document.querySelector('.display-horizontal'),
    displayVertical = document.querySelector('.display-vertical'),
    offDisplayHorizontal = 0,
    offDisplayVertical = 0;

phoneHorizontal.addEventListener('click', switchDisplayHorizontal);
displayHorizontal.addEventListener('click', switchDisplayHorizontal);
phoneVertical.addEventListener('click', switchDisplayVertical);
displayVertical.addEventListener('click', switchDisplayVertical);

function switchDisplayHorizontal() {
    if (offDisplayHorizontal) {
        displayHorizontal.style.opacity = 0;
        offDisplayHorizontal = 0;
    } else {
        displayHorizontal.style.opacity = 1;
        offDisplayHorizontal = 1;
    }
}

function switchDisplayVertical() {
    console.log('1');
    if (offDisplayVertical) {
        displayVertical.style.opacity = 0;
        offDisplayVertical = 0;
    } else {
        displayVertical.style.opacity = 1;
        offDisplayVertical = 1;
    }
}

var  portfolioElements = document.querySelector('.portfolio-container');

portfolioElements.addEventListener('click', function(e) {
    let htmlCollection = this.children;
    for (let i = 0; i < htmlCollection.length; i++) {
        htmlCollection[i].children[0].classList.remove('active-image');
    }
    e.target.classList.add('active-image');
});

var portfolioButton =  document.querySelector('.menu-buttons');

portfolioButton.addEventListener('click', sortPortfolioImage);

function sortPortfolioImage(e) {
    var arr = portfolioElements.children,
        tempArr = [];

    for (let i = 0; i < arr.length; i++) {
        tempArr[i] = arr[i].children[0];
    }
    console.log(tempArr[0]);
    tempArr.sort(function() { return Math.random() - 0.5 });
    for (let i = 0; i < arr.length; i++) {
        arr.item(i).innerHTML = '<img src="' + tempArr[i].src + '" alt="" class="portfolio-image">';
    }

}

var button = document.querySelector('#submit-form');

button.addEventListener('click', function (e) {
    var text = 'Письмо отправлено \n';
        name = document.querySelector('#name').value,
        email = document.querySelector('#email').value,
        subject = document.querySelector('#subject').value,
        describe = document.querySelector('#describe').value;

    if (name == "") {
        alert("Please fill in the field name");
        e.preventDefault();
        return;
    }
    if (!validateEmail(email)) {
        alert("Please fill in the field email");
        e.preventDefault();
        return;
    }
    if (subject == "") {
        text += 'Без темы \n';
    } else {
        text += 'Тема: ' + subject + '\n';
    }

    if (describe == "") {
        text += 'Без описания\n';
    } else {
        text += 'Описание: ' + describe + '\n';
    }

    alert(text);
    e.preventDefault();
});

function validateEmail(email)
{
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

document.querySelector('.burger').addEventListener('mouseenter', showMenu);
document.querySelector('.burger').addEventListener('mouseleave', hideMenu);


function showMenu(e) {
    var image = document.querySelector('.burger').children[0],
        screenLock = document.querySelector('.screen-lock'),
        backdrop = document.querySelector('.backdrop'),
        title = document.querySelector('header').children[1],
        star = document.querySelector('.star'),
        headerMenu = document.querySelector('#header-menu');

    image.style.transform = 'rotate(90deg)';
    screenLock.style.display = 'block';
    backdrop.style.display = 'block';
    title.classList.add('active-title');
    star.classList.add('active-star');
    headerMenu.style.display = 'block';
    headerMenu.classList.add('active-menu');

}

function hideMenu(e) {
        var image = document.querySelector('.burger').children[0];
        image.style.transform = 'rotate(0deg)';
        document.querySelector('.screen-lock').style.display = 'none';
        document.querySelector('.backdrop').style.display = 'none';
        document.querySelector('header').children[1].classList.remove('active-title');
        document.querySelector('.star').classList.remove('active-star');
        document.querySelector('#header-menu').classList.remove('active-menu');
        document.querySelector('#header-menu').style.display = 'none';
}