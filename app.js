var toggleBtn = document.querySelector("#toggleBtn");
var toggleDisplay = document.querySelector("#toggleDisplay");
var background = document.querySelector("body");

toggleBtn.addEventListener("click", function()
{
    //toggleBackground is set as the class for the background variable
    var toggleBackground = background.getAttribute("class");
    //toggleStatus is set as the class for the toggleDisplay variable
    var toggleStatus = toggleDisplay.getAttribute("class");
    //this check if the class for the toggleDisplay is toggle toggledTrue
    if(toggleStatus === "toggle toggledTrue")
    {
        toggleDisplay.setAttribute("class","toggle toggledFalse");
        background.setAttribute("class","lightMode");

    }
    else if(toggleStatus === "toggle toggledFalse")
    {
        toggleDisplay.setAttribute("class","toggle toggledTrue");
        background.setAttribute("class","darkMode");
    }
});