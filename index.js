console.log('It works!')

const updateHeadingButton = document.querySelector("button")

const updateHeadingFunction = function (){
    const heading = document.querySelector('h1')
    heading.textContent = "CHRIS!"
}

updateHeadingButton.onclick = updateHeadingFunction