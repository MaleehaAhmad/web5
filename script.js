
  const text = document.querySelector(".text p");
text.innerHTML = text.innerText.split("").map(
    (char, i) =>
    `<span style="transform:rotate(${i * 10.5}deg )">  ${char} </span>`
).join("");


const ctext = document.querySelector(".ctext p");
ctext.innerHTML = ctext.innerText.split("").map(
    (char, i) =>
    `<span style="transform:rotate(${i * 9.5}deg )">  ${char} </span>`
).join("");

   
