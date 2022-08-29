let errorMessage=document.querySelector('#errorMessage') 
let form=document.querySelector('form')
let input=document.querySelector('input')
let addDiv=document.querySelector('#addDiv')
let addButton=document.querySelector('#addButton')

form.addEventListener('submit',e=>{
if(input.value==''){
    errorMessage.textContent='* Cannot add empty input *'
    input.placeholder=''
}
else{
    e.preventDefault()
    errorMessage.textContent=''
    let item=e.target[0].value
    console.log(item);
    let newItem=document.createElement('b')
    let textspan=document.createElement('span')
    newItem.appendChild(textspan)
    textspan.textContent=item
    console.log(newItem);

    addDiv.appendChild(newItem)
    let deletespan=document.createElement('span')
    let deleteButton=document.createElement('button')
    deleteButton.textContent='delete'
    newItem.appendChild(deletespan)
    deletespan.appendChild(deleteButton)

    deleteButton.addEventListener('click',e=>{
        e.preventDefault()
        deleteButton.parentElement.parentElement.remove()
    })

    let editspan=document.createElement('span')
    let editButton=document.createElement('button')
    editButton.textContent='edit'
    newItem.appendChild(editspan)
    editspan.appendChild(editButton)

    editButton.addEventListener('click',e=>{
    e.preventDefault()
    errorMessage.textContent=''
    addButton.style.display='none'
    input.value=item
    let updatespan=document.createElement('span')
    let updateButton=document.createElement('button')
    updateButton.textContent='update'
    editspan.remove()
    newItem.appendChild(updatespan)
    updatespan.appendChild(updateButton)
    updateButton.addEventListener('click',e=>{
        if(input.value==''){
            errorMessage.textContent='* Cannot update empty input *'
            input.placeholder=''
            input.value=item
        }
        else{
            e.preventDefault()
            errorMessage.textContent=''
            textspan.innerHTML=input.value
            updatespan.remove()
            newItem.appendChild(editspan)
            input.value=''
            addButton.style.display='block'
        }
    })
    })
input.value=''
}
})