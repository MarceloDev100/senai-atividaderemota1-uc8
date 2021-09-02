let pecas = ['amortecedor', 'embreagem', 'pastilha']

//Verifica se a lista excedeu sua capacidade.
if(pecas.length > 10) {
    console.log('Capacidade insuficiente na lista');
}else{
    console.log('É permitido cadastrar mais peças');
}
    

let peso = 120

//Verifica se o peso é superior a 100 gramas.
if(peso > 100){
    console.log('Peso adequado da peça');
}else{
    console.log('Peso insuficiente');
}


let nomePeca = 'Disco de freio'

//Verifica se o nome da peça tem mais de 3 caracteres.
if(nomePeca.length > 3) {
    console.log('Nome adequado');
}else if(nomePeca.length == 0){
    console.log('Nome não pode ser vazio');
}else{
    console.log('O nome deve possuir mais de 3 caracteres');
}



