let form=document.querySelector('form')
let addDiv=document.querySelector('div')
let input=document.querySelector('input')

form.addEventListener('submit',e=>{
    e.preventDefault()
    let item=e.target[0].value
    console.log(item);
    let newItem=document.createElement('b')
    newItem.textContent=item
    console.log(newItem);

    addDiv.appendChild(newItem)
    let deletespan=document.createElement('span')
    let deleteButton=document.createElement('button')
    deleteButton.textContent='delete'
    newItem.appendChild(deletespan)
    deletespan.appendChild(deleteButton)

    deleteButton.addEventListener('click',e=>{
        deleteButton.parentElement.parentElement.remove()
    })
    let editspan=document.createElement('span')
    let editButton=document.createElement('button')
    editButton.textContent='edit'
    newItem.appendChild(editspan)
    editspan.appendChild(editButton)

    editButton.addEventListener('click',e=>{
        e.preventDefault()
        input.value=item
        let updatespan=document.createElement('span')
        let updateButton=document.createElement('button')
        updateButton.textContent='update'
        editButton.remove()
        newItem.appendChild(updatespan)
        updatespan.appendChild(updateButton)
        updateButton.addEventListener('click',e=>{
            newItem.innerHTML=input.value
            updateButton.remove()
            newItem.appendChild(deletespan)
            newItem.appendChild(editspan)
            editspan.appendChild(editButton)
        })
    })
})