export function moveNPC(npcList, deltaTime) {
    npcList.forEach(npc => {
        if (document.getElementById(npc.id) === null) {
            document.body.appendChild(npc);
        }
        if (parseFloat(npc.style.top) > 100 && npc.moveUp == "true") {
            npc.style.top = (parseFloat(npc.style.top) - deltaTime / 2) + "px";
        }
        if (parseFloat(npc.style.top) < 100) {
            npc.moveUp = "false";
            npc.moveDown = "true";
        }
        if (parseFloat(npc.style.top) < window.innerHeight && npc.moveDown == "true") {
            npc.style.top = (parseFloat(npc.style.top) + deltaTime / 2) + "px";
        }
        if (parseFloat(npc.style.top) > window.innerHeight) {
            npc.remove();
        }
    });
}