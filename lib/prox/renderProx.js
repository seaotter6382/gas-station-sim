export function renderProx(prox, pos, mainPlayer) {
    prox.forEach(p => {
        if (!document.getElementById(p.id)) {
            document.body.appendChild(p);
        } else {
            let proxCenterX = parseFloat(p.style.left) + parseFloat(p.style.width) / 2;
            let proxCenterY = parseFloat(p.style.top) + parseFloat(p.style.height) / 2;
            let playerCenterX = pos.x + parseFloat(mainPlayer.style.width) / 2;
            let playerCenterY = pos.y + parseFloat(mainPlayer.style.height) / 2;
            let distance = Math.sqrt(Math.pow(proxCenterX - playerCenterX, 2) + Math.pow(proxCenterY - playerCenterY, 2));
            if (distance > 200) {
                p.style.opacity = 0;
            } else {
                p.style.opacity = 1;
            }
        }
    });
}