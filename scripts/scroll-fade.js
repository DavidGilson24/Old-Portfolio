const navBar = document.getElementById("NavBar");
const titlePage = document.getElementById("TitlePage");
const aboutMe = document.getElementById("AboutMe");
const projects = document.getElementById("Projects");
const contact = document.getElementById("Contact");
            
navBar.style.transition = "opacity 0.5s ease-in-out";
titlePage.style.transition = "opacity 0.5s ease-in-out";
aboutMe.style.transition = "opacity 0.35s ease-in-out";
projects.style.transition = "opacity 0.35s ease-in-out";
contact.style.transition = "opacity 0.35s ease-in-out";

function handleNavBarOpacity() 
{
    const scrollY = window.scrollY;
    const fadeThreshold = 200;

    if (scrollY > fadeThreshold) 
    {
        const opacity = 1 - ((scrollY - fadeThreshold) / fadeThreshold);
        navBar.style.opacity = opacity;
    } 
    
    else 
    {
        navBar.style.opacity = 1;
    }
}

function handleTitlePageOpacity() 
{
    const scrollY = window.scrollY;
    const fadeThreshold = 400;

    if (scrollY > fadeThreshold) 
    {
        const opacity = 1 - ((scrollY - fadeThreshold) / fadeThreshold);
        titlePage.style.opacity = opacity;
    } 
    
    else 
    {
        titlePage.style.opacity = 1;
    }
}

function handleAboutMeOpacity() 
{
    const fadeThreshold = aboutMe.offsetTop - window.innerHeight + 750;
        
    if (window.scrollY > fadeThreshold) 
    {
        const opacity = 1 - (fadeThreshold - window.scrollY) / 600;
        aboutMe.style.opacity = opacity;
    }

    else
    {
        aboutMe.style.opacity = 0;
    }
}

function handleProjectsOpacity() 
{
    const fadeThreshold = projects.offsetTop - window.innerHeight + 300;
        
    if (window.scrollY > fadeThreshold) 
    {
        const opacity = 1 - (fadeThreshold - window.scrollY) / 600;
        projects.style.opacity = opacity;
    }

    else
    {
        projects.style.opacity = 0;
    }
}

function handleContactOpacity() 
{
    const fadeThreshold = contact.offsetTop - window.innerHeight + 300;
        
    if (window.scrollY > fadeThreshold) 
    {
        const opacity = 1 - (fadeThreshold - window.scrollY) / 600;
        contact.style.opacity = opacity;
    }

    else
    {
        contact.style.opacity = 0;
    }
}

if (window.innerWidth <= 450 || window.innerWidth <= 950) {
    welcomeScreen.classList.add('no-animation');
}
else
{
    handleNavBarOpacity();
    handleTitlePageOpacity();
    handleAboutMeOpacity();
    handleProjectsOpacity();
    handleContactOpacity();

    window.addEventListener("scroll", handleNavBarOpacity);
    window.addEventListener("scroll", handleTitlePageOpacity);
    window.addEventListener("scroll", handleAboutMeOpacity);
    window.addEventListener("scroll", handleProjectsOpacity);
    window.addEventListener("scroll", handleContactOpacity);
}



