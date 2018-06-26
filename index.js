console.log('It works!')

const updateHeadingButton = document.querySelector('#Button1')

const updateHeadingFunction = function (){
    const headingUpdate = document.querySelector('#Heading2')
    headingUpdate.textContent = "No, wait. Chris Evans is the best Chris!"
}

updateHeadingButton.addEventListener ('click', updateHeadingFunction)

const submitChrisButton = document.querySelector('#Button2')

const submitChrisFunction = function (){
    const headingSubmit = document.querySelector('#Heading1')
    headingSubmit.textContent = document.querySelector('#textInput1').value
    //alert(headingSubmit.textContent)
    event.preventDefault()
}

submitChrisButton.addEventListener ('click', submitChrisFunction)