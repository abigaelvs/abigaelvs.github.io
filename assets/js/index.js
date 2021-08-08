// portfolio data
var portfolio = {
    1: {
        "title": "Formrobo",
        "short_description": "The project to automate your google form process",
        "description": `When covid-19 start spreading in indonesia. 
                        Schools in indonesia are starting to switch to online learning methods. 
                        In my school, espescially in my class we use google form to mark our presence. 
                        So every weekdays i have to fill the google form to tell the teacher that i am attending the class. 
                        After 1 week of online learning this thing starts to become repetitive because i have to fill 2 or 3 form in a day. 
                        So i made this program to automate those process. You can access the source code on my github below.`,

        "source_code": "https://github.com/abigaelvs/formrobo",
        "demo": "",

        "images": {
            1: "assets/img/portfolio/formrobo1.png",
            2: "assets/img/portfolio/formrobo2.png",
            3: "assets/img/portfolio/formrobo3.png",
            4: "assets/img/portfolio/formrobo4.png"
        }
    },
    2: {
        "title": "Dj Ecommerce",
        "short_description": "Ecommerce website with django framework",
        "description": `During the pandemic ecommerce becomes more popular. 
                        Because people have to stay at home while they still need to buy the things they need. 
                        So i think i want to create a simple ecommerce website to sharpen my skills in django framework. 
                        I used mdbootstrap template for this site. You can access the source on my github below.`,

        "source_code": "https://github.com/abigaelvs/djecommerce",
        "demo": "",

        "images": {
            1: "assets/img/portfolio/djecommerce1.png",
            2: "assets/img/portfolio/djecommerce2.png",
            3: "assets/img/portfolio/djecommerce3.png",
            4: "assets/img/portfolio/djecommerce4.png",
            5: "assets/img/portfolio/djecommerce5.png"
        }
    },
    3: {
        "title": "To do App",
        "short_description": "A todo app to manage your task",
        "description": `After learning the basic of flask, i try to build a website using this framework. 
                        I want to build a simple website because i want to sharpen my skill on this framework. 
                        So this is what i came for. You can access the source code on my github below.`,

        "source_code": "https://github.com/abigaelvs/flask-todo-app",
        "demo": "",

        "images": {
            1: "assets/img/portfolio/todo1.png",
            2: "assets/img/portfolio/todo2.png"
        }
    },
    4: {
        "title": "Contact List App",
        "short_description": "A contact list app using django framework",
        "description": `After learning the basic of django i want to sharpen my knowledge and do some practice. 
                        So i think to built contact list app. You can access the source code on my github below.`,

        "source_code": "https://github.com/abigaelvs/django-contact-list",
        "demo": "",
        
        "images": {
            1: "assets/img/portfolio/contact1.png",
            2: "assets/img/portfolio/contact2.png"
        }
    },
    5: {
        "title": "Youtube video downloader",
        "short_description": "A project to download your youtube video",
        "description": `Sometimes i want to download a youtube video. 
                        I found an extension on google chrome but the video resolution provided is limited. 
                        So i decided to build my own youtube video downloader using pytube library and 
                        made the web interface using flask framework. Your can see the source code on my github below.`,
        
        "source_code": "https://github.com/abigaelvs/ytdownloader",
        "demo":"",

        "images": {
            1: "assets/img/portfolio/ytdownloader1.png",
            2: "assets/img/portfolio/ytdownloader2.png"
        }
    },
    6: {
        "title": "Weather App",
        "short_description": "A project to forecast weather",

        "description": `After learning the basic of API, i want to sharpen my knowledge and do some practice. 
                        So i search for open API on google and i found the interesting one, weather API. 
                        So i read the API docs and buit the web interface using flask. You can see the source code on my github below.`,
        
        "source_code": "https://github.com/abigaelvs/weather-app",
        "demo": "",

        "images": {
            1: "assets/img/portfolio/weather1.png",
            2: "assets/img/portfolio/weather2.png"
        }
    },
    7: {
        "title": "Image Classification",
        "short_description": "A project to classify the image",

        "description": `When i start learning about machine learning, i took an online course on dicoding. 
                        This is a project from dicoding. You can access the source code on my github below.`,

        "source_code": "https://colab.research.google.com/drive/1JGltPyDbXiZtKYO-OD7KA4M5Onte01HC?usp=sharing",
        "demo": "",

        "images": {
            1: "assets/img/portfolio/classification1.png",
            2: "assets/img/portfolio/classification2.png"
        }
    }
};

