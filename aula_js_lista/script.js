let par_impar = [2, 5, 7, 75, 0, 49, 82, -4, 13, 6, 10];
let soma = 0;


//Ímpar ou Par
let numerosPares = [];
let numerosImpares = [];

par_impar.forEach(num => {
    if (num % 2 == 0){
        numerosPares.push(num);
    } else{
        numerosImpares.push(num);
    }
})
console.log(numerosPares + " são pares");
console.log(numerosImpares + " são impares");

//Soma
par_impar.forEach(num =>{
    soma = soma + num;
})

//Média
let media = 0;
media = soma / par_impar.length;

console.log("A média é " + media);

//Moda
let maiorContagem = 0;
let numeroModa = 0;

for (let i = 0; i < par_impar.length; i++) {
    let contadorAtual = 0;

    for (let j = 0; j < par_impar.length; j++) {
        if (par_impar[i] === par_impar[j]) {
            contadorAtual++;
        }
    }

    if (contadorAtual > maiorContagem) {
        maiorContagem = contadorAtual;
        numeroModa = par_impar[i];
    }
}

if (maiorContagem > 1) {
    console.log("A moda é " + numeroModa + " e aparece " + maiorContagem + " vezes");
} else {
    console.log("Não existe moda");
}

//Mediana
let mediana = 0;
let listaOrdenada = [...par_impar].sort((a, b) => a-b);

if (listaOrdenada.length % 2 == 0){
    let numMeio1 = listaOrdenada.length / 2;
    let numMeio2 = numMeio1 - 1;

    mediana = (numMeio1 + numMeio2) / 2;
    console.log("A mediana é " + mediana);
} else{
    mediana = Math.floor(listaOrdenada.length / 2);
    console.log("A mediana é " + mediana);
}

//Desvio Padrão
let quadradoDaDiferenca = [];

par_impar.forEach(num => {
    quadradoDaDiferenca.push((num - media) ** 2);
});

let somaDosQuadrados = 0;
quadradoDaDiferenca.forEach(valor => {
    somaDosQuadrados = somaDosQuadrados + valor;
})

let dividirPelaLista = 0;
dividirPelaLista = somaDosQuadrados / par_impar.length

let desvioPadrao = dividirPelaLista ** 0.5;

console.log("O desvio padrão é " + desvioPadrao);