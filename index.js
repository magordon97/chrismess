console.log('It works!')

const form1 = document.querySelector("form#Form1")

const newSpan = function (name, value){
    const span = document.createElement('span')
    span.classList.add(name)
    span.textContent = value
    return span
}

const submitChrisMovieFunction = function (ev){
    ev.preventDefault()
    const f = ev.target

    const flickName = newSpan('movieNameStyle',f.flickName.value)
    const flickYear = newSpan('movieYearStyle',` (${f.flickYear.value})`)

    const list1 = document.querySelector('#flicksList')

    //const movie = document.createElement('movieNameStyle')
    //movie.textContent=flickName
    
    //const year = document.createElement('movieYearStyle')
    //year.textContent = flickYear

    const listElement = document.createElement('li')

    listElement.append(flickName)
    listElement.append(flickYear)
    listElement.appendChild(document.createElement('br'))

    list1.appendChild(listElement)
    /*
    const newItem = document.createElement('li')
    newItem.textContent = flickName + ' (' + flickYear + ')'

    const list = document.querySelector('#flicksList')
    list.appendChild(newItem)
    */

  f.reset()
}

form1.addEventListener ('submit', submitChrisMovieFunction)