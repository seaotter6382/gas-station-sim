export async function getColors() {
    const response = await fetch('./config/colors.json');
    const data = await response.json();
    return data;
}