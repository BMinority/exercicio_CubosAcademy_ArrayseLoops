function solucao(resultados) {
	//seu codigo aqui
    let pontuacao = 0;
    
    for (let i = 0; i < resultados.length; i++) {
        const resultado = resultados[i];
        
        if (resultado === 'V') {
            pontuacao += 3;
        } else if (resultado === 'E') {
            pontuacao += 1;
        }        
    }
    
    console.log(pontuacao);

}