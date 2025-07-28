const setaEsquerda = document.getElementById("ancora1");
const setaDireita = document.getElementById("ancora2");
const mais = document.getElementById("ancora3");
const titulo = document.getElementById("tituloImagem");
const foto = document.body;

setaEsquerda.addEventListener("click", btn1);
setaDireita.addEventListener("click", btn2);

function btn1() {
    const imagem2 = foto.classList.contains("imagem2");
    const imagem3 = foto.classList.contains("imagem3");
    const imagem4 = foto.classList.contains("imagem4");

  if (imagem4) {
    foto.classList.remove("imagem4");
    foto.classList.add("imagem3");
    setaDireita.classList.remove("opacidade");
    mais.classList.remove("saibaMais4");
    mais.classList.add("saibaMais3");
    titulo.textContent = "Titulo imagem 3";
  } else if (imagem3) {
    foto.classList.remove("imagem3");
    foto.classList.add("imagem2");
    mais.classList.remove("saibaMais3");
    mais.classList.add("saibaMais2");
    titulo.textContent = "Titulo imagem 2";
  } else if (imagem2) {
    foto.classList.remove("imagem2");
    foto.classList.add("imagem1");
    setaEsquerda.classList.add("opacidade");
    mais.classList.remove("saibaMais2");
    mais.classList.add("saibaMais1");
    titulo.textContent = "Titulo imagem 1";
  }
}
function btn2() {
    const imagem1 = foto.classList.contains("imagem1");
    const imagem2 = foto.classList.contains("imagem2");
    const imagem3 = foto.classList.contains("imagem3");

  if (imagem1) {
    foto.classList.remove("imagem1");
    foto.classList.add("imagem2");
    setaEsquerda.classList.remove("opacidade");
    mais.classList.remove("saibaMais1");
    mais.classList.add("saibaMais2");
    titulo.textContent = "Titulo imagem 2";
  } else if (imagem2) {
    foto.classList.remove("imagem2");
    foto.classList.add("imagem3");
    mais.classList.remove("saibaMais2");
    mais.classList.add("saibaMais3");
    titulo.textContent = "Titulo imagem 3";
  } else if (imagem3) {
    foto.classList.remove("imagem3");
    foto.classList.add("imagem4");
    mais.classList.remove("saibaMais3");
    mais.classList.add("saibaMais4");
    setaDireita.classList.add("opacidade");
    titulo.textContent = "Titulo imagem 4";
  }
}


// const foto = document.body;

// setaDireita.addEventListener("click", mudarSena);

// function mudarSena(){
//     foto.classList.remove("imagem1");
//     foto.classList.add("imagem2");
// }

