export function createProx(posX, posY, key, id, action, size) {
    let newProx = document.createElement("div");
    newProx.style.position = "absolute";
    newProx.style.left = posX + "px";
    newProx.style.top = posY + "px";
    newProx.style.width = "150px";
    newProx.style.height = "75px";
    newProx.style.transition = "0.25s ease";
    if (id == null) {
        newProx.id = "newProx";
    } else {
        newProx.id = id;
    }
    newProx.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    newProx.style.zIndex = "5";
    newProx.style.display = "flex";
    newProx.style.alignItems = "center";
    newProx.style.justifyContent = "center";
    let newCircle = document.createElement("p");
    newCircle.textContent = key;
    newCircle.style.fontSize = "40px";
    newCircle.style.margin = "0px";
    newCircle.style.textAlign = "center";
    newCircle.style.lineHeight = "75px";
    newCircle.style.borderRadius = "50%";
    newCircle.style.backgroundColor = "white";
    newCircle.style.width = "50px";
    newCircle.style.height = "50px";
    newCircle.style.display = "flex";
    newCircle.style.alignItems = "center";
    newCircle.style.justifyContent = "center";
    newCircle.style.color = "black";
    newCircle.style.fontWeight = "bold";
    newCircle.style.textTransform = "uppercase";
    newCircle.style.position = "relative";
    newCircle.style.top = "10px";
    newProx.appendChild(newCircle);
    let miniCircle = document.createElement("div");
    miniCircle.style.width = "10px";
    miniCircle.style.height = "10px";
    miniCircle.style.borderRadius = "50%";
    miniCircle.style.backgroundColor = "rgb(210, 210, 210)";
    miniCircle.style.position = "absolute";
    miniCircle.style.top = "42.5px";
    miniCircle.style.zIndex = "10";
    miniCircle.style.transformOrigin = "center";
    miniCircle.style.transform = "scale(0)";
    miniCircle.id = "miniCircle";
    newProx.appendChild(miniCircle);
    let newText = document.createElement("p");
    newText.textContent = action;
    if (size == null) {
        newText.style.fontSize = "20px";
    } else {
        newText.style.fontSize = size + "px";
    }
    newText.style.margin = "0px";
    newText.style.textAlign = "center";
    newText.style.position = "absolute";
    newText.style.top = "0px";
    newText.style.color = "rgb(255, 255, 255)";
    newProx.appendChild(newText);
    newProx.classList.add("font");
    return newProx;
}