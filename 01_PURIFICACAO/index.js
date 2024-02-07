function solucao(stringCorrompida) {
	// seu codigo aqui
    let dadoPurificado = '';
    const caracteresEspeciais = ['!', '@', '#', '$', '%', '&', '*', '(', ')'];
    for (let caractere of stringCorrompida) {
        if (!caracteresEspeciais.includes(caractere)) {
            dadoPurificado += caractere;
        }
    }
    console.log(dadoPurificado);
}