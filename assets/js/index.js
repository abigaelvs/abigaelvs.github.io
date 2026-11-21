// portfolio data
var portfolio = {
    1: {
        "title": "Formrobo",
        "short_description": "The project to automate your google form process",
        "description": `When COVID-19 started spreading in Indonesia. 
                        Schools in Indonesia are starting to switch to online learning methods. 
                        In my school, especially in my class we use google form to mark our presence. 
                        So every weekdays I have to fill the google form to tell the teacher that I am attending the class. 
                        After 1 week of online learning this thing starts to become repetitive because I have to fill 2 or 3 form in a day. 
                        So I made this program to automate those process. You can access the source code on my github below.`,

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
        "description": `During the pandemic e-commerce became more popular. 
                        Because people have to stay at home while they still need to buy the things they need. 
                        So I think I want to create a simple ecommerce website to sharpen my skills in django framework. 
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
        "description": `After learning the basics of flask, I try to build a website using this framework. 
                        I want to build a simple website because I want to sharpen my skill on this framework. 
                        This is the result. You can access the source code on my github below.`,

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
        "description": `After learning the basics of django I want to sharpen my knowledge and do some practice. 
                        So I decided to build contact list app. You can access the source code on my github below.`,

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
        "description": `Sometimes I want to download a youtube video. 
                        I found an extension on google chrome but the video resolution provided is limited. 
                        So I decided to build my own youtube video downloader using pytube library and 
                        made the web interface using flask framework. You can see the source code on my github below.`,
        
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

        "description": `After learning the basics of API, I want to sharpen my knowledge and do some practice. 
                        So I search for open API on google and I found the interesting one, weather API. 
                        So I read the API docs and built the web interface using flask. You can see the source code on my github below.`,
        
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

        "description": `When I started learning about machine learning, I took an online course on dicoding. 
                        This is a project from dicoding. You can view the notebook on Google Colab below.`,

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
        "details": "C#, .NET",
        "icon": "bx bx-network-chart",
        "skills": ["C#", ".NET Core Web API", "Java", "Spring Boot", "Microservices & API Gateway", "Python"]
    },
    "Frontend Developer": {
        "details": "Blazor, Angular",
        "icon": "bx bx-code-curly",
        "skills": ["Blazor", "Angular", "JavaScript", "TypeScript", "HTML", "CSS"]
    },
    "Database & Tools": {
        "details": "SQL Server, PostgreSQL",
        "icon": "bx bx-server",
        "skills": ["SQL Server", "PostgreSQL", "SSRS", "Payment Gateway (Midtrans)", "Git"]
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
    for (const s in socials) {
        if (homeSocials != null) {
            // home
            var homeSocial = document.createElement("a");
            homeSocial.className = "home-social-icon";
            homeSocial.href = socials[s]["link"];
            homeSocial.target = "_blank"; homeSocial.rel = "noopener"; homeSocial.setAttribute("aria-label", s);

            var homeIcon = document.createElement("i");
            homeIcon.className = socials[s]["icon"];

            homeSocial.appendChild(homeIcon);
            homeSocials.appendChild(homeSocial);


            // contact socials
            var contactSocial = document.createElement("a");
            contactSocial.className = "contact-social";
            contactSocial.href = socials[s]["link"];
            contactSocial.target = "_blank"; contactSocial.rel = "noopener"; contactSocial.setAttribute("aria-label", s);

            var contactIcon = document.createElement("i");
            contactIcon.className = socials[s]["icon"];

            contactSocial.appendChild(contactIcon);
            contactSocials.appendChild(contactSocial);
        }

        
        // footer
        var footerSocial = document.createElement("a");
        footerSocial.className = "footer-social";
        footerSocial.href = socials[s]["link"];
        footerSocial.target = "_blank"; footerSocial.rel = "noopener"; footerSocial.setAttribute("aria-label", s);

        var footerIcon = document.createElement("i");
        footerIcon.className = socials[s]["icon"];

        footerSocial.appendChild(footerIcon)
        footerSocials.appendChild(footerSocial)
    }
}


var skillsContainer = document.querySelector(".skills-container");
if (skillsContainer != null) {
    for (const skill in skills) {
        var skillsContent = document.createElement("div");
        skillsContent.className = "skills-content skills-open";

        var skillsHeader = document.createElement("div");
        skillsHeader.className = "skills-header";

        var skillsIcon = document.createElement("i");
        skillsIcon.className = "skills-icon " + skills[skill]["icon"];

        var div = document.createElement("div")
        var skillsTitle = document.createElement("h3");
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
        for (const s of list) {
            var skillsData = document.createElement("div");
            skillsData.className = "skills-data";

            var skillsTitle = document.createElement("div");
            skillsTitle.className = "skills-title";

            var skillsName = document.createElement("h3");
            skillsName.className = "skills-name";
            skillsName.textContent = s;

            skillsTitle.appendChild(skillsName)
            skillsData.appendChild(skillsTitle)

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

    for (let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills-content skills-close'
    }
    if (itemClass === 'skills-content skills-close') {
        this.parentNode.className = 'skills-content skills-open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})


// show more for long experience/education text
document.querySelectorAll('.qualification-body').forEach(body => {
    if (body.scrollHeight <= body.clientHeight) return

    body.classList.add('is-clamped')
    const button = document.createElement('button')
    button.className = 'qualification-more'
    button.textContent = 'Show more'
    button.setAttribute('aria-expanded', 'false')
    button.addEventListener('click', () => {
        const open = body.classList.toggle('expanded')
        button.textContent = open ? 'Show less' : 'Show more'
        button.setAttribute('aria-expanded', open)
    })
    body.after(button)
})

var portfolioContainer = document.querySelector(".portfolio-container")
var swiperWrapper = document.querySelector(".swiper-wrapper");

function createPortfolio(img, title, shortDescription, portfolioId) {
    var portfolioContent = document.createElement("div")
    portfolioContent.className = "portfolio-content grid swiper-slide";

    var portfolioImg = document.createElement("img");
    portfolioImg.src = img
    portfolioImg.className = "portfolio-img";
    portfolioImg.alt = title; portfolioImg.loading = "lazy";

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
    for (const p in portfolio) {
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
            const sectionId = current.getAttribute('id')

            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                document.querySelector('.nav-menu a[href*=' + sectionId + ']')?.classList.add('active-link')
            }else{
                document.querySelector('.nav-menu a[href*=' + sectionId + ']')?.classList.remove('active-link')
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
        document.body.classList.remove(darkTheme)
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
    const selectedPortfolio = portfolio[Number(params)];
    if (!selectedPortfolio) { window.location.replace("index.html#portfolio"); throw new Error("invalid portfolio id"); }

    var sectionTitle = document.querySelector(".section-title");
    sectionTitle.textContent = selectedPortfolio["title"];

    var detailsDescription = document.querySelector(".details-description");
    detailsDescription.textContent = selectedPortfolio["description"];

    var detailButtons = document.querySelector(".detail-buttons");

    if (selectedPortfolio["demo"] != "") {    
        var demoButton = document.createElement("a");
        demoButton.className = "button button-flex detail-button";
        demoButton.href = selectedPortfolio["demo"];
        demoButton.target = "_blank"; demoButton.rel = "noopener";
        demoButton.textContent = "Demo";

        var demoIcon = document.createElement("i");
        demoIcon.className = "bx bx-tv button-icon";

        demoButton.appendChild(demoIcon)
        detailButtons.appendChild(demoButton)
    }

    if (selectedPortfolio["source_code"] != "") {
        var sourceCodeButton = document.createElement("a");
        sourceCodeButton.className = "button button-flex detail-button";
        sourceCodeButton.href = selectedPortfolio["source_code"];
        sourceCodeButton.target = "_blank"; sourceCodeButton.rel = "noopener";
        sourceCodeButton.textContent = "Source Code";

        var sourceCodeIcon = document.createElement("i");
        sourceCodeIcon.className = "bx bx-code-alt button-icon";

        sourceCodeButton.appendChild(sourceCodeIcon)
        detailButtons.appendChild(sourceCodeButton)

    }
    var images = selectedPortfolio["images"];
    for (const img in images) {
        var imageDiv = document.createElement("div");
        imageDiv.className = "image-div grid swiper-slide";

        var newImage = document.createElement("img");
        newImage.src = images[img];
        newImage.className = "details-img";
        newImage.alt = selectedPortfolio["title"];

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