let minusMoney = 0;

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
        ammountText.textContent = currentItems[key]['sellPrice'] + "$";
        ammountText.className = "computerChild font";
        ammountText.style.textAlign = "right";
        ammountText.style.display = "inline-block";
        ammountText.style.position = "relative";
        ammountText.style.float = "right";
        let buyButton = document.createElement("button");
        buyButton.textContent = "Buy 1 for " + currentItems[key]['buyPrice'] + "$";
        buyButton.className = "computerChild font";
        buyButton.style.textAlign = "right";
        buyButton.style.display = "inline-block";
        buyButton.style.position = "absolute";
        buyButton.style.right = "100px";
        buyButton.style.color = "black";
        buyButton.addEventListener("click", (event) => {
            if (currentItems[key]['ammount'] > 0) {
                minusMoney = currentItems[key]['buyPrice'];
                currentItems[key]['ammount'] += 1;
                console.log("tehe");
            }
        });
        document.querySelector("#computerItem").appendChild(newText);
        document.querySelector("#computerItem").appendChild(buyButton);
        document.querySelector("#computerItem").appendChild(ammountText);
        document.querySelector("#computerItem").appendChild(document.createElement("br"));
    }
}

export function getMoney() {
    let minusMoney2 = minusMoney;
    minusMoney = 0;
    return minusMoney2;
}