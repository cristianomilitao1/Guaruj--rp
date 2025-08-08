// Menu responsivo
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Lista completa de produtos
const produtos = [
  // VIPs
  { id: 1, nome: "VIP Bronze", categoria: "vip", preco: 10 , imagem: "img/images/bronze.png" },
  { id: 2, nome: "VIP Prata", categoria: "vip", preco: 15, imagem: "img/images/prata.png" },
  { id: 3, nome: "VIP Ouro", categoria: "vip", preco: 20, imagem: "img/images/OURO.png" },
  { id: 4, nome: "VIP Diamante", categoria: "vip", preco: 35, imagem: "img/images/diamante.png" },
  { id: 5, nome: "VIP Rubi", categoria: "vip", preco: 40, imagem: "img/images/rubi.png" },
  { id: 6, nome: "VIP Esmeralda", categoria: "vip", preco: 50, imagem: "img/images/esmeralda.png" },

  // Carros (12)
  { id: 7, nome: "Mercedes Benz", categoria: "carro", preco: 100, imagem: "img/images/mercedes-benz.png" },
  { id: 8, nome: "durango", categoria: "carro", preco: 100, imagem: "img/images/Nova pasta/durango.png" },
  { id: 9, nome: "S10", categoria: "carro", preco: 100, imagem: "img/images/Nova pasta/S10.png" },
  { id: 10, nome: "Cybertruck", categoria: "carro", preco: 25, imagem: "img/images/Nova pasta/cyber.png" },
  { id: 11, nome: "sf90 Ferrari Stradale", categoria: "carro", preco: 25, imagem: "img/images/Nova pasta/sf90.png" },
  { id: 12, nome: "Velar", categoria: "carro", preco: 100, imagem: "img/images/Nova pasta/VELAR.png" },
  { id: 13, nome: "BMW X6 ", categoria: "carro", preco: 100, imagem: "img/images/Nova pasta/x6.png" },
  { id: 14, nome: "BMW X7", categoria: "carro", preco: 200, imagem: "img/images/Nova pasta/x7.png" },
  { id: 15, nome: "BMW M5", categoria: "carro", preco: 100, imagem: "img/images/m5.png" },
  { id: 16, nome: "BMW M6", categoria: "carro", preco: 100, imagem: "img/images/m6.png" },
  { id: 17, nome: "Lumma CLRF", categoria: "carro", preco: 100, imagem: "img/images/lumma.png" },
  { id: 18, nome: "Toyota 4runr", categoria: "carro", preco: 100, imagem: "img/images/4rune.png" },

  // Motos (5)
  { id: 19, nome: "CBR1000", categoria: "moto", preco: 25, imagem: "img/images/Nova pasta/1000rr.png" },
  { id: 20, nome: "Panigale ducati", categoria: "moto", preco: 25, imagem: "img/images/Nova pasta/ducati.png" },
  { id: 21, nome: "Deke KSD", categoria: "moto", preco: 25, imagem: "img/images/Nova pasta/duke.png" },
  { id: 22, nome: "Africa Twin", categoria: "moto", preco: 25, imagem: "img/images/africatwin.png" },
  { id: 23, nome: "CB650R", categoria: "moto", preco: 25, imagem: "img/images/cbr650.png" },
  { id: 24, nome: "R1200GS", categoria: "moto", preco: 25, imagem: "img/images/R1200GS.png" },

  // Baús de dinheiro
  { id: 24, nome: "Baú 500 mil", categoria: "bau", preco: 15, imagem: "img/images/500k.png" },
  { id: 25, nome: "Baú 1 milhão", categoria: "bau", preco: 25, imagem: "img/images/1kk.png" },
  { id: 26, nome: "Baú 5 milhões", categoria: "bau", preco: 50, imagem: "img/images/5kk.png" },
  { id: 27, nome: "Baú 10 milhões", categoria: "bau", preco: 100, imagem: "img/images/10kk.png" },

  // Kits
  { id: 28, nome: "Kit Assalto", categoria: "kit", preco: 15, imagem: "img/images/KIT assalto.png" },
  { id: 29, nome: "Kit Roupas", categoria: "kit", preco: 15, imagem: "img/images/item3.png" },
  { id: 30, nome: "Kit Mochila", categoria: "kit", preco: 15, imagem: "img/images/item5.png" },
  { id: 31, nome: "Kit Veículos", categoria: "kit", preco: 15, imagem: "img/images/item4.png" },
  { id: 32, nome: "Kit Comida", categoria: "kit", preco: 15, imagem: "img/images/item1.png" },

  // Combos
  { id: 33, nome: "Combo Armas Brancas", categoria: "combo", preco: 10, imagem: "img/images/armabranca.png" },
  { id: 34, nome: "Combo Armas Básicas", categoria: "combo", preco: 15, imagem: "img/images/armaleve.png" },
  { id: 35, nome: "Combo Armas Intermediárias", categoria: "combo", preco: 20, imagem: "img/images/armainter.png" },
  { id: 36, nome: "Combo Armas Avançadas", categoria: "combo", preco: 25, imagem: "img/images/armaavan.png" },

  // Outros
  { id: 37, nome: "Novo Chip de Celular", categoria: "outros", preco: 5, imagem: "img/images/chipnovo.png" },
  { id: 38, nome: "id Personalizado", categoria: "outros", preco: 50, imagem: "img/images/background.png" },
  { id: 39, nome: "Aplicativo Spotify", categoria: "outros", preco: 25, imagem: "img/images/spotify.png" },
  { id: 40, nome: "Verificador", categoria: "outros", preco: 25, imagem: "img/images/instaverificado.png" },
  { id: 41, nome: "Novo ID", categoria: "outros", preco: 50, imagem: "img/images/idnova.png" },
  { id: 42, nome: "Kit Facção", categoria: "outros", preco: 30, imagem: "img/images/novafac.png" },
  { id: 43, nome: "Novo Personagem", categoria: "outros", preco: 80, imagem: "img/images/novopersonagem.png" },
  { id: 44, nome: "Garagem", categoria: "outros", preco: 25, imagem: "img/images/valegaragem.png" },
  { id: 45, nome: "Mansão", categoria: "outros", preco: 100, imagem: "img/images/valemansao.png" }
];

