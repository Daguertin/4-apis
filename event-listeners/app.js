console.log("test")

/* 
    ? Event Listeners
    * allow us to execute a callback fx when an event occurs
    * .addEventListener() takes an event and fires a callback
    * event - a string of what happens
    * callback = fx that is triggered once the event occurs
    */

    const listInput = document.getElementById("listInput")
    
    /* 
        * 1. Event Listener Listens for a key up event
        * 2. We collect it within the event argument
        * 3. We access the target property of the element on which the event listener was placed
        * 4. We console.log it's .value property */

    // listInput.addEventListener("keydown", event => {
    //     console.log(event.target.value) 
    // })

    // TODO: access the list
    // TODO: access the input AND the button (input for value btn for clicking)
    // TODO: when the button is clicked
    // TODO: create a new element
    // TODO: update the textContent of the new element to come from the value of the input
    // TODO: append the new element to the list

const btn = document.getElementById("submit")
const ulToDo = document.getElementById("ulToDo")
const butn = document.getElementById("remove")

btn.addEventListener("click", event => {
    // 1. Access .vaule of listInput when this button is clicked
    // Instead you can use target property of the event object and peruse around
    console.log(listInput.value)
    console.log(event.target.previousElementSibling.value)
    console.log(event)
    // 2. Create a list item element
    const li = document.createElement("li")
    // 3. Append the value of listInput to li's textContent property
    li.textContent = event.target.previousElementSibling.value
    // 4. Appends newly created element to the parent
    ulToDo.appendChild(li)
    event.target.previousElementSibling.value =  "" //this resets the value of the input box to nothing
})

/* 
    ! Spicey Challenge 
    * We can add items BUT
    * Create Remove Item button. Once it's clicked, it will remove the last item in our TODO list
    */

    const remove = document.getElementById("remove")
    const listItems = document.getElementsByClassName("listItem")
    
    remove.addEventListener("click", event => {
        // if (listItems.length <= 0) {
        //     const h4 = document.createElement("h4")
        //     h4.textContent = "Try adding something, Holla!"
        //     ulToDo.appendChild(h4)
        // } else {
        //     ulToDo.removeChild(listItems[listItems.length - 1])
        // }
    
        // When they misbehave, just take the button :)
        if (listItems.length <= 0) {
            remove.style.display = "none"
        } else {
            ulToDo.removeChild(listItems[listItems.length - 1])
        }
    })