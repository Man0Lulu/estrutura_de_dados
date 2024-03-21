//Essa é uma fora de fazer um array
var mes = []

mes[0] = 'janeiro'
mes[1] = 'fevereiro'
mes[2] = 'março'
mes[3] = 'abril'
mes[4] = 'maio'
mes[5] = 'junho'
mes[6] = 'julho'
mes[7] = 'agosto'
mes[8] = 'setembro'
mes[9] = 'outubro'
mes[10] = 'novembro'
mes[11] = 'dezembro'

//console.log(mes[1])

//novo jeito de fazer array
var diasdasemana = new Array('segunda-feira', 'teça-feira', 'quarta-feira',
'quinta-feira', 'sexta-feira', 'sabado', 'domingo')

//acessando elementos de um array
for(var i = 0; i < diasdasemana.length; i++){
    console.log(diasdasemana[i])
}


//var fibonnaci = []

//fibonnaci[0] = 0
//fibonnaci[1] = 1
//fibonnaci[2] = 2
//acessando elementos atraves da iteração
//for(var f = 3; f < 20; f++ ){
//    fibonnaci[f] = fibonnaci[f - 1] + fibonnaci[f - 2] 
//}
//console.log(fibonnaci)

//inserindo valores no array
var lista = [0, 1, 2, 3, 4, 5, 6]

//aqui você consegue inserir valores para o array primeiro escolhendo o seu indice e depois o valor
//que vai receber, ex: no indice 9 ele está recebendo o valor 11 
lista[7] = 7
lista[8] = 8
lista[9] = 11
//push ele adiciona um novo valor sempre no final do array
lista.push(9)
lista.push(10)
//unshift ele adiciona um novo valor sempre no inicio do array, toda vez que você adiciona
//esses valores ele se transforma no indice 0 sempre
lista.unshift(-1)
lista.unshift(-2)
lista.unshift(-8)

//remover o valor do ultimo
lista.pop()
//remover o valor do inicio
lista.shift()

//console.log(lista)

//removendo valores e/ou adicionando incluindo primeiro o indice escolhido
var posicoes = [1, 2, 3, 4, 5, 6, 7 , 8, 9, 10, 11, 12]
//aqui ele vai incluir o indice 4 e ir apagando os valores até o indice 6
posicoes.splice(4,5)

//e pra adicionar além de incluir o indice que você quer,
//depois da virgula o indice tem ser 0,
//e depois de outra virgula os valores que você quer adicionar
posicoes.splice(4, 0, 6, 8)
console.log(posicoes)