/* 
    ? Document Object Mdoel (DOM)
    * an object comprising the structures and context of an .html file 
    
    ? Basic Structure:
    * Document
        * HTML
            * Head
                * mute tags
                * link tags
                * Title tags
                * ... and all of its content (text, attribution, comments)
            * Body
                * Nav
                * Header
                * H1's, img's, divs, and so on...
                * .... and all their attributes and values
                */

//  ? Displays entire document object
console.log(document)
// console.log(document)

/* 
    ? Window vs Document Vs Navigator Vs History Objects
        * document -> outlines the file rendered
        * window -> handles browser specific functions
        * navigator -> handles language and geolocation
        * history -> handles browser session history
     */

    console.log(navigator.language)
    console.log(history.state)
    console.log(window.fullScreen)

    //  ? Creating our first element using DOM

    // * 1, use .createElement method on a document object & pass your element argument of choice
    let h1 = document.createElement("h1")
    console.log(h1)

    // * 2, modify .textContent property to change rendered text value
    h1.textContent = "Document Object Model Lesson"

    // * 3, append the element we created and modified (child) to its parent element
document.body.appendChild(h1)


/* 
? Accessing elements using DOM
    * Elements can be accessed several different ways. Most common are:
    * getElementById()
    * getElementsByClassName() [HTML Collection]
    * getElemnetsByTagName()   [HTML Collection]
    * querySelector()
    * querySelectorAkk()       [NodeList]*/

/* 
    * getElementById()
    * return the first instance of an id element
    */

const ulToDo = document.getElementById("ulToDo")
console.log(ulToDo)

/* 
    * getElementsByClassName()
    * returns an HTML COLLECTION of class instances
    * array-like object (cannot use array methods)
    * allows access to index, length, etc
    * can be looped through
    */

const listItem = document.getElementsByClassName("listItem")
console.log(listItem)

// Accessing an instance of class list
listItem[0].style.color = "blue"

for (i of listItem) {
    i.style.color = "blue"
}

/* 
    ? .getElementsByTagName()
        * just like above but for elements
     */

    const allLargeHeaders = document.getElementsByTagName("h1")
    console.log(allLargeHeaders)

    for (i of allLargeHeaders) {
        i.style.color = "#4287f5"
    }

    /* 
        ? .querySelector()
        * return the first instance of an element
        * access using tag name, id, and class names
        * MUST SPECIFY whether its a tag, class, or ID
        * ex: "nav" for element; ".nav" for class; "#nav" for Id */

        const listItemsByQuerySelector = document.querySelector("listItem")
        console.log(listItemsByQuerySelector) // ! Returns first instance ONLY

        /* 
            ? .querySelectorAll()
            * returns a Nodelist of all instances of a class, id, or element(s)
            * allows the use of array methods to iterate over
            */

            const listItemsByQuerySelectorAll = document.querySelectorAll(".listItem")
            console.log(listItemsByQuerySelectorAll)

            /* 
                ! Challenge
                    * Create an instance of a listItem that renders "clean bedroom"
                    * Change its color to blue
                    * Append to the bottom of our list */

                // My solution
                listItem[0].style.color = "red"
                console.log(listItem[0])

// already created a ulToDo var
    // Class solution
    const li = document.createElement("li")
    li.textContent = "Clean bathroom"  //you need to access the text content
    li.className = "listItem"
    ulToDo.appendChild(li)

    // console.log("--------------------")
/* 
    ? HTMLCollection cs NodeList
    * HTMLCollection returns a list that is live

    *NodeList returns a static list of elements even after their lookup
    *NodeLists DO NOT show newly created elements
    */

    const htmlCollection = document.getElementsByClassName("listItem")
    const nodeList = document.querySelectorAll(".listItem")
    console.log(htmlCollection, htmlCollection, "NodeList", nodeList)
    console.log(nodeList)

    const testItem = docuement.createElement("Li")
    textItem.textContent = "Test item"
    testItem.className = "ListItem"
    ulToDo.appendChild(testItem)

    // ? Last element isn't red because Nodelist is STATIC
    // for (i of nodeList) {
        // i.style.color = "red"}

        // ? ALL elements are red because htmlCollection is live
        for (i of htmlCollection) {
            i.style.color = "red"
        }

        