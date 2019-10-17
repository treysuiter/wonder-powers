console.log("we good")
// flight section 

const flightSection = document.querySelector("#flight")

const flightHandlerFunction = (newClass) => {
    flightSection.classList.toggle("disabled")
    flightSection.classList.toggle(newClass)
}

document.querySelector("#activate-flight").addEventListener("click", () => 
    flightHandlerFunction("enabled")
)

// mind reading section

const mindReadingSection = document.querySelector("#mindreading")

const mindReadingHandlerFunction = (newClass) => {
    mindReadingSection.classList.toggle("disabled")
    mindReadingSection.classList.toggle(newClass)
}

document.querySelector("#activate-mindreading").addEventListener("click", () => 
    mindReadingHandlerFunction("enabled")
)

// xray vision section

const xraySection = document.querySelector("#xray")

const xrayHandlerFunction = (newClass) => {
    xraySection.classList.toggle("disabled")
    xraySection.classList.toggle(newClass)
}

document.querySelector("#activate-xray").addEventListener("click", () => 
    xrayHandlerFunction("enabled")
)

// enable/disable all powers

//acivate all

const activateAll = () => {
    console.log("activate loop")
    let powersOffList = document.querySelectorAll(".disabled")
    for (let i = 0; i < powersOffList.length; i++) {
        powersOffList[i].classList.toggle("disabled")
        powersOffList[i].classList.toggle("enabled")
    }
}

document.querySelector("#activate-all").addEventListener("click", function () {
    console.log("activate all listener")
    activateAll()
})

// deactivate all

const deactivateAll = () => {
    console.log("deactivate loop")
    let powersOnList = document.querySelectorAll(".enabled")
    for (let i = 0; i < powersOnList.length; i++) {
        powersOnList[i].classList.toggle("enabled")
        powersOnList[i].classList.toggle("disabled")
    }
}

document.querySelector("#deactivate-all").addEventListener("click", function () {
    console.log("deactivate all listener")
    deactivateAll()
})
