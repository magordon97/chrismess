console.log('It works!')

const updateHeadingButton = document.querySelector("button")

const updateHeadingFunction = function (){
    const heading = document.querySelector('#Heading2')
    heading.textContent = "No, wait. Chris Evans is the best Chris!"
}

updateHeadingButton.onclick = updateHeadingFunction