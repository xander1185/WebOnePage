const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu-navegacion");

hamburger.addEventListener("click", () => {
  //llamo el evento click sobre hamburger
  menu.classList.toggle("spread"); //añado la class "spread" (esta en css) con el method toggle
});

window.addEventListener("click", (e) => {
  //a el objeto "window" le llamo un evento click
  if (
    menu.classList.contains("spread") && //entramos dentro de las clase de menu, en la clase "spread"
    e.target != menu && //y me dirijo diciendole que si es diferente de "menu" y
    e.target != hamburger //si es diferente de "hamburger"
  ) {
    menu.classList.toggle("spread"); // que haga lo siguiente, o sea en menu volver a poner la clase "spread" con toggle
  }
});
