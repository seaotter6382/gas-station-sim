export async function getKeybinds() {
    const response = await fetch('./keybinds.json');
    const data = await response.json();
    return data;
}