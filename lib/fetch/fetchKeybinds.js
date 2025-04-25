export async function getKeybinds() {
    const response = await fetch('./config/keybinds.json');
    const data = await response.json();
    return data;
}