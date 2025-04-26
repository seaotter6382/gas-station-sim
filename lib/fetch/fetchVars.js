export async function getVars() {
    const response = await fetch('./config/variables.json');
    const data = await response.json();
    return data;
}