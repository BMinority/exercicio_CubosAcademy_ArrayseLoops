function solucao(disparos) {
	//seu codigo aqui
    let qtdDisparos = 0;
    
    for (let i = 0; i < disparos.length; i++) {
        if (disparos[i] > 70){
            qtdDisparos++;
        }
    }
    
    if (qtdDisparos >= 3) {
        console.log(qtdDisparos);
    } else {
        console.log('ELIMINADO')
    }

}