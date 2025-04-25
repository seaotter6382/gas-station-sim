export let collide = [];

export function renderObjects() {
    collide.forEach(c => {
        if (!document.getElementById(c.id)) {
            if (c.destroy == true) {
                c.remove();
            } else {
                document.body.appendChild(c);
            }
        }
    });
}