// social account data
var socials = {
    "linkedin": {
        "link": "https://www.linkedin.com/in/abigael-vaneakh-76a580199/",
        "icon": "bx bxl-linkedin"
    },
    "github": {
        "link": "https://github.com/abigaelvs",
        "icon": "bx bxl-github"
    },
    "instagram": {
        "link": "https://www.instagram.com/abigaelvs/",
        "icon": "bx bxl-instagram"
    }
};

var skills = {
    "Backend Developer": {
        "details": "Medium, 1 Years",
        "icon": "bx bx-network-chart",
        "skills": {
            "Python": "95%",
            "Django": "92%",
            "Flask": "85%",
            "FastAPI": "50%",
            "SQL": "80%"
        }
    },
    "Frontend Developer": {
        "details": "Medium, 1 Years",
        "icon": "bx bx-code-curly",
        "skills": {
            "HTML": "90%",
            "CSS": "87%",
            "Bootstrap": "85%",
            "Javascript": "75%"
        }
    }
};

const navMenu = document.getElementById('navMenu'),
    navToggle = document.getElementById('navToggle'),
    navClose = document.getElementById('navClose')


// validate if navToggle exists
// if exist create an event listener click
// when clicked add show-menu class to navMenu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}


// validate if navClose exists
// if exist create an event listener click
// when clicked remove show-menu class from navMenu
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}


// remove menu mobile
// make every time we click nav-link, we remove show-menu class
// so menu will be closed
const navLink = document.querySelectorAll('.nav-link');
navLink.forEach(n => n.addEventListener('click', () => {
    // when we click on each nav-link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}));


var homeSocials = document.querySelector(".home-social"),
    contactSocials = document.querySelector(".contact-socials"),
    footerSocials = document.querySelector(".footer-socials");

// create social icon on the home and footer section
if (footerSocials != null) {
    for (s in socials) {
        if (homeSocials != null) {
            // home
            var homeSocial = document.createElement("a");
            homeSocial.className = "home-social-icon";
            homeSocial.href = socials[s]["link"];

            var homeIcon = document.createElement("i");
            homeIcon.className = socials[s]["icon"];

            homeSocial.appendChild(homeIcon);
            homeSocials.appendChild(homeSocial);


            // contact socials
            var contactSocial = document.createElement("a");
            contactSocial.className = "contact-social";
            contactSocial.href = socials[s]["link"];

            var contactIcon = document.createElement("i");
            contactIcon.className = socials[s]["icon"];

            contactSocial.appendChild(contactIcon);
            contactSocials.appendChild(contactSocial);
        }

        
        // footer
        var footerSocial = document.createElement("a");
        footerSocial.className = "footer-social";
        footerSocial.href = socials[s]["link"];

        var footerIcon = document.createElement("i");
        footerIcon.className = socials[s]["icon"];

        footerSocial.appendChild(footerIcon)
        footerSocials.appendChild(footerSocial)
    }
}


var aboutContainer = document.getElementById("about")
if (aboutContainer != null) {
    // count years experience base on year
    var date = new Date(),
    result = Number(date.getFullYear()) - 2020,
    yearsExperience = document.getElementById("years-experience");

    // if result less than 10, we format the number with 0 in front
    // else we return result
    if (result < 10) {
        yearsExperience.textContent = "0" + result;
    } else {
        yearsExperience.textContent = result;
    }
}

var skillsContainer = document.querySelector(".skills-container");
if (skillsContainer != null) {
    for (skill in skills) {
        var skillsContent = document.createElement("div");
        skillsContent.className = "skills-content skills-open";

        var skillsHeader = document.createElement("div");
        skillsHeader.className = "skills-header";

        var skillsIcon = document.createElement("i");
        skillsIcon.className = "skills-icon " + skills[skill]["icon"];

        var div = document.createElement("div")
        var skillsTitle = document.createElement("h1");
        skillsTitle.className = "skills-title";
        skillsTitle.textContent = skill;

        var skillsSubtitle = document.createElement("span");
        skillsSubtitle.className = "skills-subtitle";
        skillsSubtitle.textContent = skills[skill]["details"];

        var skillsArrow = document.createElement("i");
        skillsArrow.className = "bx bx-chevron-down skills-arrow";

        div.appendChild(skillsTitle)
        div.appendChild(skillsSubtitle)

        skillsHeader.appendChild(skillsIcon)
        skillsHeader.appendChild(div)
        skillsHeader.appendChild(skillsArrow)
        skillsContent.appendChild(skillsHeader)

        var skillsList = document.createElement("div");
        skillsList.className = "skills-list grid";

        var list = skills[skill]["skills"]
        for (s in list) {
            var skillsData = document.createElement("div");
            skillsData.className = "skills-data";

            var skillsTitle = document.createElement("div");
            skillsTitle.className = "skills-title";

            var skillsName = document.createElement("h3");
            skillsName.className = "skills-name";
            skillsName.textContent = s;

            var skillsNumber = document.createElement("span");
            skillsNumber.className = "skills-number";
            skillsNumber.textContent = list[s];


            var skillsBar = document.createElement("div");
            skillsBar.className = "skills-bar";

            var skillsPercentage = document.createElement("span");
            skillsPercentage.className = "skills-percentage"
            skillsPercentage.style = "width: " + list[s] + ";";

            skillsTitle.appendChild(skillsName)
            skillsTitle.appendChild(skillsNumber)
            skillsData.appendChild(skillsTitle)

            skillsBar.appendChild(skillsPercentage)
            skillsData.appendChild(skillsBar)

            skillsList.appendChild(skillsData)
        }

        skillsContent.appendChild(skillsList)
        skillsContainer.appendChild(skillsContent)
    }
}


// accordion skills
var skillsContent = document.getElementsByClassName('skills-content'),
    skillsHeader = document.querySelectorAll('.skills-header');

function toggleSkills() {
    let itemClass = this.parentNode.className

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills-content skills-close'
    }
    if (itemClass === 'skills-content skills-close') {
        this.parentNode.className = 'skills-content skills-open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})


// qualification tabs
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification-active')
        })

        target.classList.add('qualification-active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification-active')
        })

        tab.classList.add('qualification-active')
    })
})

