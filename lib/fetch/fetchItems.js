export async function getItems() {
    const response = await fetch('./config/startItems.json');
    const data = await response.json();
    return data;
}