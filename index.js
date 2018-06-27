console.log('It works!')

const form1 = document.querySelector("form#Form1")

const submitChrisMovieFunction = function (ev){
    ev.preventDefault()
    const f = ev.target

    const flickName = f.flickName.value
    const flickYear = ' (' + f.flickYear.value + ')'

    const list1 = document.querySelector('#flicksList')

    const movie = document.createElement('movieNameStyle')
    movie.textContent=flickName
    
    const year = document.createElement('movieYearStyle')
    year.textContent = flickYear

    list1.append(movie)
    list1.append(year)
    list1.appendChild(document.createElement('br'))

    /*
    const newItem = document.createElement('li')
    newItem.textContent = flickName + ' (' + flickYear + ')'

    const list = document.querySelector('#flicksList')
    list.appendChild(newItem)
    */

  f.reset()
}

form1.addEventListener ('submit', submitChrisMovieFunction)