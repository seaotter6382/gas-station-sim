export let removeItem = false;

export function moveNPC(npcList, deltaTime) {
    npcList.forEach(npc => {
        if (document.getElementById(npc.id) === null) {
            document.body.appendChild(npc);
        }
        if (npc.moveLocation == "center") {
            if (parseFloat(npc.style.left) > window.innerWidth / 2 - 25) {
                npc.style.left = (parseFloat(npc.style.left) - deltaTime / 2 * npc.speed) + "px";
            }
            if (parseFloat(npc.style.top) > window.innerHeight / 2 - 25) {
                npc.style.top = (parseFloat(npc.style.top) - deltaTime / 2 * npc.speed) + "px";
            }
            if (parseFloat(npc.style.top) < window.innerHeight / 2 + 25) {
                npc.style.top = (parseFloat(npc.style.top) + deltaTime / 2 * npc.speed) + "px";
            }
            if (parseFloat(npc.style.left) < window.innerWidth / 2 + 25) {
                npc.style.left = (parseFloat(npc.style.left) + deltaTime / 2 * npc.speed) + "px";
            }
            if (parseFloat(npc.style.top) > window.innerHeight / 2 + 20 && parseFloat(npc.style.top) < window.innerHeight / 2 + 30) {
                npc.moveLocation = "fridge" + Math.floor(Math.random() * 3 + 1);
            }
        }
        if (npc.moveLocation == "fridge1") {
            let fridge1 = document.getElementById("fridge1");
            if (parseFloat(npc.style.left) > parseFloat(fridge1.style.left) + 100 + 25) {
                npc.style.left = (parseFloat(npc.style.left) - deltaTime / 2 * npc.speed) + "px";
            }
            if (parseFloat(npc.style.top) > parseFloat(fridge1.style.top) + 25) {
                npc.style.top = (parseFloat(npc.style.top) - deltaTime / 2 * npc.speed) + "px";
            }
            if (parseFloat(npc.style.top) < parseFloat(fridge1.style.top) - 25) {
                npc.style.top = (parseFloat(npc.style.top) + deltaTime / 2 * npc.speed) + "px";
            }
            if (parseFloat(npc.style.left) < parseFloat(fridge1.style.left) + 100 - 25) {
                npc.style.left = (parseFloat(npc.style.left) + deltaTime / 2 * npc.speed) + "px";
            }
            if (parseFloat(npc.style.left) < parseFloat(fridge1.style.left) + 150) {
                removeItem = true;
                setTimeout(() => {
                    npc.moveLocation = "door1Prox";
                }, 1000);
            }
        }
        if (npc.moveLocation == "fridge2") {
            let fridge2 = document.getElementById("fridge2");
            if (parseFloat(npc.style.left) > parseFloat(fridge2.style.left) + 100 + 25) {
                npc.style.left = (parseFloat(npc.style.left) - deltaTime / 2 * npc.speed) + "px";
            }
            if (parseFloat(npc.style.top) > parseFloat(fridge2.style.top) + 25) {
                npc.style.top = (parseFloat(npc.style.top) - deltaTime / 2 * npc.speed) + "px";
            }
            if (parseFloat(npc.style.top) < parseFloat(fridge2.style.top) - 25) {
                npc.style.top = (parseFloat(npc.style.top) + deltaTime / 2 * npc.speed) + "px";
            }
            if (parseFloat(npc.style.left) < parseFloat(fridge2.style.left) + 100 - 25) {
                npc.style.left = (parseFloat(npc.style.left) + deltaTime / 2 * npc.speed) + "px";
            }
            if (parseFloat(npc.style.left) < parseFloat(fridge2.style.left) + 150) {
                removeItem = true;
                setTimeout(() => {
                    npc.moveLocation = "door1Prox";
                }, 1000);
            }
        }
        if (npc.moveLocation == "fridge3") {
            let fridge3 = document.getElementById("fridge3");
            if (parseFloat(npc.style.left) > parseFloat(fridge3.style.left) + 100 + 25) {
                npc.style.left = (parseFloat(npc.style.left) - deltaTime / 2 * npc.speed) + "px";
            }
            if (parseFloat(npc.style.top) > parseFloat(fridge3.style.top) + 50 + 25) {
                npc.style.top = (parseFloat(npc.style.top) - deltaTime / 2 * npc.speed) + "px";
            }
            if (parseFloat(npc.style.top) < parseFloat(fridge3.style.top) + 50 - 25) {
                npc.style.top = (parseFloat(npc.style.top) + deltaTime / 2 * npc.speed) + "px";
            }
            if (parseFloat(npc.style.left) < parseFloat(fridge3.style.left) + 100 - 25) {
                npc.style.left = (parseFloat(npc.style.left) + deltaTime / 2 * npc.speed) + "px";
            }
            if (parseFloat(npc.style.left) < parseFloat(fridge3.style.left) + 150) {
                removeItem = true;
                setTimeout(() => {
                    npc.moveLocation = "door1Prox";
                }, 1000);
            }
        }
        if (npc.moveLocation == "door1Prox") {
            let door = document.getElementById("door1Prox");
            let door1 = document.getElementById("door1");
            let door2 = document.getElementById("door2");
            if (parseFloat(npc.style.left) > parseFloat(door.style.left) + 100 + 25 && !(parseFloat(npc.style.left) > parseFloat(door1.style.left) && parseFloat(npc.style.left) < parseFloat(door2.style.left))) {
                npc.style.left = (parseFloat(npc.style.left) - deltaTime / 2 * npc.speed) + "px";
            }
            if (parseFloat(npc.style.left) < parseFloat(door.style.left) + 100 - 25 && !(parseFloat(npc.style.left) > parseFloat(door1.style.left) && parseFloat(npc.style.left) < parseFloat(door2.style.left))) {
                npc.style.left = (parseFloat(npc.style.left) + deltaTime / 2 * npc.speed) + "px";
            }
            if (parseFloat(npc.style.left) > parseFloat(door1.style.left) && parseFloat(npc.style.left) < parseFloat(door2.style.left)) {
                npc.style.top = (parseFloat(npc.style.top) + deltaTime / 2 * npc.speed) + "px";
            }
            if (parseFloat(npc.style.top) > window.innerHeight) {
                npc.remove();
            }
        }
    });
}

export function getMinusItems() {
    let removeItem2 = removeItem;
    removeItem = false;
    return removeItem2;
}