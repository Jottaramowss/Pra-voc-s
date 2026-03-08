function criarPetala() {
    const petala = document.createElement("div");
    petala.classList.add("petal");

    // Posição horizontal aleatória (0 a 100% da largura da tela)
    petala.style.left = Math.random() * 100 + "vw";

    // Variação de tamanho para efeito de profundidade (entre 15px e 35px)
    const tamanho = (Math.random() * 20 + 15) + "px";
    petala.style.width = tamanho;
    petala.style.height = tamanho;

    // Velocidade de queda aleatória (entre 6 e 12 segundos)
    const duracao = (Math.random() * 6 + 6);
    petala.style.animationDuration = duracao + "s";

    // Delay aleatório para não começarem todas juntas no topo
    petala.style.animationDelay = Math.random() * 5 + "s";

    // Opacidade variada para um visual mais natural
    petala.style.opacity = Math.random() * 0.5 + 0.5;

    document.body.appendChild(petala);

    // Remove a pétala do HTML assim que a animação termina (limpeza de memória)
    setTimeout(() => {
        petala.remove();
    }, duracao * 1000);
}

// Cria uma chuva inicial de 20 pétalas
for (let i = 0; i < 20; i++) {
    criarPetala();
}

// Mantém o jardim florescendo: cria uma nova pétala a cada 400ms
setInterval(criarPetala, 400);