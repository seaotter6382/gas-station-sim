export function plusCash(money) {
    let basePosition = document.getElementById("moneyUI");
    let newCashText = document.createElement("p");
    newCashText.textContent = "+" + Math.round(money) + "$";
    newCashText.className = "font";
    newCashText.style.position = "absolute";
    newCashText.style.top = "-15px";
    newCashText.style.opacity = "1";
    newCashText.animate(
        [
            { transform: "translateY(0)", opacity: "1" },
            { transform: "translateY(-50px)", opacity: "0" }
        ],
        { duration: 2000, easing: "ease" }
    );
    newCashText.style.transition = "2s ease";
    newCashText.style.color = "green";
    newCashText.style.fontSize = "25px";

    basePosition.appendChild(newCashText);
    setTimeout(() => {
        newCashText.remove();
    }, 2000);
}