function calcularNivelRankeado( vitorias, derrotas) {
     let saldoVitorias = vitorias - derrotas;
    let nivel = "";
    
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else { nivel = "Imortal";}
    
    return {
        saldoVitorias: saldoVitorias,
        nivel: nivel
    };
}

let vitoriasJogador = 65;
let derrotasJogador = 55;
let resultado = calcularNivelRankeado(vitoriasJogador, derrotasJogador);

console.log("---");
console.log("Demonstração de Laço de Repetição (Simulação de Partidas):");
for (let i = 1; i <= 3; i++) {
    console.log(`Partida ${i} registrada com sucesso.`);
}
console.log("---");

let saldo = resultado.saldoVitorias;
let nivelDoHeroi = resultado.nivel;

console.log(`O Herói tem de saldo de ${saldo} vitórias e está no nível de ${nivelDoHeroi}`); 
