class App{
    constructor(){
        //const flickArray = [];
        this.list = document.querySelector('#flickArray')

        const form1 = document.querySelector("form#Form1")
        form1.addEventListener ('submit', (ev)=>{
            ev.preventDefault()
            this.submitChrisMovie(ev)
            alert(flickArray)
        })
    }

    newSpan(name, value){
        const span = document.createElement('span')
        span.classList.add(name)
        span.textContent = value
        return span
    }   

    
    addDeleteButton(flickObj){
        const newDeleteButton = document.createElement('button')
        newDeleteButton.textContent = `Delete` //${flickObj.name[i]}
        newDeleteButton.type='submit'

        newDeleteButton.addEventListener('click', (_ev)=>this.deleteAMovie(flickObj))

        //newDeleteButton.addEventListener('onclick',this.deleteListItem(newListElement))
        return newDeleteButton
    }

    deleteAMovie(flickListItem){
        const itemToDelete = ev.target.closest('.flickObj')
        this.list.removeChild(itemToDelete)
        const i = this.flickArray.indexOf(flickObj)
        this.flickArray.splice(i,1)
    }

    renderItem(flickObj){
        const newListElement = document.createElement('li')
        newListElement.classList.add('flickObj')

        const properties = Object.keys(flickObj)
    
        properties.forEach((propertyName)=>{
            const buildSpan = this.newSpan(propertyName, flickObj[propertyName])
            newListElement.appendChild(buildSpan)//Append button to newListElement
        })

        const deleteyButtony = this.addDeleteButton(flickObj);
        //deleteyButtony.textContent = "I'm supposed to actually do something"
        //deleteyButtony.type='submit'
        //deleteyButtony.id=`dButton${i}`
        newListElement.appendChild(deleteyButtony)

        //newListElement.appendChild(this.addDeleteButton(newListElement))
        
        return newListElement
    }

    submitChrisMovie(ev){        
        const f = ev.target

        const flickObj = {
            name: f.flickName.value,
            year: ` (${f.flickYear.value})`,
        }

        flickArray.push(flickObj.name+flickObj.year);
        //flickArray.push(flickObj.year);

        const listElement = this.renderItem(flickObj)
        const list1 = document.querySelector('#flicksList')
        list1.appendChild(listElement)
        

        f.reset()
        //i++
    }

    /*
    deleteListItem(newListElement){
        const deleteThisItem = newListElement
        const fromList1 = document.querySelector('#flicksList')
        fromList1.removeChild(fromList1.childNodes(this.deleteListItem))
    }
    */
}

const flickArray = [];
//let i = 0;

const app = new App()

console.log('It works!')