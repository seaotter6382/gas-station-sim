export function removeItem(obj) {
  const keys = Object.keys(obj);
  const randomIndex = Math.floor(Math.random() * keys.length);
  let ammount = obj[Object.keys(obj)[randomIndex]]["ammount"];
  console.log(ammount);
  return keys[randomIndex];
}