var portfolioContainer = document.querySelector(".portfolio-container")
var swiperWrapper = document.querySelector(".swiper-wrapper");

function createPortfolio(img, title, shortDescription, portfolioId) {
    var portfolioContent = document.createElement("div")
    portfolioContent.className = "portfolio-content grid swiper-slide";

    var portfolioImg = document.createElement("img");
    portfolioImg.src = img
    portfolioImg.className = "portfolio-img";

    var portfolioData = document.createElement("div");
    portfolioData.className = "portfolio-data";

    var portfolioTitle = document.createElement("h3");
    portfolioTitle.className = "portfolio-title";
    portfolioTitle.textContent = title;

    var portfolioDescription = document.createElement("p");
    portfolioDescription.className = "portfolio-description";
    portfolioDescription.textContent = shortDescription;

    var portfolioDiv = document.createElement("div");
    var portfolioButton = document.createElement("a");
    var buttonClass = "portfolio-" + portfolioId;
    portfolioButton.href = "portfolio-details.html?id=" + portfolioId
    portfolioButton.className = "button button-flex button-small portfolio-button " + buttonClass;
    portfolioButton.textContent = "Details"

    var buttonIcon = document.createElement("i");
    buttonIcon.className = "bx bxs-right-arrow-alt button-icon";

    portfolioButton.appendChild(buttonIcon)
    portfolioDiv.appendChild(portfolioButton)

    portfolioData.appendChild(portfolioTitle)
    portfolioData.appendChild(portfolioDescription)
    portfolioData.appendChild(portfolioDiv)

    portfolioContent.appendChild(portfolioImg)
    portfolioContent.appendChild(portfolioData)

    swiperWrapper.appendChild(portfolioContent)
}

