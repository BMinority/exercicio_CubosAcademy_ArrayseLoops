function solucao(sequencia) {
//seu codigo aqui
    let indice = 0;
    for (let item of sequencia) {
        if(item === '>') {
            indice++;
        } else {
            indice--;
        }

        if (indice < 0) {
            indice = 6;
        }
        if (indice > 6) {
            indice = 0;
        }
    }
    console.log(indice);
}