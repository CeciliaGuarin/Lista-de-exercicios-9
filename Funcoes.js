function Exer_1(){
    let vetor = []
    let impares = []
    let pares = []
    
    for(let i=0;i<6;i++){
        vetor[i] = Number(prompt(`Informe o número ${i+1}`))
    }
    
    for(let i=0;i<6;i++){
        if (vetor[i] % 2 == 0) {   
            pares.push(vetor[i])            
        }
        else {
            impares.push(vetor[i])       
        }
    }
    console.log(`Elementos pares ${pares} e quantidade ${pares.length}`)
    console.log(`Elementos ímpares ${impares} e quantidade ${impares.length}`)
    alert(`Elementos pares ${pares} e quantidade ${pares.length}`)
    alert(`Elementos ímpares ${impares} e quantidade ${impares.length}`)
}

function Exer_2(){
    let vetor = []
    let m2 = []
    let m3 = []
    let m23 = []
   
   for(let i=0;i<7;i++){
       vetor[i] = Number(prompt(`Informe o número ${i+1}`))
   }
    
   for(let i=0;i<7;i++){
       if (vetor[i] % 2 == 0) {
           m2.push(vetor[i])            
       }
       if (vetor[i] % 3 == 0) {
           m3.push(vetor[i])       
       }
       if ((vetor[i] % 2 == 0) && (vetor[i] % 3 == 0)) {
           m23.push(vetor[i])       
       }
   }
   console.log(`Elementos múltiplos de 2: ${m2} e quantidade ${m2.length}`)
   console.log(`Elementos múltiplo de 3: ${m3} e quantidade ${m3.length}`)
   console.log(`Elementos múltiplo de 2 e 3: ${m23} e quantidade ${m23.length}`)
   alert(`Elementos múltiplos de 2: ${m2} e quantidade ${m2.length}`)
   alert(`Elementos múltiplo de 3: ${m3} e quantidade ${m3.length}`)
   alert(`Elementos múltiplo de 2 e 3: ${m23} e quantidade ${m23.length}`)
}

function Exer_3(){
    let vetor = [] 
    
    for(let i=0;i<4;i++){
        let objeto = {
            codigo: Number(prompt(`Informe o código do produto ${i+1}`)),
            estoque: Number(prompt(`Informe o estoque do produto ${i+1}`))
        }
        vetor[i] = objeto
    }

    let cliente = Number(prompt(`Informe o código do cliente`))
    do {
        let codigoCompra = Number(prompt(`Informe o código do produto para compra`))
       
        let achou = false 
        for(let i=0;i<4;i++){
            if (codigoCompra == vetor[i].codigo){ 
                achou = true
               
                let qtdeCompra = Number(prompt(`Informe a qtde da compra`))
                if (vetor[i].estoque - qtdeCompra >= 0){ 
                    vetor[i].estoque = vetor[i].estoque - qtdeCompra
                }
                else {
                    alert(`Qtde em estoque é insuficiente`)
                }
            }
        }
        if (!achou){ 
            alert(`Produto não comprado para venda`)
        }

        cliente = Number(prompt(`Informe o novo código do cliente. Digite 0 para encerrar`))
    }
    while(cliente != 0)
    for(let i=0;i<4;i++){
        alert(` Código do produto ${vetor[i].codigo} e tem estoque ${vetor[i].estoque}`)
    }
}

function Exer_4(){
    let vetor = new Array(15) 
    let vetorR = []

    for(let i=0;i<15;i++){
        vetor[i] = Number(prompt(`Informe o valor do elemento ${i+1}`))
    }
    
    for(let i=0;i<15;i++){
        if (vetor[i] == 30){
            vetorR.push(i) 
        }
    }
    alert(`As posições contendo elementos igual a 30 é ${vetorR}`)
}

