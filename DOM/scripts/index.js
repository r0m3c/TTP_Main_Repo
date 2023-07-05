let newElement = document.createElement("p");
console.log(newElement);
newElement.textContent = "I just created this";

document.body.appendChild(newElement);

// Example 2
const div = document.createElement("div");
div.classList.add("box");
console.log(div);
document.getElementById("container").appendChild(div);

// Example 5

function removeMultipleChildElements() {
    const container = document.getElementById("container4");
    const paragraphs = container.querySelectorAll("p");
    paragraphs.forEach(function(paragraph) {
        //remove all child elements inside of paragraphs
        container.removeChild(paragraph);
    })

}
removeMultipleChildElements();