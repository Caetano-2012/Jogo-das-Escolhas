function escolha(opcao) {
    let titulo = document.getElementById("title");
    let imagem = document.getElementById("scene-img");
    let historia = document.getElementById("story");
    let botoes = document.querySelectorAll(".choice");

    if(opcao === 'silencio') {
        titulo.innerText = "Missão Silenciosa";
        imagem.src = "página 2a.jpeg";
        historia.innerText = "Você decide realizar a missão silenciosamente, por isso leva um pequeno esquadrão formado por 4 integrantes. O local que deve ser infiltrado é uma base que armazena dados importantes sobre os Estados Unidos. Como você entrará nos perímetros do local?";
        botoes[0].innerText = "Pela porta da frente"
        botoes[0].setAttribute("onclick", "escolha('frente')");
        botoes[1].innerText = "Procurando uma entrada dos fundos";
        botoes[1].setAttribute("onclick", "escolha('fundos')");
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
    else if(opcao === 'frente') {
        titulo.innerText = "Pela porta da frente";
        imagem.src = "página 3Aa.jpeg";
        historia.innerText = "Você e seu esquadrão são notados pelos inimigos e acabam sendo neutralizados. Final ruim (nota: 5/10).";
        botoes.forEach(botao => botao.style.display = "none");
    }
    else if(opcao === 'fundos') {
        titulo.innerText = "Pelos fundos";
        imagem.src = "escolha 3Ab.jpeg";
        historia.innerText = "Você consegue se infiltrar com sucesso e a missão é finalizada sem a perda de soldados! Final bom (nota: 10/10).";
        botoes.forEach(botao => botao.style.display = "none");
    }
    else if(opcao === 'bombas') {
        titulo.innerText = "Que Explosão!"
        imagem.src = "página 3Ba.jpg";
        historia.innerText = "Você manda as bombas e a explosão dá certo, mas os dados que devem ser roubados são explodidos juntos. Final ruim (nota: 2.5/10).";
        botoes.forEach(botao => botao.style.display = "none");
    }
    else if(opcao === 'soldados') {
        titulo.innerText = "Trocação de balas";
        imagem.src = "escolha 3Bb.jpeg";
        historia.innerText = "Você e seu grande esquadrão obtém sucesso na missão, apesar da perda de vários soldados. Final bom (Nota: 7.5/10).";
        botoes.forEach(botoes => botoes.style.display = "none");
    }
}