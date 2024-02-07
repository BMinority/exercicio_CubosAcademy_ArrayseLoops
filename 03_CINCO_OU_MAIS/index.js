function solucao(precos) {
    //seu codigo aqui
    let soma = 0;
    let menorPreco = precos[0];
    
    for (let preco of precos) {
        soma = soma + preco;
        
        if (preco < menorPreco) {
            menorPreco = preco;
        }
    }
    
    if (precos.length >= 5) {
        console.log(soma - menorPreco)
    } else {
        console.log(soma)
    }
    
}