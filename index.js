console.log('It works!')

const updateHeadingButton = document.querySelector('#Button1')

const updateHeadingFunction = function (){
    const headingUpdate = document.querySelector('#Heading2')
    headingUpdate.textContent = "No, wait. Chris Evans is the best Chris!"
}

updateHeadingButton.addEventListener ('click', updateHeadingFunction)

const form = document.querySelector("form#Form1")

const submitChrisFunction = function (){
    const headingSubmit = document.querySelector('#Heading1')
    headingSubmit.textContent = 'Chris ' + document.querySelector('#textInput1').value
    event.preventDefault()
}

form.addEventListener ('submit', submitChrisFunction)