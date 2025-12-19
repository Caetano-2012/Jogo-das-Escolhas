function escolha(opcao) {
    let titulo = document.getElementById("title");
    let imagem = document.getElementById("scene-img");
    let historia = document.getElementById("story");
    let botoes = document.querySelectorAll("choice");

    if(opcao === 'silencio') {
        titulo.innerText = "Missão Silenciosa";
        imagem.src = "página 2a.jpeg";
        historia.innerText = "Você decide realizar a missão silenciosamente, por isso leva um pequeno esquadrão formado por 4 integrantes. O local que deve ser infiltrado é uma base que armazena dados importantes sobre os Estados Unidos. Como você entrará nos perímetros do local?";
        botoes[0].innerText = "Pela porta da frente"
        botoes[0].setAttribute("onclick", "escolha('frente')");
        botoes[1].innerText = "Procurando uma entrada dos fundos";
        botoes[1].setAttribute = ("onclick", "escolha('fundos')");
    }
    else if(opcao === 'forcaBruta') {
        titulo.innerText = 'Missão "barulhenta"';
        imagem.src = "página 2b.jpeg";
        historia.innerText = "Você decide realizar a missão com força bruta, por isso leva uma grande quantidade de soldados e um grande arsenal. O local que deve ser infiltrado é uma base que armazena dados importantes sobre os Estados Unidos. Como você iniciará o ataque?";
        botoes[0].innerText = "Lançando bombas";
        botoes[0].setAttribute("onclick", "escolha('bombas')");
        botoes[1].innerText = "Enviando um grupo de soldados para o ataque";
        botoes[1].setAttribute("onclick", "escolha('soldados')");
    }
}