function Exer_5(){
    let vetLogica = new Array(15)
    let vetLp = new Array(10)
    let interseccao = []

    for(let i=0;i<15;i++){
        vetLogica[i] = Number(prompt(`Informe código de matrícula do aluno que faz Lógica`))
    }
     
     for(let i=0;i<10;i++){
        vetLp[i] = Number(prompt(`Informe código de matrícula do aluno que faz Linguagem de Programação`))
    }

    for(let i=0;i<15;i++){ 
        for(let j=0;j<10;j++){
            if (vetLogica[i] == vetLp[j]){
                interseccao.push(vetLogica[i])
            }
        } 
    }
    alert(`Alunos que fazem ambas as disciplinas ${interseccao}`)
}

function Exer_6(){
    let vetor = new Array(5) 
    for(let i=0;i<5;i++){
        let objeto = {
            nome: prompt(`Informe o nome do vendedor ${i+1}`),
            vendas: Number(prompt(`Informe o total de vendas do vendedor ${i+1}`)),
            comissao: Number(prompt(`Informe o % de comissão do vendedor ${i+1}`))
        }
        vetor[i] = objeto
    }
    let totalVendas = 0
    let maior = 0
    let nomeMaior = ""
    let menor = 100000
    let nomeMenor = ""
    for(let i=0;i<5;i++){
        let receber = (vetor[i].vendas * vetor[i].comissao) / 100 
        if (receber > maior){
            maior = receber 
            nomeMaior = vetor[i].nome
        }
        if (receber < menor){
            menor = receber 
            nomeMenor = vetor[i].nome
        }
        alert(`O vendedor ${vetor[i].nome} vai receber ${receber}`) 
        totalVendas = totalVendas + vetor[i].vendas 
    }
    alert(`O total de vendas foi de ${totalVendas}`)
    alert(`O maior valor a receber é ${maior} do vendedor ${nomeMaior}`)
    alert(`O menor valor a receber é ${menor} do vendedor ${nomeMenor}`)
}

function Exer_8(){
    let vetor = new Array(7)
    for(let i=0;i<7;i++){
        let objeto = {
            nome: prompt(`Informe o nome do aluno ${i+1}`),
            media: Number(prompt(`Informe a média do aluno ${i+1}`))
        }
        vetor[i] = objeto
    }
    
    let nomeMaiorMedia = vetor[0].nome
    let maiorMedia = vetor[0].media
    for(let i=0;i<7;i++){ 
        if (vetor[i].media > maiorMedia){
            maiorMedia = vetor[i].media
            nomeMaiorMedia = vetor[i].nome
        }
        if (vetor[i].media < 7){
            alert(`O aluno ${vetor[i].nome} está de exame e precisa tirar ${10 - vetor[i].media}` )
        }
    }
    alert(`Nome do aluno com maior média ${nomeMaiorMedia} com média ${maiorMedia}`)
}

function Exer_9(){
    let vetor = new Array(10)
    
    for(let i=0;i<10;i++){
        let objeto = {
            nome: prompt(`Informe o nome do produto ${i+1}`),
            codigo: Number(prompt(`Informe o código do produto ${i+1}`)),
            preco:  Number(prompt(`Informe o preço do produto ${i+1}`))
        }
        vetor[i] = objeto
    }

    for(let i=0;i<10;i++){
        if ((vetor[i].codigo % 2 == 0) && (vetor[i].preco > 1000)) {
            vetor[i].novo = vetor[i].preco + (vetor[i].preco*20/100)
        }
        else if (vetor[i].codigo % 2 == 0){
            vetor[i].novo = vetor[i].preco + (vetor[i].preco*15/100)
        }
        else if (vetor[i].preco > 1000){
            vetor[i].novo = vetor[i].preco + (vetor[i].preco*10/100)
        }
        else {
            vetor[i].novo = -1 
        }
    }
    for(let i=0;i<10;i++){
        if (vetor[i].novo != -1) {
            alert(`Produto ${vetor[i].nome} com código ${vetor[i].codigo} tinha preço ${vetor[i].preco} e terá novo preço ${vetor[i].novo}`)
        }
    }
}