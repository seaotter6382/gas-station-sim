export function createList(currentItems) {
    document.querySelector("#computerItem").innerHTML = '';
    document.querySelector("#computerItem").style.height = "95%";
    document.querySelector("#computerItem").appendChild(document.createElement("br"))
    for (let key in currentItems) {
        let newText = document.createElement("p");
        newText.textContent = currentItems[key]['name'] + " (" + currentItems[key]['ammount'] + ")";
        newText.className = "computerChild font";
        newText.style.textAlign = "left";
        newText.style.display = "inline-block";
        let ammountText = document.createElement("p");
        ammountText.textContent = currentItems[key]['price'] + " $";
        ammountText.className = "computerChild font";
        ammountText.style.textAlign = "right";
        ammountText.style.display = "inline-block";
        ammountText.style.position = "relative";
        ammountText.style.float = "right";
        document.querySelector("#computerItem").appendChild(newText);
        document.querySelector("#computerItem").appendChild(ammountText);
        document.querySelector("#computerItem").appendChild(document.createElement("br"));
    }
}