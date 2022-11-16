// Fornece as informações dos atletas
let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas:  [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];

// Obtem e imprime a média e informações dos atletas no console
function obterMedias(atletas){

for(let i = 0; i < atletas.length; i++){ // Roda o código para todos os objetos da matriz

  let media = atletas[i].notas.sort((a, b) => {
    if (a > b) return 1; // Ordena notas do maior para o menor
  });

  media = media.slice(1, media.length - 1); // Exclui a menor e maior nota, obtendo as notas do meio

  let comprimento = media.length; // Conta a quantidade de notas que sobraram

  media = media.reduce(function(total, atual){
    return total + atual; // Soma as notas
  },0) / comprimento // Divide a soma das notas pela quantidade de notas somadas, obtendo a média

  //Imprime o nome do atleta, as notas obtidas por ele e a sua média válida de notas
  console.log(`Atleta: ${atletas[i].nome}
Notas Obtidas: ${atletas[i].notas}
Média Válida: ${media}
`)
}
}

// Chama a função
obterMedias(atletas)

// Exibido no console:

// Atleta: Cesar Abascal
// Notas Obtidas: 10,9.34,8.42,10,7.88
// Média Válida: 9.253333333333332

// Atleta: Fernando Puntel
// Notas Obtidas: 8,10,10,7,9.33
// Média Válida: 9

// Atleta: Daiane Jelinsky
// Notas Obtidas: 7,10,9.5,9.5,8
// Média Válida: 9.666666666666666

// Atleta: Bruno Castro
// Notas Obtidas: 10,10,10,9,9.5
// Média Válida: 9.666666666666666
