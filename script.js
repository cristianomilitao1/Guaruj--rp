document.addEventListener("DOMContentLoaded", () => {
  // Menu hambúrguer
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Ação do botão Enviar -> abrir Discord
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Impede envio normal do formulário

    // Link do Discord
alert("Você será direcionado para o nosso Discord!");

    // Abre o Discord em nova aba
    window.open("https://discord.gg/JRAa3yCg", "_blank");

    // Caso queira também um alerta
    
  });
});
