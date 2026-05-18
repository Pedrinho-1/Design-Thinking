const perfilBtns = document.querySelectorAll(".perfil-btn");
const perfilTexto = document.getElementById("perfilTexto");

const loginForm = document.getElementById("loginForm");
const formCadastro = document.getElementById("formCadastro");

const abrirCadastro = document.getElementById("abrirCadastro");
const voltarLogin = document.getElementById("voltarLogin");

const mostrarSenha = document.getElementById("mostrarSenha");
const senhaInput = document.getElementById("senha");

let perfilSelecionado = "aluno";

perfilBtns.forEach((botao) => {
  botao.addEventListener("click", () => {
    perfilBtns.forEach((btn) => btn.classList.remove("ativo"));

    botao.classList.add("ativo");
    perfilSelecionado = botao.dataset.perfil;

    perfilTexto.textContent =
      perfilSelecionado === "aluno" ? "Aluno" : "Motorista";
  });
});

mostrarSenha.addEventListener("click", () => {
  if (senhaInput.type === "password") {
    senhaInput.type = "text";
    mostrarSenha.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
  } else {
    senhaInput.type = "password";
    mostrarSenha.innerHTML = '<i class="fa-solid fa-eye"></i>';
  }
});

abrirCadastro.addEventListener("click", (e) => {
  e.preventDefault();

  loginForm.classList.add("oculto");
  formCadastro.classList.remove("oculto");
});

voltarLogin.addEventListener("click", (e) => {
  e.preventDefault();

  formCadastro.classList.add("oculto");
  loginForm.classList.remove("oculto");
});

formCadastro.addEventListener("submit", (e) => {
  e.preventDefault();

  const nomeCadastro = document.getElementById("nomeCadastro").value.trim();
  const emailCadastro = document.getElementById("emailCadastro").value.trim();
  const senhaCadastro = document.getElementById("senhaCadastro").value.trim();

  if (nomeCadastro === "" || emailCadastro === "" || senhaCadastro === "") {
    alert("Preencha todos os campos do cadastro.");
    return;
  }

  localStorage.setItem("nomeUsuario", nomeCadastro);
  localStorage.setItem("emailUsuario", emailCadastro);
  localStorage.setItem("senhaUsuario", senhaCadastro);

  alert("Cadastro realizado com sucesso!");

  formCadastro.classList.add("oculto");
  loginForm.classList.remove("oculto");
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const senha = senhaInput.value.trim();

  const emailSalvo = localStorage.getItem("emailUsuario");
  const senhaSalva = localStorage.getItem("senhaUsuario");

  if (email === "" || senha === "") {
    alert("Preencha todos os campos.");
    return;
  }

  if (email !== emailSalvo || senha !== senhaSalva) {
    alert("E-mail ou senha incorretos. Cadastre-se primeiro.");
    return;
  }

  localStorage.setItem("usuarioLogado", "true");
  localStorage.setItem("perfilUsuario", perfilSelecionado);

  window.location.href = "index.html";
});
