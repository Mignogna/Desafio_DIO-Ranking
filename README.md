# 🏆 Desafio Rankeador de Heróis

Este projeto é uma solução para o desafio proposto no Bootcamp Santanter - Fundamentos de Lógica de Programação em parceria com a DIO (Digital Innovation One) com o objetivo de praticar o uso de **funções, variáveis, operadores, laços de repetição e estruturas de decisão** na construção de um algoritmo simples e eficaz.

O código implementa uma função que calcula o saldo de vitórias de um jogador e, com base nesse saldo, determina seu nível ranqueado, exibindo a mensagem final conforme o requisito.

## ⚙️ Funcionalidades

A função central do projeto, `calcularNivelRankeado`, recebe como parâmetros a quantidade de vitórias e derrotas de um herói, e executa as seguintes etapas:

1.  **Cálculo do Saldo:** Realiza a operação `(vitórias - derrotas)`.
2.  **Determinação do Nível:** Utiliza estruturas condicionais (`if/elif/else` ou `if/else if/else`) para classificar o herói em uma das seguintes categorias com base no número de **vitórias**:

| Quantidade de Vitórias | Nível |
| :--- | :--- |
| Menor que 10 | **Ferro** |
| Entre 11 e 20 | **Bronze** |
| Entre 21 e 50 | **Prata** |
| Entre 51 e 80 | **Ouro** |
| Entre 81 e 90 | **Diamante** |
| Entre 91 e 100 | **Lendário** |
| Maior ou igual a 101 | **Imortal** |

## 🚀 Código

O projeto foi desenvolvido em **JavaScript**.

```javascript
function calcularNivelRankeado(vitorias, derrotas) {
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
    } else {
        nivel = "Imortal";
    }
    
    return {
        saldoVitorias: saldoVitorias,
        nivel: nivel
    };
}

// Exemplo de uso
let vitoriasJogador = 95;
let derrotasJogador = 35;
let resultado = calcularNivelRankeado(vitoriasJogador, derrotasJogador);

console.log(`O Herói tem de saldo de **${resultado.saldoVitorias}** está no nível de **${resultado.nivel}**`);
// Saída esperada: "O Herói tem de saldo de **60** está no nível de **Lendário**"
