function solucao(letra, palavras) {
	//seu codigo aqui
    let erro = 0;
    
    for (let palavra of palavras) {
        const primeiraLetra = palavra[0];
        
        if (primeiraLetra !== letra) {
            erro++;
        }
    }
    console.log(erro);
    
}