// 1. Anima o gato principal
gsap.to("#img", {
    rotation: 360,
    ease: "none",
    repeat: -1,
    duration: 10
});

// 2. Cria e espalha vários GIFs pela tela
const numGifs = 40; // Quantidade de gatos que vão aparecer no fundo (mude se quiser mais ou menos)
const body = document.body;

for (let i = 0; i < numGifs; i++) {
    const gif = document.createElement("img");
    gif.src = "img/gato 2.gif";
    gif.classList.add("background-gif"); // Puxa o estilo lá do CSS
    
    // Posiciona aleatoriamente na tela (vw = largura, vh = altura)
    gif.style.top = Math.random() * 100 + "vh";
    gif.style.left = Math.random() * 100 + "vw";
    
    body.appendChild(gif);

    // Animação individual para cada gato de fundo
    gsap.to(gif, {
        rotation: 360,
        ease: "none",
        repeat: -1,
        duration: 8 + Math.random() * 4, // Girando em velocidades levemente diferentes
        delay: Math.random() * 5 // Começam a girar em momentos diferentes
    });
}