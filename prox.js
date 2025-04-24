export function createProx(posX, posY, visable, key) {
    let newProx = document.createElement("div");
    newProx.style.position = "absolute";
    newProx.style.left = posX;
    newProx.style.top = posY;
    newProx.style.width = "150px";
    newProx.style.height = "75px";
    newProx.id = "newProx";
    newProx.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    newProx.style.zIndex = "5";
    newProx.style.visibility = visable ? "visible" : "hidden";
    return newProx
}