class App{
    constructor(){
        const form1 = document.querySelector("form#Form1")
        form1.addEventListener ('submit', (ev)=>{
            ev.preventDefault()
            this.submitChrisMovie(ev)
        })
    }

    newSpan(name, value){
        const span = document.createElement('span')
        switch(name){
            case 'name':
            span.classList.add('movieNameStyle')
                break
            case 'year':
            span.classList.add('movieYearStyle')
                break
            default:
            span.classList.add(name)
        }
        span.textContent = value
        return span
    }   

    renderItem(flickObj){
        const newListElement = document.createElement('li')
        newListElement.classList.add('flickObj')

        const properties = Object.keys(flickObj)
    
        properties.forEach((propertyName)=>{
            const buildSpan = this.newSpan(propertyName, flickObj[propertyName])
            newListElement.appendChild(buildSpan) //ERROR HERE
        })
        return newListElement
    }

    submitChrisMovie(ev){        
        const f = ev.target

        const flickObj = {
            name: f.flickName.value,
            year: ` (${f.flickYear.value})`,
        }

        const listElement = this.renderItem(flickObj)
        const list1 = document.querySelector('#flicksList')
        list1.appendChild(listElement)

        f.reset()
    }
}

const app = new App()

console.log('It works!')