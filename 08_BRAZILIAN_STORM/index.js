function solucao(notas) {
	//seu codigo aqui
    // Ordena as notas em ordem crescente
    notas.sort((a, b) => a - b);
    
    // Descarta a maior e a menor nota
    notas.pop();
    notas.shift();
    
    // Calcula a media das notas restantes
    const media = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;
    
    console.log(media);     
}