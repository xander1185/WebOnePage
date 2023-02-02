//0
const imagenes = document.querySelectorAll(".img-galeria");
const imagenesLight = document.querySelector(".agregar-imagen");
const contenedorLight = document.querySelector(".imagen-light");
//4
const closeLight = document.querySelector(".close");

//1
imagenes.forEach((imagen) => {
  //recorre com forEach cada img dentro de imagenes, o sea dentro de img-galeria(html) y le pasamos un parametro que llamamos "imagen"
  imagen.addEventListener("click", () => {
    //dentro de ese parametro escuchamos el evento click
    aparecerImagen(imagen.getAttribute("src")); //creamos una función "aparecerImagen" y le ponemos como parametro lo que esta dentro de () para que encuentre el file de la tal img
  });
});

//3
contenedorLight.addEventListener("click", (e) => {
  //escuchamos el evento click sobre el contenedor del lightbox,supuestamente cuando esta abierto
  if (e.target !== imagenesLight) {
    //le decimos que si es diferente de la imagen (todas)
    contenedorLight.classList.toggle("show"); //entonces le aplicamos de nuevo con el method toggle las clases show y showImage para quitarlas
    imagenesLight.classList.toggle("showImage");
    hamburger.style.opacity = "1"; //4 - aplicamos sobre el hamburger un estilo, "opacity" en "1"cuando el lightbox esta abierto para que desaparezca/sea visible
  }
});

//2
const aparecerImagen = (imagen) => {
  imagenesLight.src = imagen;
  contenedorLight.classList.toggle("show");
  imagenesLight.classList.toggle("showImage");
  hamburger.style.opacity = "0"; //4 - aplicamos sobre el hamburger un estilo, "opacity" en "0"cuando el lightbox esta cerrado para que aparezca/sea visible
};
