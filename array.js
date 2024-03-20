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


var fibonnaci = []

fibonnaci[0] = 0
fibonnaci[1] = 1
fibonnaci[2] = 2
//acessando elementos atraves da iteração
for(var f = 3; f < 20; f++ ){
      fibonnaci[f] = fibonnaci[f - 1] + fibonnaci[f - 2] 
}
console.log(fibonnaci)