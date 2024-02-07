function solucao(palpite, palavra) {
	// seu codigo aqui
    //iniciar com acertos zerados
    let acertos = 0;
    
    //iterar sobre a palavra e verificar se o palpite estah incluso
    for (let i = 0; i < palavra.length; i++) {
        if (palavra[i] === palpite) {
            acertos++;
        }
    }
    
    console.log(acertos);
}