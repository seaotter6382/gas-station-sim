export function createObject(posX, posY, height, width, color, id, zIndex) {
    let newObject = document.createElement("div");
    newObject.style.position = "absolute";
    newObject.style.left = posX + "px";
    newObject.style.top = posY + "px";
    newObject.style.width = width + "px";
    newObject.style.height = height + "px";
    newObject.id = id;
    newObject.style.backgroundColor = color;
    newObject.style.zIndex = zIndex;
    return newObject;
}