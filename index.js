/*Este javascript crea una pagina la cual va a tener como finalidad encriptar y desencriptar texto que se de por parametor.

Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

esto debe de estar vinculado al archivo index.html, style.css y index.js
*/

let texto = document.getElementById("texto");
let resultado = document.getElementById("resultado");
let boton = document.getElementById("boton");

boton.addEventListener("click", () => {
  let textoEncriptado = encriptar(texto.value);
  resultado.innerHTML = textoEncriptado;
});

function encriptar(texto) {
  let textoEncriptado = texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  return textoEncriptado;
}
