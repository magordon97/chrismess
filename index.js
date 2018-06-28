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

    deleteAMovie(ev, flickObj){
        const itemToDelete = ev.target.closest('.flickObj')

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
            newListElement.appendChild(buildSpan)//Append button to newListElement
        })

        const deleteItemButton = this.addDeleteButton(flickObj);

        newListElement.appendChild(deleteItemButton)
        
        return newListElement
    }

    submitChrisMovie(ev){        
        const f = ev.target

        const flickObj = {
            name: f.flickName.value,
            year: ` (${f.flickYear.value})`,
        }

        this.flickArray.push(flickObj.name)
        this.flickArray.push(flickObj.year)

        const listElement = this.renderItem(flickObj)

        console.log(this.list1)
        this.list1.appendChild(listElement)
        
        f.reset()
    }
}

const app = new App()

console.log('It works!')