const produtosContainer = document.getElementById('produtos');
const carrinho = [];

function renderizarProdutos(lista) {
  produtosContainer.innerHTML = '';
  lista.forEach(produto => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${produto.imagem}" alt="${produto.nome}" />
      <h2>${produto.nome}</h2>
      <p>R$ ${produto.preco.toLocaleString()}</p>
      <button onclick="adicionarCarrinho(${produto.id})">Adicionar ao carrinho</button>
    `;
    produtosContainer.appendChild(card);
  });
}

function filtrarCategoria() {
  const filtro = document.getElementById('filter').value;
  if (filtro === 'todos') {
    renderizarProdutos(produtos);
  } else {
    const filtrados = produtos.filter(p => p.categoria === filtro);
    renderizarProdutos(filtrados);
  }
}

function adicionarCarrinho(id) {
  const produto = produtos.find(p => p.id === id);
  carrinho.push(produto);
  atualizarCarrinho();
}

function removerCarrinho(index) {
  carrinho.splice(index, 1);
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const lista = document.getElementById('lista-carrinho');
  lista.innerHTML = '';
  let total = 0;
  carrinho.forEach((item, index) => {
    total += item.preco;
    const li = document.createElement('li');
    li.innerHTML = `
      ${item.nome} - R$ ${item.preco.toLocaleString()}
      <button onclick="removerCarrinho(${index})">Remover</button>
    `;
    lista.appendChild(li);
  });
  document.getElementById('total').textContent = `Total: R$ ${total.toLocaleString()}`;

  // Botão finalizar compra
  const finalizarBtn = document.createElement('button');
  finalizarBtn.textContent = 'Finalizar compra';
  finalizarBtn.onclick = () => {
   window.open('https://discord.gg/xbkvu8WK', '_blank');
   

  };
  lista.appendChild(finalizarBtn);
}

// Inicializa
renderizarProdutos(produtos);
