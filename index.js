class App{
    constructor(){
        this.list1 = document.querySelector('#flickList')
        this.flickArray = []

        const form1 = document.querySelector("form#Form1")
        form1.addEventListener ('submit', (ev)=>{
            ev.preventDefault()
            this.submitChrisMovie(ev)
        })
    }

    addDeleteButton(ev, flickObj){
        const newDeleteButton = document.createElement('button')
        newDeleteButton.textContent = `Delete` //${flickObj.name[i]}
        newDeleteButton.type='submit'

        newDeleteButton.addEventListener('click', (ev) => this.deleteAMovie(ev, flickObj))

        return newDeleteButton
    }

    addFavoriteButton(ev, flickObj){
        const favButton = document.createElement('button')
        favButton.classList.add('fav')
        favButton.type='submit'
        favButton.innerHTML = '<i class="fas fa-star" title="toggle favorite">Fave!</i>'
        favButton
         .addEventListener(
           'click',
           (_ev) => this.toggleFavorite(ev, flickObj) //
         )
        //actions.appendChild(favButton) //
        return favButton

    }

    deleteAMovie(ev, flickObj){
        const itemToDelete = ev.target.closest('.flickObj')

        //const i = this.flickArray.indexOf(flickObj)
        //this.flickArray.splice(i, 1)
        this.list1.removeChild(itemToDelete)
    }

    newSpan(name, value){
        const span = document.createElement('span')
        span.classList.add(name)
        span.textContent = value
        return span
    }   

    renderItem(flickObj){
        const newListElement = document.createElement('li')
        newListElement.classList.add('flickObj')

        const properties = Object.keys(flickObj)
    
        properties.forEach((propertyName)=>{
            const buildSpan = this.newSpan(propertyName, flickObj[propertyName])
            newListElement.appendChild(buildSpan)
        })

        const deleteItemButton = this.addDeleteButton(flickObj);
        const favoriteButton = this.addFavoriteButton(flickObj);

        newListElement.appendChild(deleteItemButton)
        newListElement.appendChild(favoriteButton)
        
        return newListElement
    }

    submitChrisMovie(ev){        
        const f = ev.target

        const flickObj = {
            name: f.flickName.value,
            year: ` (${f.flickYear.value})`,
            favorite: false,
        }

        this.flickArray.push(flickObj.name)
        this.flickArray.push(flickObj.year)

        const listElement = this.renderItem(flickObj)

        console.log(this.list1)
        this.list1.appendChild(listElement)
        
        f.reset()
        f.flickName.focus()
    }
}

const app = new App()

console.log('It works!')