if (portfolioContainer != null) {
    for (p in portfolio) {
        createPortfolio(portfolio[p]["images"][1],
                        portfolio[p]["title"],
                        portfolio[p]["short_description"],
                        p
        )
    }

    // count completed project by count how many portfolio content that we have
    var portfolioContent = document.querySelectorAll(".portfolio-content"),
    completedProject = document.getElementById("completed-project");
    completedProject.textContent = portfolioContent.length;
}

var detailsButton = document.querySelectorAll(".portfolio-button");
[...detailsButton].forEach(button => {
    button.addEventListener("click", () => {
        var detailsClass = button.classList
        var portfolioClass = detailsClass[detailsClass.length - 1]
        idSplit = portfolioClass.split("-")
        id = Number(idSplit[idSplit.length - 1])
        
        document.cookie = "portfolioId=" + id
    })
})


// portfolio swiper
let swiperPortfolio = new Swiper(".portfolio-container", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: true,
})


// scroll sections active link
const sectionsHome = document.getElementById("home")
if (sectionsHome != null) {
    const sections = document.querySelectorAll('section[id]')

    function scrollActive(){
        const scrollY = window.pageYOffset

        sections.forEach(current =>{
            const sectionHeight = current.offsetHeight
            const sectionTop = current.offsetTop - 50;
            sectionId = current.getAttribute('id')

            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
            }else{
                document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
            }
        })
    }
    window.addEventListener('scroll', scrollActive)
}


// change background header
function scrollHeader() {
    const nav = document.getElementById('header');

    // when the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// show scroll up
function scrollUp() {
    const scrollUp = document.getElementById('scrollUp');

    // when the scroll is higher than 560 viewport height, add the show-scroll
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


// button to change the theme
const themeButton = document.getElementById('theme-button'),
    darkTheme = "dark-theme",
    iconTheme = "bx-sun";

// previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// we obtain the current theme that interface has by validating the dark theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun';

// we validate if the user previously choose a topic
if (selectedTheme) {
    // check selected theme of user
    // if user select dark theme, then add dark-theme class on body
    // and add sun icon to turn back to light theme
    if (selectedTheme == "dark") {
        document.body.classList.add(darkTheme)
        themeButton.classList.toggle(iconTheme)
    } else {
        document.body.classList.remove(iconTheme)
    }
}

// activate or deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // add or remove the dark or icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    // we save the theme and the current icon that user choose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


var detailsContainer = document.querySelector(".details-container");
if (detailsContainer != null) {

    const params = new URLSearchParams(window.location.search).get("id");
    selectedPortfoliio = portfolio[Number(params)];

    var sectionTitle = document.querySelector(".section-title");
    sectionTitle.textContent = selectedPortfoliio["title"];

    var detailsDescription = document.querySelector(".details-description");
    detailsDescription.textContent = selectedPortfoliio["description"];

    var detailButtons = document.querySelector(".detail-buttons");

    if (selectedPortfoliio["demo"] != "") {    
        var demoButton = document.createElement("a");
        demoButton.className = "button button-flex detail-button";
        demoButton.href = selectedPortfoliio["demo"];
        demoButton.textContent = "Demo";

        var demoIcon = document.createElement("i");
        demoIcon.className = "bx bx-tv button-icon";

        demoButton.appendChild(demoIcon)
        detailButtons.appendChild(demoButton)
    }

    if (selectedPortfoliio["source_code"] != "") {
        var sourceCodeButton = document.createElement("a");
        sourceCodeButton.className = "button button-flex detail-button";
        sourceCodeButton.href = selectedPortfoliio["source_code"];
        sourceCodeButton.textContent = "Source Code";

        var sourceCodeIcon = document.createElement("i");
        sourceCodeIcon.className = "bx bx-code-alt button-icon";

        sourceCodeButton.appendChild(sourceCodeIcon)
        detailButtons.appendChild(sourceCodeButton)

    }
    var images = selectedPortfoliio["images"];
    for (img in images) {
        var imageDiv = document.createElement("div");
        imageDiv.className = "image-div grid swiper-slide";

        var newImage = document.createElement("img");
        newImage.src = images[img];
        newImage.className = "details-img";

        imageDiv.appendChild(newImage);
        swiperWrapper.appendChild(imageDiv);
    }
    var swiperDetails = new Swiper(".images-container", {
        cssMode: true,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        mousewheel: true,
    })
}