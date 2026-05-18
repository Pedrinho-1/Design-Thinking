if (localStorage.getItem("usuarioLogado") !== "true") {
  window.location.href = "login.html";
}

const perguntasFaq = document.querySelectorAll(".faq-question");

perguntasFaq.forEach(pergunta => {
  pergunta.addEventListener("click", () => {
    const item = pergunta.parentElement;

    document.querySelectorAll(".faq-item").forEach(faq => {
      if (faq !== item) {
        faq.classList.remove("ativo");
      }
    });

    item.classList.toggle("ativo");
  });
});

const sairBtn = document.getElementById("sairBtn");

sairBtn.addEventListener("click", () => {
  localStorage.removeItem("usuarioLogado");
  localStorage.removeItem("perfilUsuario");
  window.location.href = "login.html";
});

const btnOferecer = document.getElementById("btnOferecer");
const btnBuscar = document.getElementById("btnBuscar");
const caronaBox = document.getElementById("caronaBox");

btnOferecer.addEventListener("click", () => {
  caronaBox.classList.add("ativo");

  caronaBox.innerHTML = `
    <h3>Oferecer carona</h3>
    <input type="text" placeholder="Ponto de saída">
    <input type="text" placeholder="Destino">
    <input type="time">
    <select>
      <option>Quantidade de vagas</option>
      <option>1 vaga</option>
      <option>2 vagas</option>
      <option>3 vagas</option>
      <option>4 vagas</option>
    </select>
    <button onclick="confirmarCarona('oferecida')">Publicar carona</button>
  `;
});

btnBuscar.addEventListener("click", () => {
  caronaBox.classList.add("ativo");

  caronaBox.innerHTML = `
    <h3>Buscar carona</h3>
    <input type="text" placeholder="Onde você está?">
    <input type="text" placeholder="Para onde deseja ir?">
    <input type="time">
    <select>
      <option>Preferência</option>
      <option>Carona mais próxima</option>
      <option>Menor custo</option>
      <option>Motorista melhor avaliado</option>
    </select>
    <button onclick="confirmarCarona('solicitada')">Solicitar carona</button>
  `;
});

function confirmarCarona(tipo) {
  if (tipo === "oferecida") {
    alert("Sua carona foi publicada com sucesso!");
  } else {
    alert("Sua solicitação de carona foi enviada!");
  }

  caronaBox.innerHTML = `
    <h3>Pronto!</h3>
    <p>Agora o RideAcad irá procurar a melhor combinação para você.</p>
  `;
}
