    // Added DarkMode
const darkLight = document.querySelector(".checkbox");
const changeColourAboutme = document.querySelector(".aboutme");
const changeColourLogo = document.querySelector(".logo");
const changeColourLinkedin = document.querySelector(".linkedin");
const changeColourProjects = document.querySelector(".projects");
const changeColourExperience = document.querySelector(".expereince");
const arrayColourChange = [changeColourAboutme, changeColourLogo, changeColourLinkedin, changeColourProjects, changeColourExperience  ];
darkLight.addEventListener("click", DarkMode);
function DarkMode(){
    let element = document.body;
    element.classList.toggle("dark");
    if (element.classList.contains("dark")) {
        arrayColourChange.forEach(el => {
            el.style.setProperty("box-shadow", "none");
        });
        document.querySelector(".name").style.color = "white";
    } else {
        document.querySelector(".name").style.color = "black";
    }
        
    console.log("Element is running");
}

                    // Added Loader
document.onreadystatechange = function loading() {
    if (document.readyState != 'complete') {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector(".🤚").style.visibility = "visible";

    } else {
        document.querySelector(".🤚").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
    }
    console.log("loading is finished");
};

