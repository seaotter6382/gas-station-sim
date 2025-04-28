export function createNPC(x, y, id) {
    let newNPC = document.createElement("div");
    newNPC.classList.add("npc");
    newNPC.style.position = "absolute";
    newNPC.style.left = x + "px";
    newNPC.style.top = y + "px";
    newNPC.style.width = "50px";
    newNPC.style.height = "50px";
    newNPC.style.backgroundColor = "yellow";
    newNPC.id = id;
    newNPC.moveLocation = "center"; 
    newNPC.style.transition = "0.1s ease";
    return newNPC;
}