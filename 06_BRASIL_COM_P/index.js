function solucao(primeiraLetra, segundaLetra, palavras) {
	//seu codigo aqui
    let encontrouPalavra = false;

    for (let palavra of palavras) {
        if (palavra[0] === primeiraLetra && palavra[1] === segundaLetra) {
            console.log(palavra);
            encontrouPalavra = true;
        }
    }

    if (!encontrouPalavra) {
        console.log("NENHUMA");
    }
}