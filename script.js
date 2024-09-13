function sim() {
  const gato = document.getElementById("image-gato");
  gato.classList.remove("gato-hidden");
  setTimeout(() => {
    location.href = "https://music.youtube.com/watch?v=izGwDsrQ1eQ";
  }, 2 * 1000);
}

function desvia(btn) {
  btn.style.position = "absolute";
  btn.style.bottom = geraPosicao(10, 90);
  btn.style.left = geraPosicao(10, 90);
  console.log("opa, desviei...");
}

function geraPosicao(min, max) {
  return Math.random() * (max - min) + min + "%";
}
