


const produtos = [
  { nome: "Carro Esportivo", preco: 1000000, categoria: "carro", img: "https://via.placeholder.com/250x150?text=Carro" },
  { nome: "Casa Luxuosa", preco: 400000, categoria: "casa", img: "https://via.placeholder.com/250x150?text=Casa" },
  { nome: "Fusca Antigo", preco: 10000, categoria: "carro", img: "https://via.placeholder.com/250x150?text=Fusca" },
  { nome: "Casa Simples", preco: 20000, categoria: "casa", img: "https://via.placeholder.com/250x150?text=Casa+Simples" },
  { nome: "Pistola Glock", preco: 2000, categoria: "arma", img: "https://via.placeholder.com/250x150?text=Glock" },
];

function mostrarProdutos(filtrar = "todos") {
  const container = document.getElementById("produtos");
  container.innerHTML = "";

  const filtrados = filtrar === "todos" ? produtos : produtos.filter(p => p.categoria === filtrar);

  filtrados.forEach(prod => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${prod.img}" alt="${prod.nome}">
      <h2>${prod.nome}</h2>
      <p>R$ ${prod.preco.toLocaleString()}</p>
      <button onclick="comprar('${prod.nome}')">Comprar</button>
    `;
    container.appendChild(card);
  });
}

function comprar(produto) {
  alert(`Você perdeu: ${produto}`);
}

function filtrarCategoria() {
  const filtro = document.getElementById("filter").value;
  mostrarProdutos(filtro);
}

// Inicializar
mostrarProdutos();
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}