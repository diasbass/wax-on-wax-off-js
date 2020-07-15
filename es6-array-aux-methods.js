// Métodos Auxiliares para Arrays - ES6
/*
  forEach()
  map()
  filter()
  find() 
  every() 
  some() 
  reduce()
*/

/*
  **Aplicando método forEach
*/
var nomes = ['rodrigo','erika'];
nomes.push('novo nome');
nomes.forEach(function(nome){
  console.log(nome);
})
console.log('---- // ---');

/*
  **Aplicando método Map
*/
var numeros = [ 1, 2, 3, 4, 5];

var dobro = numeros.map(function(numero){
  return numero*2;
})
console.log(dobro);
console.log('---- // ---');

/*
  **Aplicando método Filter (usado para buscar vários registros)
*/
var alunos = [
  {id: '1', nome: 'joão', idade: 10, sexo: 'masculino'},
  {id: '2', nome: 'josé', idade: 20, sexo: 'masculino'},
  {id: '3', nome: 'jorge', idade: 30, sexo: 'masculino'},
  {id: '4', nome: 'juraci', idade: 40, sexo: 'feminino'}
]

var alunosDeMaior = alunos.filter(function(aluno){
  return aluno.idade >= 18;
})

console.log(alunosDeMaior);
console.log('---- // ---');

/*
  **Aplicando método Find (usado para buscar 1 registro)
*/

var alunoProcurado = alunos.find(function(aluno){
  return aluno.nome === 'juraci'
})

console.log(alunoProcurado);
console.log('---- // ---');

/*
  ** Aplicando método Every
*/

var jogos = [
  {id: '1', nome: 'God of War', categoria: 'Ação'},
  {id: '2', nome: 'Need For Speed', categoria: 'Corrida'},
  {id: '3', nome: 'Tomb Raider', categoria: 'Ação'},
  {id: '4', nome: 'GTA 5', categoria: 'Ação'}
]

//Testa se todos os jogos são de ação
var todosJogosAcao = jogos.every(function(jogo){
  return jogo.categoria === 'Ação'
})

console.log(todosJogosAcao);
console.log('---- // ---');

/*
  ** Aplicando método Some
*/

var algumJogoCorrida = jogos.some(function(jogo){
  return jogo.categoria === 'Corrida'
})

console.log(algumJogoCorrida);
console.log('---- // ---');

/*
  ** Aplicando método Reduce
*/

// Efetuar uma soma
var soma = numeros.reduce(function(somaAux, numero){
  return somaAux + numero;
}, 0)

console.log(soma);
console.log('---- // ---');

// Coletar somente os nomes

var nomes = alunos.reduce(function(arrayNomes,aluno){
  arrayNomes.push(aluno.nome);
  return arrayNomes;
}, [])

console.log(nomes);
console.log('---- // ---');
