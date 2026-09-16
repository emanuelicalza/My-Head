// 1. Animação do gato principal
gsap.to("#img", {
    rotation: 360,
    ease: "none",
    repeat: -1,
    duration: 10
});

// 2. Lógica dos Emojis mudando de cara
const emojis = ['🐱', '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾'];
const fundoContainerEmojis = document.getElementById('fundo-emojis');
const quantidadeEmojis = 50; 
const elementosEmoji = []; 

for (let i = 0; i < quantidadeEmojis; i++) {
    const span = document.createElement('span');
    span.classList.add('emoji-gato');
    span.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    span.style.top = Math.random() * 100 + "vh";
    span.style.left = Math.random() * 100 + "vw";
    
    fundoContainerEmojis.appendChild(span);
    elementosEmoji.push(span); 
}

// Muda a cara dos emojis a cada 200ms
setInterval(() => {
    elementosEmoji.forEach(span => {
        span.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    });
}, 200);

// 3. Lógica dos vários GIFs girando no fundo
const fundoContainerGifs = document.getElementById('fundo-gifs');
const numGifs = 40; // Quantidade de GIFs na tela

for (let i = 0; i < numGifs; i++) {
    const gif = document.createElement("img");
    gif.src = "img/gato 2.gif";
    gif.classList.add("background-gif");
    
    gif.style.top = Math.random() * 100 + "vh";
    gif.style.left = Math.random() * 100 + "vw";
    
    fundoContainerGifs.appendChild(gif);

    // GSAP para girar os GIFs do fundo
    gsap.to(gif, {
        rotation: 360,
        ease: "none",
        repeat: -1,
        duration: 8 + Math.random() * 4, // Velocidades diferentes
        delay: Math.random() * 5
    });
}