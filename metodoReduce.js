//Exemplos

//Exemplo 1: Soma de elementos em um array

const numeros = [10, 20, 30, 40];

const soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

console.log('A soma dos elementos do array é:', soma); // Saída: A soma dos elementos do array é: 100



/*-----------------------------------------------------------------------------------------------------------------------*/
console.log("----------------------------------------------------------------------------------------------------------1")


//Exemplo 2: Concatenação de strings em um array

const palavras = ['Olá', 'mundo', '!'];

const frase = palavras.reduce((acumulador, valorAtual) => acumulador + ' ' + valorAtual, '');

console.log('A frase é:', frase); // Saída: A frase é: Olá mundo !



/*-----------------------------------------------------------------------------------------------------------------------*/
console.log("----------------------------------------------------------------------------------------------------------2")

//Exemplo 3: Encontrando o maior valor em um array

const numeros_Ex3 = [8, 15, 3, 22, 7];

const maiorValor = numeros_Ex3.reduce((acumulador, valorAtual) => (valorAtual > acumulador ? valorAtual : acumulador));

console.log('O maior valor do array é:', maiorValor); // Saída: O maior valor do array é: 22


  
/*-----------------------------------------------------------------------------------------------------------------------*/
console.log("----------------------------------------------------------------------------------------------------------3")


//Exemplo 4: Encontrar a pessoa mais velha.

const pessoas = [
  { nome: 'Alice', idade: 25 },
  { nome: 'Bob', idade: 30 },
  { nome: 'Carol', idade: 35 }
];

const pessoaMaisVelha = pessoas.reduce((acumulador, pessoa) => (pessoa.idade > acumulador.idade ? pessoa : acumulador));

console.log('A pessoa mais velha é:', pessoaMaisVelha); // Saída: A pessoa mais velha é: { nome: 'Carol', idade: 35 }


/*-----------------------------------------------------------------------------------------------------------------------*/
console.log("----------------------------------------------------------------------------------------------------------4")


//Exemplo 5: Concatenação de strings

const pessoas_Ex5 = [
  { nome: 'Alice', idade: 25 },
  { nome: 'Bob', idade: 30 },
  { nome: 'Carol', idade: 35 }
];

const nomesConcatenados = pessoas_Ex5.reduce((acumulador, pessoa) => acumulador + pessoa.nome + ' ', '');

console.log('Nomes concatenados:', nomesConcatenados); // Saída: Nomes concatenados: Alice Bob Carol


/*-----------------------------------------------------------------------------------------------------------------------*/
console.log("----------------------------------------------------------------------------------------------------------5")


//Exemplo 6: Soma de despesas

const despesasMensais = {
  janeiro: 300,
  fevereiro: 400,
  marco: 200
};

const somaDespesas = Object.values(despesasMensais).reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

console.log('A soma das despesas mensais é:', somaDespesas); // Saída: A soma das despesas mensais é: 900


/*-----------------------------------------------------------------------------------------------------------------------*/
console.log("----------------------------------------------------------------------------------------------------------6")


//Exemplo 7: Encontrar o mês com mais dias

const mesesDias = {
  janeiro: 31,
  fevereiro: 28,
  abril: 30
};

const mesMaisDias = Object.keys(mesesDias).reduce((acumulador, valorAtual) =>
  mesesDias[valorAtual] > mesesDias[acumulador] ? valorAtual : acumulador
);

console.log('O mês com mais dias é:', mesMaisDias); // Saída: O mês com mais dias é: janeiro

/*-----------------------------------------------------------------------------------------------------------------------*/
console.log("----------------------------------------------------------------------------------------------------------7")


